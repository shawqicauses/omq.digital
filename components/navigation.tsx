"use client"

// DONE REVIEWING: GITHUB COMMIT - 06

import {Link} from "@/i18n/routing"
import {cn} from "@/lib/utils"
import {Dialog, DialogPanel} from "@headlessui/react"
import {Bars3Icon, ChevronRightIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {useTranslations} from "next-intl"
import Image from "next/image"
import {useState} from "react"
import {Button} from "./ui"

const navigation = [
  {name: "home", href: "/"},
  {name: "about", href: "/about"},
  {name: "services", href: "/services"},
  {name: "portfolio", href: "/portfolio"},
  {name: "contact", href: "/contact"}
]

const Logo = function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">OMQ Solutions</span>
      <Image
        src="/assets/logo-edited.png"
        alt="OMQ Solutions Logo White"
        fill
        className="!static !h-24 !w-auto"
      />
    </Link>
  )
}

const Navigation = function Navigation({locale}: {locale: string}) {
  const t = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-24 border-b border-border bg-background/20 backdrop-blur">
      <nav aria-label="Global" className="flex items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-400"
            onClick={() => setMobileMenuOpen(true)}>
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
              {t(`navigation.${element.name}`)}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-5">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" locale={locale === "en" ? "ar" : "en"}>
              {t(locale === "en" ? "languages.ar" : "languages.en")}
            </Link>
          </Button>
          <Link
            href="/contact"
            className="shc-flex-center shc-label-base shc-transition gap-2 text-white hover:text-violet-400">
            {t("navigation.request-service")}{" "}
            <ChevronRightIcon
              aria-hidden="true"
              className={cn("h-5 w-5", locale === "ar" ? "rotate-180" : "")}
            />
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-400"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close Main Menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-900">
              <div className="space-y-2 py-6">
                {navigation.map((element) => (
                  <Link
                    key={element.href}
                    href={element.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="shc-label-base shc-transition -mx-3 block rounded-lg px-3 py-2 text-base text-white hover:bg-slate-900">
                    {t(`navigation.${element.name}`)}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="shc-label-base shc-transition mb-3 flex w-full items-center justify-between gap-2 rounded-lg py-2 text-base text-white hover:bg-slate-900">
                  {t("navigation.request-service")}{" "}
                  <ChevronRightIcon
                    aria-hidden="true"
                    className={cn("h-5 w-5", locale === "ar" ? "rotate-180" : "")}
                  />
                </Link>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/" locale={locale === "en" ? "ar" : "en"}>
                    {t(locale === "en" ? "languages.ar" : "languages.en")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navigation
