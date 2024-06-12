// DONE REVIEWING: GITHUB COMMIT 4️⃣

import {
  ChartBarIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  SwatchIcon
} from "@heroicons/react/24/solid"

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We create stunning, responsive websites that provide an intuitive user experience. Using the latest technologies, we ensure your site is fast, secure, and scalable.",
    icon: CodeBracketSquareIcon
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Boost your online presence with our digital marketing services. We develop strategies that drive traffic, engage your audience, and convert visitors into customers.",
    icon: ChartBarIcon
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Make a lasting impression with our graphic design solutions. Our designers create visuals that align with your brand and capture attention.",
    icon: SwatchIcon
  },
  {
    id: 4,
    title: "App Development",
    description:
      "Expand your reach with our custom app development services. We build user-friendly, high-performance mobile and web apps tailored to your business needs.",
    icon: DevicePhoneMobileIcon
  }
]

const Services = function Services() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:text-center">
          <h2 className="text-base font-medium leading-7 text-primary">Services</h2>
          <p className="mt-2 text-xl-3 font-bold tracking-tight text-white sm:text-xl-4">
            Transforming Your Digital Presence
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            OMQ Solutions offers services to elevate your brand and drive your business forward.
            Discover how we can help you achieve your goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl-2 sm:mt-20 lg:mt-24 lg:max-w-xl-4">
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
      </div>
    </div>
  )
}

export default Services