// DONE REVIEWING: GITHUB COMMIT
import {PropsWithChildren} from "react"

const Container = function Container({children}: PropsWithChildren) {
  return <div className="mx-auto max-w-xl-7 sm:px-6 lg:px-8">{children}</div>
}

export default Container
