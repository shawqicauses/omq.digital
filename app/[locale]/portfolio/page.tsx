// DONE REVIEWING: GITHUB COMMIT - 02
import {getTranslations} from "next-intl/server"
import {Fragment} from "react"
import {Container, PortfolioList, SectionHeader} from "../../../components/index"

const PortfolioPage = async function PortfolioPage({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations("home-page.portfolios")

  return (
    <Fragment>
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
      <SectionHeader title={t("title")} description={t("description")} isWide={locale !== "ar"} />
      <Container>
        <PortfolioList locale={locale} />
      </Container>
    </Fragment>
  )
}

export default PortfolioPage
