// DONE REVIEWING: GITHUB COMMIT 6️⃣
import {
  BuildingStorefrontIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/20/solid"
import Image from "next/image"
import Container from "./container"

const features = [
  {
    name: "Easy Store Setup",
    description: "Get your store up and running in no time with our user-friendly setup process.",
    icon: BuildingStorefrontIcon
  },
  {
    name: "Customizable Templates",
    description: "Choose from our templates that you can customize to match your brand.",
    icon: WrenchScrewdriverIcon
  },
  {
    name: "Secure Payment Processing",
    description: "A safe and secure shopping experience with our payment system.",
    icon: CreditCardIcon
  }
]

const MarketPlace = function MarketPlace() {
  return (
    <div className="bg-slate-950 pt-24 sm:pt-32">
      <Container>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto grid max-w-xl-2 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-xl-3 font-bold tracking-tight text-white sm:text-xl-4">
                Power Your Business With Our Solutions.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Discover the powerful features of our market-place system designed to grow small
                businesses and provide everything for them.
              </p>
            </div>
            <Image
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Market-Place Screen Shot"
              width={2432}
              height={1442}
              className="relative min-w-full rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem]"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none">
                {features.map((element) => (
                  <div key={element.name} className="relative">
                    <dt className="ml-9 inline-block font-semi-bold text-white">
                      <element.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      {element.name}:
                    </dt>{" "}
                    <dd className="inline">{element.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MarketPlace
