// DONE REVIEWING: GITHUB COMMIT - 03

import {Link} from "@/i18n/routing"
import {Media, Service} from "@/payload-types"
import Image from "next/image"

type ServicesListProps = {
  locale: string
  services: Service[]
}

const ServicesList = function ServicesList({services}: ServicesListProps) {
  return (
    <div className="mx-auto my-16 sm:my-20 lg:my-24">
      <dl className="grid max-w-xl grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="shc-transition relative rounded-lg bg-muted/25 p-5 ring-2 ring-inset ring-muted backdrop-blur-md hover:bg-muted">
            <dt className="mb-5 flex items-center gap-3 text-base font-semi-bold leading-7 text-foreground">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-xl shadow-primary/20">
                <Image
                  src={`/media/${(service.icon as Media).sizes.icon.filename}`}
                  alt={service.title}
                  fill
                  className="!static !h-6 !w-6"
                />
              </div>
              {service.title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-muted-foreground">
              {service.description}
            </dd>
          </Link>
        ))}
      </dl>
    </div>
  )
}

export default ServicesList
