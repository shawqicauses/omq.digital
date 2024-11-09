// DONE REVIEWING: GITHUB COMMIT - 06
import {useTranslations} from "next-intl"
import {Fragment} from "react"
import {BsCreditCard, BsFacebook, BsInstagram, BsPaypal} from "react-icons/bs"
import Container from "./container"
import {Logo} from "./navigation"

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/omq.digital",
    icon: BsFacebook
  },
  {
    name: "Instagram",
    href: "https://instagram.com/omq.digital",
    icon: BsInstagram
  }
]

const Footer = function Footer() {
  const t = useTranslations("home-page.footer")
  return (
    <Fragment>
      <div className="mx-auto mb-24 flex max-w-xl-2 flex-col items-center justify-center">
        <Logo className="!h-40" />
        <p className="mb-6 text-center text-lg leading-8 text-muted-foreground">{t("paragraph")}</p>
        <div className="flex items-center justify-center gap-6">
          <BsCreditCard className="h-6 w-6" />
          <BsPaypal className="h-6 w-6" />
        </div>
      </div>
      <footer className="border-t border-t-muted bg-muted/25">
        <Container className="py-12 md:flex md:items-center md:justify-between">
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
            <p className="text-center text-xs leading-5 text-muted-foreground">{t("copyright")}</p>
          </div>
        </Container>
      </footer>
    </Fragment>
  )
}

export default Footer
