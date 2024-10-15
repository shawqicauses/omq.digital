// DONE REVIEWING: GITHUB COMMIT - 12

import Hero from "@/components/hero"
import MarketPlace from "@/components/market-place"
import Portfolio from "@/components/portfolio"
import Pricing from "@/components/pricing"
import Services from "@/components/services"
import Whys from "@/components/whys"

const Page = async function Page({params: {locale}}: {params: {locale: string}}) {
  return (
    <main>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Whys />
      <Portfolio />
      <MarketPlace />
      <Pricing />
    </main>
  )
}

export default Page
