// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {ElementType} from "react"

type ServicesListProps = {
  services: {
    id: number
    title: string
    description: string
    icon: ElementType
  }[]
}

const ServicesList = function ServicesList({services}: ServicesListProps) {
  return (
    <div className="mx-auto my-16 max-w-xl-2 sm:my-20 lg:my-24 lg:max-w-xl-4">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
        {services.map((service) => (
          <div key={service.id} className="relative pl-16">
            <dt className="text-base font-semi-bold leading-7 text-white">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-xl shadow-violet-500/20">
                <service.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              {service.title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-slate-400">{service.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default ServicesList
