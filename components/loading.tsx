// DONE REVIEWING: GITHUB COMMIT
import {cn} from "@/lib/utils"
import {Loader2Icon} from "lucide-react"

const Loading = function Loading({screen = true}: {screen?: boolean}) {
  return (
    <div
      className={cn("my-16 flex items-center justify-center text-primary", {
        "h-full min-h-screen": screen
      })}>
      <Loader2Icon className="h-10 w-10 animate-spin stroke-current" />
    </div>
  )
}

export default Loading
