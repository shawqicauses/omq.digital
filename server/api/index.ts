// DONE REVIEWING: GITHUB COMMIT - 05
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
  getTeamMembers: procedure
    .input(z.object({locale: z.string().min(1).max(64)}))
    .query(async ({input: {locale}}) => {
      const payload = await initPayload()

      try {
        const {docs: teamMembers} = await payload.find({
          collection: "team-members",
          locale
        })

        return {success: true, teamMembers}
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
    }),
  getService: procedure
    .input(z.object({id: z.string().min(1), locale: z.string().min(1).max(64)}))
    .query(async ({input: {id, locale}}) => {
      const payload = await initPayload()

      try {
        const {docs: service} = await payload.find({
          collection: "services",
          where: {id: {equals: id}},
          locale
        })

        return {success: true, service}
      } catch (error) {
        throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
      }
    }),
  getClientsPartners: procedure
    .input(z.object({locale: z.string().min(1).max(64)}))
    .query(async ({input: {locale}}) => {
      const payload = await initPayload()

      try {
        const {docs: clientsPartners} = await payload.find({
          collection: "clients-partners",
          locale
        })

        return {success: true, clientsPartners}
      } catch (error) {
        throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
      }
    }),
  getPortfolios: procedure
    .input(z.object({locale: z.string().min(1).max(64)}))
    .query(async ({input: {locale}}) => {
      const payload = await initPayload()

      try {
        const {docs: portfolios} = await payload.find({
          collection: "portfolios",
          locale
        })

        return {success: true, portfolios}
      } catch (error) {
        throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
      }
    })
})

export type AppRouter = typeof appRouter
