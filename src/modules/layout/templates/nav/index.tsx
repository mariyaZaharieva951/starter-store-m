

import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Account from "@modules/layout/components/account"
import Likes from "@modules/layout/components/likes"

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)


  return (
    <div className="sticky top-0 inset-x-0 z-50 group pt-[20px]">
      <div className="box flex font-rubik max-w-screen justify-between w-[380px] lg:w-full lg:gap-0">
          <div className="lg:flex hidden gap-3">
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
                // size="20px"
                className="text-gray"
              />
            </Link>
          </div>
          <div className="lg:flex justify-between lg:gap-3">
            <div className="hidden lg:block text-gray lg:text-base text-sm cursor-pointer hover:bg-gray-light rounded">
              Order tracking
            </div>
            <div className="hidden lg:block text-gray lg:text-base text-sm cursor-pointer hover:bg-gray-light rounded">
              Help
            </div>
            <div className="hidden lg:block">
              {/* <LanguageSwitcher /> */}
            </div>
          </div>
        </div>
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Store
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
               <Likes />
            
              <Account />
          
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
