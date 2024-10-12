// DONE REVIEWING: GITHUB COMMIT
import {AppRouter} from "@/server/api"
import {createTRPCReact} from "@trpc/react-query"

const trpc = createTRPCReact<AppRouter>()
export default trpc
