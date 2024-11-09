"use client"

// DONE REVIEWING: GITHUB COMMIT - 01
import {useTranslations} from "next-intl"
import {Fragment} from "react"
import {Container, PortfolioList, SectionHeader} from "../../../components/index"

const PortfolioPage = function PortfolioPage({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations("home-page.portfolios")

  return (
    <Fragment>
      <SectionHeader title={t("title")} description={t("description")} />
      <Container>
        <PortfolioList locale={locale} asSection={false} />
      </Container>
    </Fragment>
  )
}

export default PortfolioPage
