"use client"

// DONE REVIEWING: GITHUB COMMIT

import {CheckCircle2Icon} from "lucide-react"
import {useTranslations} from "next-intl"
import Container from "./container"

const Whys = function Whys() {
  const t = useTranslations("home-page.whys")
  return (
    <div className="mt-16 sm:mt-20">
      <Container>
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0">
          <div>
            <h2 className="text-base font-semi-bold uppercase leading-7 tracking-widest text-foreground">
              {t("first.title")}
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-3 text-base leading-7 text-muted-foreground lg:grid-cols-2">
              {[1, 2, 3, 4, 5, 6, 7].map((element) => (
                <div
                  key={element}
                  className="relative rounded-md bg-background/10 p-2 px-3 backdrop-blur">
                  <dt className="flex items-center gap-3 text-lg">
                    <CheckCircle2Icon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-primary"
                    />
                    {t(`first.data.${element}`)}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-base font-semi-bold uppercase leading-7 tracking-widest text-foreground">
              {t("second.title")}
            </h2>
            <p className="mt-6 max-w-xl-4 text-lg leading-8 text-muted-foreground">
              {t("second.data")}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Whys
