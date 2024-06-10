// DONE REVIEWING: GITHUB COMMIT 4️⃣

const tiers = [
  {
    id: "tier-personal",
    name: "Personal",
    href: "#",
    price: 39,
    description: "For individuals who need flexibility and customization.",
    featured: true,
    features: ["Up to 10 products", "Up to 1500 subscribers", "Basic analytics", "24/7 support"]
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
      "Personalization dashboard",
      "24/7 support"
    ]
  }
]

const Pricing = function Pricing() {
  const clipPath =
    "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"

  return (
    <div className="relative isolate bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-xl-3">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-violet-400 to-blue-400 opacity-30"
          style={{clipPath}}
        />
      </div>
      <div className="mx-auto max-w-xl-2 text-center lg:max-w-xl-4">
        <h2 className="text-base font-medium leading-7 text-primary">Pricing</h2>
        <p className="mt-2 text-xl-3 font-bold tracking-tight text-white sm:text-xl-4">
          Simple and transparent pricing
        </p>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          Choose a plan that is right for you and your business needs and get started today with OMQ
          Market-Place services and support.
        </p>
      </div>
    </div>
  )
}

export default Pricing
