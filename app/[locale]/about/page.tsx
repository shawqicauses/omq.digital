"use client"

// DONE REVIEWING: GITHUB COMMIT - 02
import {useTranslations} from "next-intl"

const Page = function Page() {
  const t = useTranslations()
  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  return (
    <main className="relative isolate">
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
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-xl-2 pt-24 text-center sm:pt-40">
          <h2 className="text-xl-4 font-bold tracking-tight text-foreground sm:text-xl-6">
            {t("about.title")}.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("home-page.header.description")}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
