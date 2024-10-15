// DONE REVIEWING: GITHUB COMMIT - 11

import Hero from "@/components/hero"
import MarketPlace from "@/components/market-place"
import Portfolio from "@/components/portfolio"
import Pricing from "@/components/pricing"
import Services from "@/components/services"

const Page = async function Page({params: {locale}}: {params: {locale: string}}) {
  return (
    <main>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Portfolio />
      <MarketPlace />
      <Pricing />
    </main>
  )
}

export default Page
