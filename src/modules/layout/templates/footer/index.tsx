import { Text, clx } from "@medusajs/ui"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="box w-full mx-auto flex lg:flex-row flex-col items-center justify-between py-[20px]">
        <Text className="text-gray text-sm">Store © Copyright 2024, Inc. All rights reserved</Text>
        <div className="flex gap-3 mb-[20px]">
        <Link href="https://www.facebook.com" passHref>
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-gray w-[20px] h-[20px]"
              />
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-gray w-[20px] h-[20px]"
              />
            </Link>
            <Link href="https://www.youtube.com" passHref>
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-gray w-[20px] h-[20px]"
              />
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray w-[20px] h-[20px]"
              />
            </Link>
          </div>
    </footer>
  )
}
