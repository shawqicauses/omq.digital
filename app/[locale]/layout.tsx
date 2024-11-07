// DONE REVIEWING: GITHUB COMMIT - 11
import {NextIntlClientProvider} from "next-intl"
import {getMessages} from "next-intl/server"
import {Montserrat, Tajawal} from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import {PropsWithChildren} from "react"
import {Footer, Navigation} from "../../components/index"
import {Toaster} from "../../components/ui"
import "../../styles/global.css"
import Providers from "../providers"

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"]
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const fonts = {
  en: montserrat,
  ar: tajawal
}

const Layout = async function Layout({
  params,
  children
}: PropsWithChildren & {params: {locale: string}}) {
  const {locale} = params
  const messages = await getMessages()

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="dark">
      <head />
      <body className={`${fonts[locale].className} relative`}>
        <Providers>
          <Image
            src="/assets/logo-outline.png"
            alt="OMQ Logo"
            fill
            sizes="(max-width: 768px) 100vw, 125vw"
            className="!fixed !inset-[initial] !top-1/2 hidden !h-auto -translate-y-1/2 blur-md lg:!-right-[62.5vw] lg:block lg:!w-[125vw] lg:max-w-[125vw] xl:!-right-[50vw] xl:w-[100vw] xl:max-w-[100vw]"
          />
          <Image
            src="/assets/logo-outline.png"
            alt="OMQ Logo"
            fill
            sizes="(max-width: 768px) 100vw, 125vw"
            className="!fixed !inset-[initial] !top-1/2 hidden !h-auto -translate-y-1/2 opacity-50 lg:!-right-[62.5vw] lg:block lg:!w-[125vw] lg:max-w-[125vw] xl:!-right-[50vw] xl:w-[100vw] xl:max-w-[100vw]"
          />
          <NextIntlClientProvider messages={messages}>
            <Navigation locale={locale} />
            {children}
            <Footer />
            <Link
              href="http://wa.me/97339999728"
              target="_blank"
              className="fixed bottom-10 right-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-xl shadow-primary/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 32 32"
                width="28"
                height="28"
                fill="#ffffff">
                <title>Whats App</title>
                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
              </svg>
            </Link>
            <Toaster />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
