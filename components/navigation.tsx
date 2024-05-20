// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {Bars3Icon, ChevronRightIcon} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

const navigation = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Services", href: "/services"},
  {name: "Portfolio", href: "/portfolio"},
  {name: "Contact", href: "/contact"}
]

const Navigation = function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">OMQ Solutions</span>
            <Image
              src="/assets/omq-logo-white.png"
              alt="OMQ Solutions Logo White"
              fill
              className="!static !h-12 !w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-400">
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((element) => (
            <Link
              key={element.href}
              href={element.href}
              className="shc-label-base shc-transition text-white hover:text-violet-400">
              {element.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="shc-flex-center shc-label-base shc-transition gap-2 text-white hover:text-violet-400">
            Hire us <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
