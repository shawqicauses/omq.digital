"use client"

// DONE REVIEWING: GITHUB COMMIT - 14

import ClientsPartners from "@/components/clients-partners"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Whys from "@/components/whys"

const Page = function Page({params: {locale}}: {params: {locale: string}}) {
  return (
    <main>
      <Hero locale={locale} />
      <Services locale={locale} asSection />
      <Whys />
      <ClientsPartners locale={locale} asSection />
      <Portfolio locale={locale} asSection />
    </main>
  )
}

export default Page
