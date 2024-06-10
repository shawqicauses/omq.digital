// DONE REVIEWING: GITHUB COMMIT 1️⃣
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
    </div>
  )
}

export default Pricing
