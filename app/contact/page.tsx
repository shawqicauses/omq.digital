// DONE REVIEWING: GITHUB COMMIT 2️⃣
const Page = function Page() {
  const id = "contact-pattern"
  const clipPath =
    "polygon(74% 56%, 100% 38%, 97% 73%, 85% 100%, 80% 98%, 72% 67%, 60% 37%, 52% 32%, 47% 41%, 45% 65%, 27% 23%, 0% 35%, 17% 0%, 27% 23%, 76% 2%, 74% 56%)"

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-xl-7 grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-slate-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
                <defs>
                  <pattern
                    id={id}
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse">
                    <path fill="none" d="M130 200V.5M.5 .5H200" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-slate-800/20">
                  <path strokeWidth={0} d="M-470.5 0h201v201h-201Z" />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-xl-3 lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]">
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-violet-400 to-blue-400 opacity-20"
                  style={{clipPath}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
