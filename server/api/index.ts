// DONE REVIEWING: GITHUB COMMIT - 02
import {TRPCError} from "@trpc/server"
import {z} from "zod"
import initPayload from "../payload"
import {procedure, router} from "./trpc"

export const appRouter = router({
  getAbouts: procedure
    .input(z.object({locale: z.string().min(1).max(64)}))
    .query(async ({input: {locale}}) => {
      const payload = await initPayload()

      try {
        const {docs: abouts} = await payload.find({
          collection: "abouts",
          sort: "createdAt",
          locale
        })

        return {success: true, abouts}
      } catch (error) {
        throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
      }
    }),
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
