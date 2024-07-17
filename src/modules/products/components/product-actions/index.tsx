"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"
import OptionQuantity from "@modules/products/components/option-quantity"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import MobileActions from "../mobile-actions"
import ProductPrice from "../product-price"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
  disabled?: boolean
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [isAdding, setIsAdding] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const countryCode = useParams().countryCode as string

  const variants = product.variants

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (variant && !variant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (variant && variant.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }

  const handleLike = () => {
    if (!isLiking) {
    
      setIsLiking(true); 

      
      setTimeout(() => {
       
        setIsLiked(true); 
        setIsLiking(false); 
      }, 1000); 
  };}

  return (
    <>
      <div className="flex w-full flex-col gap-y-2" ref={actionsRef}>
      <Divider />
        <div>
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-y-4 mt-5">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id} className="flex w-full gap-5 py-2">
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                    <OptionQuantity
                      current={options.quantity || ""}
                      updateOption={updateOptions}
                      title="Quantity"
                      data-testid="product-quantity"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                )
              })}
              <Divider />
            </div>
          )}
        </div>
        <div>
          {/* {!variant && (
        <Button
          // onClick={handleSelectVariant}
          
          variant="secondary"
          className="w-full h-10 mb-4" 
          data-testid="select-variant-button"
        >
          Select variant
        </Button>
      )} */}
        </div>
        <div className="flex w-full h-[48px] items-center justify-between mt-2">
          <ProductPrice product={product} variant={variant} region={region} />
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              // disabled={!inStock || !variant || !!disabled || isAdding}
              // variant="primary"
              className="xsmall:w-[80px] 2xsmall:w-[80px] xsmall:h-[32px] 2xsmall:h-[32px] small:w-[145px] small:h-[48px] small:custom-button bg-whiteText text-violetLight !boder-2 !border-violetLight hover:bg-violetLight hover:text-whiteText"
              isLoading={isAdding}
              data-testid="add-product-button"
            >
              Buy now
            </Button>

            <Button
              onClick={handleAddToCart}
              // disabled={!inStock || !variant || !!disabled || isAdding}
              variant="primary"
              className="xsmall:w-[80px] 2xsmall:w-[80px] xsmall:h-[32px] 2xsmall:h-[32px] small:w-[145px] small:h-[48px] small:custom-button bg-myviolet text-whiteText hover:bg-whiteText hover:text-violetLight"
              isLoading={isAdding}
              data-testid="add-product-button"
            >
              {!inStock ? "Out of stock" : "Add to cart"}
            </Button>

            <button
              onClick={handleLike}
              
              className="flex xsmall:w-[46px] 2xsmall:w-[46px] xsmall:h-[32px] 2xsmall:h-[32px] small:w-[46px] small:h-[48px] p-3 rounded border-2 border-gray-light bg-text-whiteText items-center justify-center"
              disabled={isLiking}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={isLiked ? 'text-red-500' : 'text-gray'}
              />
            </button>
          </div>
          <MobileActions
            product={product}
            variant={variant}
            region={region}
            options={options}
            updateOptions={updateOptions}
            inStock={inStock}
            handleAddToCart={handleAddToCart}
            isAdding={isAdding}
            show={!inView}
            optionsDisabled={!!disabled || isAdding}
          />
        </div>

      </div>
    </>
  )
}
