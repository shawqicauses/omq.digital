// DONE REVIEWING: GITHUB COMMIT - 06
import {Fragment} from "react"
import {Container, SectionHeader, ServicesList} from "../../../components/index"
import {services} from "../../../components/services"

const ServicesPage = function ServicesPage() {
  return (
    <Fragment>
      <SectionHeader
        title="Services"
        description="Discover how we can help you achieve your goals and drive your business forward with our expert services and solutions."
      />
      <Container>
        <ServicesList services={services} />
      </Container>
    </Fragment>
  )
}

export default ServicesPage
