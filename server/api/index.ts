// DONE REVIEWING: GITHUB COMMIT - 01
import {TRPCError} from "@trpc/server"
import {z} from "zod"
import initPayload from "../payload"
import {procedure, router} from "./trpc"

export const appRouter = router({
  getServices: procedure
    .input(z.object({locale: z.string().min(1).max(64)}))
    .query(async ({input: {locale}}) => {
      const payload = await initPayload()

      try {
        const {docs: services} = await payload.find({
          collection: "services",
          locale
        })

        return {success: true, services}
      } catch (error) {
        throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
      }
    })
})

export type AppRouter = typeof appRouter
