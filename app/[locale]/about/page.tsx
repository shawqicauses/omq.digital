"use client"

// DONE REVIEWING: GITHUB COMMIT - 05
import trpc from "@/client"
import {Logo} from "@/components/navigation"
import {Button} from "@/components/ui"
import {Link} from "@/i18n/routing"
import {About, Media, TeamMember} from "@/payload-types"
import {Loader2Icon} from "lucide-react"
import {useTranslations} from "next-intl"
import Image from "next/image"

const Page = function Page({params: {locale}}: {params: {locale: string}}) {
  const t = useTranslations("about")

  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  const {data, isLoading} = trpc.getAbouts.useQuery({locale})

  const {data: teamMembersData, isLoading: isLoadingTeamMembers} = trpc.getTeamMembers.useQuery({
    locale
  })

  if (isLoading || !data.abouts || isLoadingTeamMembers || !teamMembersData.teamMembers)
    return (
      <div className="my-16 flex h-full min-h-screen items-center justify-center text-primary">
        <Loader2Icon className="h-10 w-10 animate-spin stroke-current" />
      </div>
    )

  const abouts = data.abouts.map((about) => ({
    id: about.id,
    title: about.title,
    description: about.description
  })) as About[]

  const teamMembers = teamMembersData.teamMembers.map((teamMember) => ({
    id: teamMember.id,
    name: teamMember.name,
    email: teamMember.email,
    role: teamMember.role,
    image: teamMember.image
  })) as TeamMember[]

  return (
    <main className="relative isolate mx-auto mt-48 w-full max-w-xl-6 px-6 lg:px-8">
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
        <Logo className="mx-auto !h-52" />
        <h1 className="-mt-5 text-center text-xl-3 font-bold leading-none tracking-tight text-foreground sm:text-xl-4">
          {t("title")}.
        </h1>
        <p className="mt-5 text-justify text-xl leading-10 text-muted-foreground">
          {abouts[0].description}
        </p>
      </header>

      {abouts.slice(1).map((about) => (
        <div key={about.id} className="mb-24 flex flex-col gap-5">
          <h2 className="mx-auto max-w-xl-4 text-center text-xl-2 font-bold !leading-normal tracking-tight text-foreground sm:text-xl-3">
            {about.title}
          </h2>
          {about.description.split(". ").map((element) => (
            <p key={element} className="text-justify text-xl leading-10 text-muted-foreground">
              {element}
            </p>
          ))}
        </div>
      ))}

      {/* Team */}
      <div className="mb-24 flex flex-col gap-5">
        <h2 className="text-center text-xl-2 font-bold !leading-normal tracking-tight text-foreground sm:text-xl-3">
          {t("team")}
        </h2>
        <ul className="mx-auto grid max-w-xl-2 grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <li key={member.id}>
              <Image
                src={(member.image as Media).sizes.thumbnail.url}
                alt={member.name}
                fill
                className="!static aspect-[14/13] !h-auto w-full rounded-xl-2 object-cover"
              />
              <h3 className="mt-6 text-lg font-semi-bold leading-8 tracking-tight text-foreground">
                {member.name}
              </h3>
              <p className="text-base leading-7 text-muted-foreground">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mb-24 flex w-full flex-col items-center justify-between gap-5 rounded-lg border border-primary bg-muted/25 p-10 shadow-xl shadow-primary/20 backdrop-blur-sm sm:flex-row">
        <p className="max-w-xl-3 text-lg leading-relaxed text-foreground">{t("cta")}</p>
        <Button asChild>
          <Link href="/services">{t("cta-button")}</Link>
        </Button>
      </div>
    </main>
  )
}

export default Page
