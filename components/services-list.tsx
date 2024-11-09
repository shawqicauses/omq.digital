// DONE REVIEWING: GITHUB COMMIT - 09

import trpc from "@/client"
import {Link} from "@/i18n/routing"
import {Media, Service} from "@/payload-types"
import {useTranslations} from "next-intl"
import Image from "next/image"
import Loading from "./loading"
import {Button} from "./ui"

type ServicesListProps = {
  locale: string
  asSection?: boolean
}

const ServicesList = function ServicesList({locale, asSection = false}: ServicesListProps) {
  const t = useTranslations("home-page.services")

  const {data, isLoading} = trpc.getServices.useQuery({locale})

  if (isLoading || !data) return <Loading screen={!asSection} />

  if (!data.services.length)
    return (
      <p className="my-16 text-center text-lg font-medium italic text-foreground">
        {locale === "ar" ? "لا توجد خدمات" : locale === "en" ? "No services" : null}
      </p>
    )

  const services = data.services.map((doc) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    icon: doc.icon
  })) as Service[]

  return (
    <div className="my-12 md:my-24">
      <dl className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="shc-transition relative flex flex-col rounded-lg bg-background/10 p-6 ring-2 ring-inset ring-muted backdrop-blur-md hover:bg-muted">
            <div className="relative mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-xl shadow-primary/20">
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${(service.icon as Media).sizes.icon.filename}`}
                alt={service.title}
                fill
                sizes="1.5rem"
                className="!static !h-6 !w-6"
              />
            </div>
            <dt className="mb-2 flex items-center gap-3 text-base font-semi-bold leading-7 text-foreground">
              {service.title}
            </dt>
            <dd className="mb-auto text-base leading-7 text-muted-foreground">
              {service.description}
            </dd>
            <Button variant="outline" size="lg" className="mt-6" asChild>
              <span>{t("buttons.service-button")}</span>
            </Button>
          </Link>
        ))}
      </dl>
    </div>
  )
}

export default ServicesList
