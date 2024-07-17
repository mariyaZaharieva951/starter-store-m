import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info justify-between h-full">
      <div className="flex flex-col items-start gap-y-3 mx-auto 2xsmall:pt-10 xsmall:pt-10">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">
          {product.title}
        </Heading>

        <Text className="text-medium text-ui-fg-subtle text-gray-dark pb-2
        " data-testid="product-description">
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
