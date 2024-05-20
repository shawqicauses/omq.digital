// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {Poppins} from "next/font/google"
import {PropsWithChildren} from "react"
import {Navigation} from "../components/index"
import "../styles/global.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className} bg-slate-900`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default Layout
