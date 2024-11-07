"use client"

// DONE REVIEWING: GITHUB COMMIT - 04

import trpc from "@/client"
import {Button} from "@/components/ui"
import {Media, Service} from "@/payload-types"
import {CheckIcon, Loader2Icon} from "lucide-react"
import {useTranslations} from "next-intl"
import Image from "next/image"
import Link from "next/link"
import {Fragment} from "react"

const Page = function Page({params: {id, locale}}: {params: {id: string; locale: string}}) {
  const t = useTranslations("navigation")
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
      icon: element.icon,
      packages: element.packages
    })) as Service[]
  )[0]

  return (
    <main className="max-w-xl-8 relative isolate mx-auto mb-24 mt-48 w-full px-6 lg:px-8">
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
      <header className="mb-24">
        <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-lg border border-primary bg-background shadow-xl shadow-primary/20">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${(service.icon as Media).sizes.thumbnail_tablet.filename}`}
            alt={service.title}
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

      <p className="mb-24 text-center text-lg font-medium italic text-foreground">
        {locale === "ar" ? (
          <Fragment>اختر باقة {service.title} التي تناسب ميزانيتك.</Fragment>
        ) : locale === "en" ? (
          <Fragment>Choose the {service.title} package that fits your budget.</Fragment>
        ) : null}
      </p>

      {/* Packages */}
      <div>
        {[...service.packages, ...service.packages, ...service.packages].map((element, index) => (
          <div key={element.id + "-" + index} className="mb-24 flex flex-col items-center">
            <h2 className="mb-3 text-center text-base font-medium leading-7 text-primary">
              {element.title}
            </h2>
            <p className="mb-6 flex items-baseline gap-x-2">
              <span className="text-xl-5 font-bold tracking-tight text-foreground">
                {element.pricing.pricing_from} - {element.pricing.pricing_to}
              </span>
              <span className="text-base uppercase tracking-widest text-muted-foreground">
                / {{en: "BHD", ar: "د.ب"}[locale]}
              </span>
            </p>
            <Button size="lg" asChild className="mb-12">
              <Link href="http://wa.me/97339999728" target="_blank">
                {t("request-package")}
              </Link>
            </Button>
            <div className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {element.offerings.map((offering) => (
                <div
                  key={offering.id}
                  className="relative rounded-lg bg-background p-3 shadow-xl-2 ring-1 ring-border sm:p-6">
                  <h3 className="mb-4 text-xl font-medium !leading-relaxed text-foreground">
                    {offering.title}
                  </h3>
                  <p className="mb-4 flex items-baseline gap-x-2 leading-none">
                    <span className="text-xl font-medium tracking-tight text-foreground">
                      {offering.pricing.pricing_from} - {offering.pricing.pricing_to}
                    </span>
                    <span className="text-base uppercase tracking-widest text-muted-foreground">
                      / {{en: "BHD", ar: "د.ب"}[locale]}
                    </span>
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                    {offering.features.map((feature) => (
                      <li key={feature.id} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-primary" />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Page
