// DONE REVIEWING: GITHUB COMMIT - 13

import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Whys from "@/components/whys"

const Page = async function Page({params: {locale}}: {params: {locale: string}}) {
  return (
    <main>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Whys />
      <Portfolio />
    </main>
  )
}

export default Page
