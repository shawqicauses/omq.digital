// DONE REVIEWING: GITHUB COMMIT - 02
import {cn} from "@/lib/utils"
import {HTMLAttributes, PropsWithChildren} from "react"

const Container = function Container({
  className,
  children
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto max-w-xl-7 px-4 sm:px-6 lg:px-8", className)}>{children}</div>
}

export default Container
