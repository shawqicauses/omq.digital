"use client"

// DONE REVIEWING: GITHUB COMMIT - 09

import trpc from "@/client"
import {Service} from "@/payload-types"
import {Loader2Icon} from "lucide-react"
import {useTranslations} from "next-intl"
import Container from "./container"
import ServicesList from "./services-list"

const Services = function Services({locale}: {locale: string}) {
  const {data, isLoading} = trpc.getServices.useQuery({locale})

  const services = data?.services.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    icon: service.icon
  }))

  const t = useTranslations("home-page.services")

  return (
    <div className="pt-24 sm:pt-32">
      <Container>
        <div className="mx-auto max-w-xl-2 lg:text-center">
          <h2 className="text-base font-medium leading-7 text-primary">{t("headline")}</h2>
          <p className="mt-2 text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
            {t("title")}
          </p>
          <p className="mt-6 text-lg italic leading-8 text-muted-foreground">{t("quote")}</p>
        </div>
        {(isLoading && (
          <div className="mt-16 flex items-center justify-center text-primary">
            <Loader2Icon className="h-10 w-10 animate-spin stroke-current" />
          </div>
        )) ||
          (services && <ServicesList locale={locale} services={services as Service[]} />)}
      </Container>
    </div>
  )
}

export default Services
