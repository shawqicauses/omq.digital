// DONE REVIEWING: GITHUB COMMIT
import {appRouter} from "@/server/api"
import {fetchRequestHandler} from "@trpc/server/adapters/fetch"

const handler = async function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req: request,
    // @ts-expect-error context passed from express middleware
    createContext: () => ({})
  })
}

export {handler as GET, handler as POST}
