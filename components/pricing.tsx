// DONE REVIEWING: GITHUB COMMIT - 08

import {CheckIcon} from "@heroicons/react/20/solid"
import Link from "next/link"
import {cn} from "../lib/utils"
import {Button} from "./ui"

const tiers = [
  {
    id: "tier-personal",
    name: "Personal",
    href: "#",
    price: 39,
    description: "For individuals who need flexibility and customization.",
    featured: true,
    features: [
      "Up to 5 products",
      "Up to 10 templates",
      "Up to 1500 subscribers",
      "Up to 2500 emails sent",
      "Basic analytics",
      "24/7 support"
    ]
  },
  {
    id: "tier-team",
    name: "Team",
    href: "#",
    price: 99,
    description: "For companies that need personalized support.",
    featured: false,
    features: [
      "Un-limited products",
      "Un-limited subscribers",
      "Advanced analytics",
      "Personalization dashboard"
    ]
  }
]

const Pricing = function Pricing() {
  const clipPath =
    "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-xl-3">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-30"
          style={{clipPath}}
        />
      </div>
      <div className="mx-auto max-w-xl-2 text-center lg:max-w-xl-4">
        <h2 className="text-base font-medium leading-7 text-primary">Pricing</h2>
        <p className="mt-2 text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
          Simple and transparent pricing
        </p>
        <p className="mx-auto mt-6 max-w-xl-2 text-lg leading-8 text-muted-foreground">
          Choose a plan that is right for you and your business needs and get started today with OMQ
          Market-Place services and support.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-xl-4 lg:grid-cols-2">
        {tiers.map((element, index) => (
          <div
            key={element.id}
            className={cn(
              element.featured
                ? "relative bg-background shadow-xl-2"
                : "bg-border/20 sm:mx-8 lg:mx-0",
              element.featured
                ? ""
                : index === 0
                  ? "rounded-t-lg sm:rounded-b-none lg:rounded-bl-lg lg:rounded-tr-none"
                  : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-lg",
              "rounded-lg p-8 ring-1 ring-border sm:p-10"
            )}>
            <h3 id={element.id} className="text-base font-medium leading-7 text-primary">
              {element.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-xl-5 font-bold tracking-tight text-foreground">
                {element.price}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                /month
              </span>
            </p>
            <p className="mt-6 text-base leading-7 text-muted-foreground">{element.description}</p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground sm:mt-10">
              {element.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={element.featured ? "primary" : "outline"}
              size="lg"
              className="mt-8 w-full px-3.5 py-2.5 sm:mt-10"
              asChild>
              <Link href={element.href} aria-describedby={element.id}>
                Get Started
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
