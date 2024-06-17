// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {Fragment} from "react"
import {Container, PortfolioList, SectionHeader} from "../../components/index"
import {portfolios} from "../../components/portfolio"

const PortfolioPage = function PortfolioPage() {
  return (
    <Fragment>
      <SectionHeader
        title="Portfolio"
        description="Discover our latest projects and see how we can help you achieve your goals and drive your business forward with our expert solutions."
      />
      <Container>
        <PortfolioList portfolios={portfolios} />
      </Container>
    </Fragment>
  )
}

export default PortfolioPage
