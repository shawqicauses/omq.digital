// DONE REVIEWING: GITHUB COMMIT - 15

import ClientsPartners from "@/components/clients-partners"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Whys from "@/components/whys"
import {setRequestLocale} from "next-intl/server"

const Page = function Page({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale)

  return (
    <main>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Whys />
      <ClientsPartners locale={locale} />
      <Portfolio locale={locale} />
    </main>
  )
}

export default Page
