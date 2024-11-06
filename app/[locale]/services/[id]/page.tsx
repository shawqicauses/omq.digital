"use client"

// DONE REVIEWING: GITHUB COMMIT - 02

import trpc from "@/client"
import {Service} from "@/payload-types"
import {Loader2Icon} from "lucide-react"

const Page = function Page({params: {id, locale}}: {params: {id: string; locale: string}}) {
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
    <div className="flex h-screen items-center justify-center text-foreground">
      Service {service.title} in {locale}
    </div>
  )
}

export default Page
