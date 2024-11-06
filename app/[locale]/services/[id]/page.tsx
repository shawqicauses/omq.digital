"use client"

// DONE REVIEWING: GITHUB COMMIT - 03

import trpc from "@/client"
import {Media, Service} from "@/payload-types"
import {Loader2Icon} from "lucide-react"
import Image from "next/image"

const Page = function Page({params: {id, locale}}: {params: {id: string; locale: string}}) {
  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  const {data, isLoading} = trpc.getService.useQuery({id, locale})

  if (isLoading || !data.service)
    return (
      <div className="my-16 flex h-full min-h-screen items-center justify-center text-primary">
        <Loader2Icon className="h-10 w-10 animate-spin stroke-current" />
      </div>
    )

  const service = (
    data.service.map((element) => ({
      id: element.id,
      title: element.title,
      description: element.description,
      icon: element.icon
    })) as Service[]
  )[0]

  return (
    <main className="relative isolate mx-auto mb-24 mt-48 w-full max-w-xl-7 px-6 lg:px-8">
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
        <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-xl border border-primary bg-muted/25 shadow-xl shadow-primary/20">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${(service.icon as Media).sizes.thumbnail_tablet.filename}`}
            alt={(service.icon as Media).sizes.thumbnail.filename}
            fill
            sizes="1.5rem"
            className="!static !h-auto !w-16"
          />
        </div>
        <h1 className="text-center text-xl-3 font-bold leading-none tracking-tight text-foreground sm:text-xl-4">
          {service.title}.
        </h1>
        <p className="mx-auto mt-5 max-w-xl-5 text-center text-xl leading-10 text-muted-foreground">
          {service.description}
        </p>
      </header>
    </main>
  )
}

export default Page
