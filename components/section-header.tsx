// DONE REVIEWING: GITHUB COMMIT - 06
import Image from "next/image"

type SectionHeaderProps = {
  image?: string
  title: string
  description: string
}

const SectionHeader = function SectionHeader({
  image = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  title,
  description
}: SectionHeaderProps) {
  const clipPath =
    "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"

  return (
    <div className="relative isolate mt-24 flex h-full items-center justify-center overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src={image}
        alt="Section Header Image"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-xl-3">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
          style={{clipPath}}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-xl-3 sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
          style={{clipPath}}
        />
      </div>
      <div className="mx-auto text-center">
        <h2 className="mx-auto max-w-xl-2 text-xl-4 font-bold tracking-tight text-foreground sm:text-xl-6">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl-3 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SectionHeader
