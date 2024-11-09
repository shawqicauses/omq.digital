"use client"

// DONE REVIEWING: GITHUB COMMIT - 12

import {useTranslations} from "next-intl"
import Container from "./container"
import ServicesList from "./services-list"

const Services = function Services({
  locale,
  asSection = false
}: {
  locale: string
  asSection?: boolean
}) {
  const t = useTranslations("home-page.services")
  return (
    <div className="my-16 md:my-32">
      <Container>
        <div className="mx-0 max-w-none lg:mx-auto lg:max-w-xl-2 lg:text-center">
          <h2 className="mb-2 text-base font-medium leading-7 text-primary">{t("headline")}</h2>
          <p className="mb-4 text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
            {t("title")}
          </p>
          <p className="text-lg italic leading-8 text-muted-foreground">{t("quote")}</p>
        </div>
        <ServicesList locale={locale} asSection={asSection} />
      </Container>
    </div>
  )
}

export default Services
