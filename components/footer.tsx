// DONE REVIEWING: GITHUB COMMIT - 04
import {useTranslations} from "next-intl"
import {Fragment} from "react"
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"
import {Logo} from "./navigation"

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/omqsolutions",
    icon: BsFacebook
  },
  {
    name: "Instagram",
    href: "https://instagram.com/omqsolutions",
    icon: BsInstagram
  },
  {
    name: "Twitter",
    href: "https://twitter.com/omqsolutions",
    icon: BsTwitter
  }
]

const Footer = function Footer() {
  const t = useTranslations("home-page.footer")
  return (
    <Fragment>
      <div className="mx-auto mb-20 flex max-w-xl-2 flex-col items-center justify-center">
        <Logo className="!h-40" />
        <p className="text-center text-lg leading-8 text-muted-foreground">{t("paragraph")}</p>
      </div>
      <footer className="border-t border-t-muted bg-muted/25">
        <div className="mx-auto max-w-xl-7 px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="shc-transition text-muted-foreground hover:text-foreground">
                <span className="sr-only">{social.name}</span>
                <social.icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; 2024 OMQ Solutions, Inc. Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
