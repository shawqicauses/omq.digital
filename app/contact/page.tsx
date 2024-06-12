// DONE REVIEWING: GITHUB COMMIT 1️⃣
const Page = function Page() {
  const id = "contact-pattern"
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
                  <path strokeWidth={0} fill={`url(#${id})`} d="M-470.5 0h201v201h-201Z" />
                  <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
