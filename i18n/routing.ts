// DONE REVIEWING: GITHUB COMMIT - 01
import {createNavigation} from "next-intl/navigation"
import {defineRouting} from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en"
})

export const {useRouter, usePathname, redirect, Link} = createNavigation(routing)
