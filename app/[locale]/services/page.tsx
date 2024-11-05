"use client"

// DONE REVIEWING: GITHUB COMMIT - 09
import trpc from "@/client"
import {Service} from "@/payload-types"
import {Loader2Icon} from "lucide-react"
import {useTranslations} from "next-intl"
import {Fragment} from "react"
import {Container, SectionHeader, ServicesList} from "../../../components/index"

const ServicesPage = function ServicesPage({params: {locale}}: {params: {locale: string}}) {
  const {data, isLoading} = trpc.getServices.useQuery({locale})

  const services = data?.services.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    icon: service.icon
  })) as Service[]

  const t = useTranslations("home-page.services")

  return (
    <Fragment>
      <SectionHeader title={t("title")} description={t("quote")} />
      <Container>
        {(isLoading && (
          <div className="mt-16 flex h-full min-h-screen items-center justify-center text-primary">
            <Loader2Icon className="h-10 w-10 animate-spin stroke-current" />
          </div>
        )) ||
          (services && <ServicesList services={services} />)}
      </Container>
    </Fragment>
  )
}

export default ServicesPage
