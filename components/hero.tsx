// DONE REVIEWING: GITHUB COMMIT - 10

import {cn} from "@/lib/utils"
import {getTranslations} from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui"

const Hero = async function Hero({locale}: {locale: string}) {
  const t = await getTranslations("home-page")
  const classes = {
    calc: {
      1: {base: ["50%", "11rem"].join("-"), sm: ["50%", "30rem"].join("-")},
      2: {base: ["100%", "13rem"].join("-"), sm: ["100%", "30rem"].join("-")},
      3: {base: ["50%", "3rem"].join("+"), sm: ["50%", "36rem"].join("+")}
    },
    clipPath:
      "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"
  }

  return (
    <div className="relative isolate mt-24 overflow-hidden">
      <Image
        src="/assets/hero-image.webp"
        alt="Company Stuff"
        fill
        className="absolute inset-0 z-10 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 z-20 bg-background opacity-90" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-30 transform-gpu overflow-hidden blur-xl-3 sm:-top-80">
        <div
          className={`relative left-[calc(${classes.calc[1].base})] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(${classes.calc[1].sm})] sm:w-[72.1875rem]`}
          style={{clipPath: classes.clipPath}}
        />
      </div>
      <div
        className={cn(
          "relative z-40 mx-auto px-6 py-32 sm:py-48 lg:px-8 lg:py-56",
          locale === "ar" ? "max-w-xl-2" : "max-w-xl-4"
        )}>
        <div className="text-center">
          <h1
            className={cn(
              "!text-xl-4 font-bold text-foreground sm:!text-xl-5 sm:!leading-[3.5rem]",
              locale === "en" ? "tracking-tight" : ""
            )}>
            {t("header.title")}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t("header.description")}</p>
          <div className="shc-flex-center mt-8 gap-x-6">
            <Button asChild>
              <Link href="/about">{t("header.buttons.company-profile")}</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/about" className="text-foreground">
                {t("header.buttons.about-us")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-[calc(${classes.calc[2].base})] -z-10 transform-gpu overflow-hidden blur-xl-3 sm:top-[calc(${classes.calc[2].sm})]`}>
        <div
          className={`relative left-[calc(${classes.calc[3].base})] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(${classes.calc[3].sm})] sm:w-[72.1875rem]`}
          style={{clipPath: classes.clipPath}}
        />
      </div>
    </div>
  )
}

export default Hero
