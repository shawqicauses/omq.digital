// DONE REVIEWING: GITHUB COMMIT - 12

import {useTranslations} from "next-intl"
import PortfolioList from "./portfolio-list"

const Portfolio = function Portfolio({
  locale,
  asSection = false
}: {
  locale: string
  asSection?: boolean
}) {
  const t = useTranslations("home-page.portfolios")
  return (
    <div className="my-16 md:my-32">
      <div className="mx-auto max-w-xl-7 xl:px-8">
        <div className="mx-0 max-w-none lg:mx-auto lg:max-w-xl-3 lg:text-center">
          <h2 className="mb-2 text-base font-medium leading-7 text-primary">{t("headline")}</h2>
          <p className="mb-4 text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
            {t("title")}
          </p>
          <p className="text-lg italic leading-8 text-muted-foreground">{t("description")}</p>
        </div>
        <PortfolioList locale={locale} asSection={asSection} />
      </div>
    </div>
  )
}

export default Portfolio
