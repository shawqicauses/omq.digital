// DONE REVIEWING: GITHUB COMMIT 2️⃣

import {ChevronRightIcon} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui"

const Hero = function Hero() {
  const classes = {calc: {base: ["50%", "11rem"].join("-"), sm: ["50%", "30rem"].join("-")}}
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <Image
        src="/assets/hero-image.webp"
        alt="Company Stuff"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10 grayscale"
      />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-xl-3 sm:-top-80">
        <div
          className={`relative left-[calc(${classes.calc.base})] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-400 to-blue-400 opacity-20 sm:left-[calc(${classes.calc.sm})] sm:w-[72.1875rem]`}
          style={{
            clipPath:
              "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"
          }}
        />
      </div>
      <div className="mx-auto max-w-xl-2 py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="shc-flex-center shc-transition relative gap-2 rounded-full bg-slate-800 bg-opacity-30 px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-slate-800 backdrop-blur-lg !transition-all hover:ring-white">
            Announcing our last out-standing project.
            <Link href="/portfolio" className="shc-flex-center font-medium text-white">
              <span aria-hidden="true" className="absolute inset-0" />
              View more{" "}
              <ChevronRightIcon aria-hidden="true" className="h-4 w-4 stroke-2 text-current" />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl-4 font-bold tracking-tight text-white sm:text-xl-6">
            Transforming Digital{" "}
            <span className="underline decoration-primary decoration-dotted underline-offset-4">
              Dreams
            </span>{" "}
            into Reality
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            OMQ Solutions is your trusted partner in innovative web development, seam-less digital
            marketing, and cutting-edge technology solutions.
          </p>
          <div className="shc-flex-center mt-10 gap-x-6">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/about" className="text-white">
                About us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
