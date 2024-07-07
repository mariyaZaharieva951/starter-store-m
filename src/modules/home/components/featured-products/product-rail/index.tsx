import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="flex flex-col jusify-between items-start">
      <div className="flex justify-between mb-8">
        <Text className="text-[22px] font-bold text-left">{collection.title}</Text>
      </div>
      <ul className="flex flex-col gap-y-5 gap-x-12 mb-5">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
      <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
    </div>
  )
}
