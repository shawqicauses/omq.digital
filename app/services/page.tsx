// DONE REVIEWING: GITHUB COMMIT 3️⃣
import {Fragment} from "react"
import {SectionHeader, ServicesList} from "../../components/index"

const ServicesPage = function ServicesPage() {
  return (
    <Fragment>
      <SectionHeader
        title="Services"
        description="Discover how we can help you achieve your goals and drive your business forward with our expert services and solutions."
      />
      <ServicesList />
    </Fragment>
  )
}

export default ServicesPage
