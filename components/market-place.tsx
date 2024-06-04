// DONE REVIEWING: GITHUB COMMIT 3️⃣
import {
  BuildingStorefrontIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/20/solid"
import Image from "next/image"

const features = [
  {
    name: "Easy Store Setup",
    description: "Get your store up and running in no time with our user-friendly setup process.",
    icon: BuildingStorefrontIcon
  },
  {
    name: "Customizable Templates",
    description: "Choose from professional templates that you can customize to match your brand.",
    icon: WrenchScrewdriverIcon
  },
  {
    name: "Secure Payment Processing",
    description: "A safe and secure shopping experience with our integrated payment system.",
    icon: CreditCardIcon
  }
]

const MarketPlace = function MarketPlace() {
  return (
    <div className="bg-slate-950 py-24">
      <div className="mx-auto max-w-xl-7 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-20 sm:rounded-xl sm:px-10 sm:py-24 xl:px-24">
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
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
