"use client"

// DONE REVIEWING: GITHUB COMMIT - 03

import trpc from "@/client"
import {ClientsPartner, Media} from "@/server/payload-types"
import Image from "next/image"
import {Fragment} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import Container from "./container"
import Loading from "./loading"

import "swiper/css"

const ClientsPartners = function ClientsPartners({locale}: {locale: string}) {
  const {data, isLoading} = trpc.getClientsPartners.useQuery({locale})

  if (isLoading || !data) return <Loading screen={false} />

  if (!data.clientsPartners.length) return null

  const clientsPartners = data.clientsPartners.map((element) => ({
    id: element.id,
    name: element.name,
    category: element.category,
    logo: element.logo
  })) as ClientsPartner[]

  const clients = clientsPartners.filter((element) => element.category === "client")

  const partners = clientsPartners.filter((element) => element.category === "partner")

  return (
    <Fragment>
      {clients.length !== 0 ? (
        <div className="my-16 md:my-32">
          <Container>
            <div className="mx-0 max-w-none lg:mx-auto lg:max-w-xl-2 lg:text-center">
              <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
                {locale === "ar" ? "من عملاء عُمق" : locale === "en" ? "Clients of OMQ" : null}
              </h2>
            </div>
            <Swiper slidesPerView={4} spaceBetween={50} className="my-12 md:my-24">
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="flex h-40 flex-col items-center justify-center gap-5">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${(client.logo as Media).sizes.thumbnail_tablet.filename}`}
                      alt={client.name}
                      fill
                      className="!static !inset-[initial] !w-auto object-contain"
                    />
                    <p className="text-lg font-medium leading-none">{client.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      ) : null}
      {partners.length !== 0 ? (
        <div className="my-16 md:my-32">
          <Container>
            <div className="mx-0 max-w-none lg:mx-auto lg:max-w-xl-2 lg:text-center">
              <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
                {locale === "ar"
                  ? "شركاء نجاح عُمق"
                  : locale === "en"
                    ? "OMQ Success Partners"
                    : null}
              </h2>
            </div>
            <Swiper slidesPerView={4} spaceBetween={50} className="my-12 md:my-24">
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="flex h-40 flex-col items-center justify-center gap-5">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${(partner.logo as Media).sizes.thumbnail_tablet.filename}`}
                      alt={partner.name}
                      fill
                      className="!static !inset-[initial] !w-auto object-contain"
                    />
                    <p className="text-lg font-medium leading-none">{partner.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      ) : null}
    </Fragment>
  )
}

export default ClientsPartners
