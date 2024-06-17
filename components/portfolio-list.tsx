// DONE REVIEWING: GITHUB COMMIT 1️⃣

type PortfolioListProps = {
  portfolios: {
    id: string | number
    image: string
    title: string
    testimonial: string
    client: {
      name: string
      title: string
    }
  }[]
}

const PortfolioList = function PortfolioList({portfolios}: PortfolioListProps) {
  return <div>Portfolio List</div>
}

export default PortfolioList
