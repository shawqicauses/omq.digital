// DONE REVIEWING: GITHUB COMMIT 5️⃣
import {Poppins} from "next/font/google"
import {PropsWithChildren} from "react"
import {Footer, Navigation} from "../components/index"
import {Toaster} from "../components/ui"
import "../styles/global.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
