// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {Fragment} from "react"
import {Container, PortfolioList, SectionHeader} from "../../components/index"

const PortfolioPage = function PortfolioPage() {
  return (
    <Fragment>
      <SectionHeader
        title="Portfolio"
        description="Discover our latest projects and see how we can help you achieve your goals and drive your business forward with our expert solutions."
      />
      <Container>
        <PortfolioList />
      </Container>
    </Fragment>
  )
}

export default PortfolioPage
