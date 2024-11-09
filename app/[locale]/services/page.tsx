"use client"

// DONE REVIEWING: GITHUB COMMIT - 11
import {useTranslations} from "next-intl"
import {Fragment} from "react"
import {Container, SectionHeader, ServicesList} from "../../../components/index"

const ServicesPage = function ServicesPage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations("home-page.services")

  return (
    <Fragment>
      <SectionHeader title={t("title")} description={t("description")} />
      <Container>
        <ServicesList locale={locale} asSection={false} />
      </Container>
    </Fragment>
  )
}

export default ServicesPage
