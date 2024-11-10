"use client"

// DONE REVIEWING: GITHUB COMMIT - 07

import trpc from "@/client"
import Container from "@/components/container"
import Loading from "@/components/loading"
import {Button} from "@/components/ui"
import {Media, Service} from "@/payload-types"
import {CheckCircle2Icon, CheckIcon, CopyXIcon} from "lucide-react"
import {useTranslations} from "next-intl"
import Image from "next/image"
import Link from "next/link"
import {Fragment} from "react"

const Page = function Page({params: {id, locale}}: {params: {id: string; locale: string}}) {
  const t = useTranslations("navigation")
  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  const {data, isLoading} = trpc.getService.useQuery({id, locale})

  if (isLoading || !data) return <Loading />

  const service = (
    data.service.map((element) => ({
      id: element.id,
      title: element.title,
      description: element.description,
      icon: element.icon,
      packages: element.packages,
      notes: element.notes
    })) as Service[]
  )[0]

  return (
    <main className="relative isolate mt-48">
      <title>{service.title}</title>
      <meta name="description" content={service.description} />
      <Container className="max-w-none">
        {/* Background */}
        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-xl-3">
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none transform-gpu bg-gradient-to-r from-primary to-secondary opacity-25"
            style={{clipPath}}
          />
        </div>

        {/* Header */}
        <header className="mb-24">
          <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-lg border border-primary bg-background shadow-xl shadow-primary/20">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${(service.icon as Media).sizes.thumbnail_tablet.filename}`}
              alt={service.title}
              fill
              sizes="1.5rem"
              className="!static !h-auto !w-16"
            />
          </div>
          <h1 className="mb-4 text-center text-xl-3 font-bold leading-none tracking-tight text-foreground sm:text-xl-4">
            {service.title}.
          </h1>
          <p className="mx-auto max-w-xl-5 text-center text-xl leading-10 text-muted-foreground">
            {service.description}
          </p>
        </header>

        {/* Packages */}
        {service.packages.length !== 0 ? (
          <Fragment>
            <p className="mb-6 text-center text-lg font-medium italic text-foreground">
              {locale === "ar" ? (
                <Fragment>ماذا ستقدم لك عُمق من خلال باقة {service.title}؟</Fragment>
              ) : locale === "en" ? (
                <Fragment>What will OMQ offer you through its {service.title} packages.</Fragment>
              ) : null}
            </p>
            <p className="mb-24 text-center text-lg font-medium italic text-foreground">
              {locale === "ar" ? (
                <Fragment>اختر باقة {service.title} التي تناسب ميزانيتك.</Fragment>
              ) : locale === "en" ? (
                <Fragment>Choose the {service.title} package that fits your budget.</Fragment>
              ) : null}
            </p>

            {service.packages.map((element) => (
              <div key={element.id} className="mb-24 flex flex-col items-center">
                <h2 className="mb-2 text-center text-base font-medium leading-7 text-primary">
                  {element.title}
                </h2>
                <p className="mb-4 flex items-baseline gap-x-2">
                  <span className="text-xl-5 font-bold tracking-tight text-foreground">
                    {element.pricing.pricing_from} - {element.pricing.pricing_to}
                  </span>
                  <span className="text-base uppercase tracking-widest text-muted-foreground">
                    / {{en: "BHD", ar: "د.ب"}[locale]}
                  </span>
                </p>
                <Button size="lg" asChild className="mb-12">
                  <Link href="http://wa.me/97339999728" target="_blank">
                    {t("request-package")}
                  </Link>
                </Button>
                <div className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {element.offerings.map((offering) => (
                    <div
                      key={offering.id}
                      className="relative rounded-lg bg-background p-3 shadow-xl-2 ring-1 ring-border sm:p-6">
                      <h3 className="mb-4 text-xl font-medium !leading-relaxed text-foreground">
                        {offering.title}
                      </h3>
                      <p className="mb-4 flex items-baseline gap-x-2 leading-none">
                        <span className="text-xl font-medium tracking-tight text-foreground">
                          {offering.pricing.pricing_from} - {offering.pricing.pricing_to}
                        </span>
                        <span className="text-base uppercase tracking-widest text-muted-foreground">
                          / {{en: "BHD", ar: "د.ب"}[locale]}
                        </span>
                      </p>
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                        {offering.features.map((feature) => (
                          <li key={feature.id} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-primary"
                            />
                            <span>{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Notes */}
            {service.notes.length !== 0 && (
              <div className="mb-24">
                <h2 className="mb-6 text-center text-xl-5 font-bold tracking-tight text-foreground">
                  {locale === "ar" ? "ملاحظات" : "Notes"}
                </h2>
                <dl className="mt-6 grid grid-cols-1 gap-3 text-muted-foreground lg:grid-cols-2">
                  {service.notes.map((note) => (
                    <div
                      key={note.id}
                      className="relative rounded-lg bg-background/10 p-2 px-3 ring-1 ring-inset ring-muted backdrop-blur-md">
                      <dt className="flex items-center gap-3 text-lg leading-8">
                        <CheckCircle2Icon
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-primary"
                        />
                        {note.title}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </Fragment>
        ) : (
          <div className="mx-auto mb-24 flex w-full max-w-xl-5 flex-col items-center justify-between gap-10 rounded-lg border border-primary bg-muted/25 p-10 shadow-xl shadow-primary/20 backdrop-blur-md sm:flex-row">
            <CopyXIcon
              aria-hidden="true"
              className="h-20 w-20 flex-shrink-0 stroke-1 text-foreground"
            />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {locale === "ar" ? (
                <Fragment>
                  لم يتم العثور على باقات لخدمة{" "}
                  <span className="font-medium text-foreground">{service.title}</span>. نعمل حالياً
                  على إضافة المزيد من الباقات لخدماتنا، شكراً لكم على تفهمكم وصبركم.
                </Fragment>
              ) : locale === "en" ? (
                <Fragment>
                  We have not found any packages for{" "}
                  <span className="font-medium text-foreground">{service.title}</span>. We are
                  currently working on adding more packages to our services, thank you for your
                  patience.
                </Fragment>
              ) : null}
            </p>
          </div>
        )}
      </Container>
    </main>
  )
}

export default Page
