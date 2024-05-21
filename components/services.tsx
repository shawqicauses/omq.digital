// DONE REVIEWING: GITHUB COMMIT 2️⃣

import {
  ChartBarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  SwatchIcon
} from "@heroicons/react/24/solid"

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We create stunning, responsive websites that provide an intuitive user experience. Using the latest technologies, we ensure your site is fast, secure, and scalable.",
    icon: CodeBracketIcon
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
          <h2 className="text-base font-semi-bold leading-7 text-violet-500">Services</h2>
          <p className="mt-2 text-xl-3 font-bold tracking-tight text-white sm:text-xl-4">
            Transforming Your Digital Presence
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            OMQ Solutions offers services to elevate your brand and drive your business forward.
            Discover how we can help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
