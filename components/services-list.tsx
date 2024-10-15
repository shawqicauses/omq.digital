// DONE REVIEWING: GITHUB COMMIT - 05

import {Link} from "@/i18n/routing"
import {Media, Service} from "@/payload-types"
import {useTranslations} from "next-intl"
import Image from "next/image"
import {Button} from "./ui"

type ServicesListProps = {
  locale: string
  services: Service[]
}

const ServicesList = function ServicesList({services}: ServicesListProps) {
  const t = useTranslations("home-page.services")
  return (
    <div className="mx-auto my-16 sm:my-20 lg:my-24">
      <dl className="mx-auto grid max-w-xl grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="shc-transition relative flex flex-col rounded-md bg-background/10 p-6 ring-2 ring-inset ring-muted backdrop-blur hover:bg-muted">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-primary shadow-xl shadow-primary/20">
              <Image
                src={`/media/${(service.icon as Media).sizes.icon.filename}`}
                alt={service.title}
                fill
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
