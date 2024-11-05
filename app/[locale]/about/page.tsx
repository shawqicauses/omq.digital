"use client"

// DONE REVIEWING: GITHUB COMMIT - 03
import trpc from "@/client"
import {Logo} from "@/components/navigation"
import {About} from "@/payload-types"
import {Loader2Icon} from "lucide-react"
import {useTranslations} from "next-intl"

const Page = function Page({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations()

  const {data, isLoading} = trpc.getAbouts.useQuery({locale})

  const abouts = data?.abouts.map((about) => ({
    id: about.id,
    title: about.title,
    description: about.description
  })) as About[]

  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  if (isLoading || !abouts)
    return (
      <div className="my-16 flex h-full min-h-screen items-center justify-center text-primary">
        <Loader2Icon className="h-10 w-10 animate-spin stroke-current" />
      </div>
    )

  return (
    <main className="relative isolate mx-auto mb-24 w-full max-w-xl-6 space-y-24 px-6 lg:px-8">
      {/* Background */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-xl-3">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none transform-gpu bg-gradient-to-r from-primary to-secondary opacity-25"
          style={{clipPath}}
        />
      </div>

      {/* Header */}
      <header>
        <Logo className="mx-auto !h-52" />
        <h1 className="-mt-5 text-center text-xl-3 font-bold leading-none tracking-tight text-foreground sm:text-xl-4">
          {t("about.title")}.
        </h1>
        <p className="mt-5 text-justify text-xl leading-10 text-muted-foreground">
          {abouts[0].description}
        </p>
      </header>

      {abouts.slice(1).map((about) => (
        <div key={about.id} className="flex flex-col gap-5">
          <h2 className="text-center text-xl-2 font-bold !leading-normal tracking-tight text-foreground sm:text-xl-3">
            {about.title}
          </h2>
          {about.description.split(". ").map((element) => (
            <p key={element} className="text-justify text-xl leading-10 text-muted-foreground">
              {element}
            </p>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Page
