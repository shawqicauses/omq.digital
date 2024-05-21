// DONE REVIEWING: GITHUB COMMIT 1️⃣

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
  return <div>Services</div>
}

export default Services
