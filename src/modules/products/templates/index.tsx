import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"
import { Heading, Text } from "@medusajs/ui"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import ImageDetails from "../components/image-details"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="flex flex-col">
      <div
        className="content-container flex flex-col small:flex-col small:items-start py-6 relative gap-10"
        data-testid="product-container"
      >
        <div className="w-full mx-auto flex small:flex-row small:gap-12 xsmall:flex-col 2xsmall:flex-col small:items-start 2xsmall:items-center xsmall:items-center ">
          <div className="block w-1/2 relative">
            <ImageDetails images={product?.images || []} />

          </div>
          <div className="small:w-1/2 flex flex-col items-start small:flex-col gap-3 small:top-48 small:py-0 " >
            <ProductInfo product={product} />
            <div className="w-full">
              <ProductOnboardingCta />
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
            </div>

          </div>

        </div>

        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-full w-full py-8  gap-y-6 ">
          <Heading level="h2" className="text-2xl leading-10 text-ui-fg-base pl-3" data-testid="product-title">
            Description
          </Heading>
          <Text className="text-medium text-ui-fg-subtle text-gray-dark" data-testid="product-description">
            {product.description}
          </Text>
          <ProductTabs product={product} />
        </div>
      </div>


      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
