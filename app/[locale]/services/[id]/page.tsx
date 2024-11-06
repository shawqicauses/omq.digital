"use client"

// DONE REVIEWING: GITHUB COMMIT - 01

import trpc from "@/client"
import {Service} from "@/payload-types"

const Page = function Page({params: {id, locale}}: {params: {id: string; locale: string}}) {
  const {data, isLoading} = trpc.getService.useQuery({id, locale})

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
      Service {id} in {locale}
    </div>
  )
}

export default Page
