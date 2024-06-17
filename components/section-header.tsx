// DONE REVIEWING: GITHUB COMMIT 1️⃣
import Image from "next/image"

const SectionHeader = function SectionHeader() {
  const clipPath =
    "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"

  return (
    <div className="relative isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Section Header Image"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="sm:ring-1/2 hidden sm:absolute sm:-top-10 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-xl-3">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
          style={{clipPath}}
        />
      </div>
    </div>
  )
}

export default SectionHeader
