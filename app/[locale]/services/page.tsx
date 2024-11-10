// DONE REVIEWING: GITHUB COMMIT - 13
import {getTranslations, setRequestLocale} from "next-intl/server"
import {Fragment} from "react"
import {Container, SectionHeader, ServicesList} from "../../../components/index"

const ServicesPage = async function ServicesPage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale)

  const t = await getTranslations("home-page.services")

  return (
    <Fragment>
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
      <SectionHeader title={t("title")} description={t("description")} />
      <Container>
        <ServicesList locale={locale} />
      </Container>
    </Fragment>
  )
}

export default ServicesPage
