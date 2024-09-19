// DONE REVIEWING: GITHUB COMMIT - 09

import Hero from "@/components/hero"
import MarketPlace from "@/components/market-place"
import Portfolio from "@/components/portfolio"
import Pricing from "@/components/pricing"
import Services from "@/components/services"

const Page = async function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <MarketPlace />
      <Pricing />
    </main>
  )
}

export default Page
