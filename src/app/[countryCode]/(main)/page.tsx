import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Benefits from "@modules/home/components/benefits"
import Products from "@modules/home/components/products"
import Banner from "@modules/home/components/banner"
import Category from "@modules/home/components/category"
import Blog from "@modules/home/components/blog"
import Posters from "@modules/home/components/posters"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <Benefits/>
      <Products/>
      <Banner/>
      <Category/>
      <div className="py-12">
        <ul className="boxSmall w-full mx-auto flex flex-col lg:flex-row justify-between lg:py-20px px-2 lg:px-0 gap-7 lg:gap-0">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <Blog/>
      <Posters/>
    </>
  )
}
