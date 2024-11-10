// DONE REVIEWING: GITHUB COMMIT - 04
import {inferAsyncReturnType} from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"
import dotenv from "dotenv"
import express from "express"
import nextBuild from "next/dist/build"
import path from "path"
import {appRouter} from "./api"
import {nextApplication, nextRequestHandler, port} from "./next"
import initPayload from "./payload"

dotenv.config({path: path.resolve(__dirname, "../.env")})

const app = express()

const createContext = function createContext({req, res}: trpcExpress.CreateExpressContextOptions) {
  return {req, res}
}

export type ExpressContext = inferAsyncReturnType<typeof createContext>

const start = async function start() {
  if (process.env.NEXT_BUILD) {
    app.listen(port, async () => {
      // @ts-expect-error
      await nextBuild(path.join(__dirname, "../"))
      process.exit()
    })

    return
  }

  const payload = await initPayload({
    initOptions: {
      express: app,
      async onInit(payloadInitialized) {
        payloadInitialized.logger.info(`Payload Admin URL: ${payloadInitialized.getAdminURL()}`)
      }
    }
  })

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext
    })
  )

  app.use((request, response) => nextRequestHandler(request, response))
  nextApplication.prepare().then(() => {
    payload.logger.info("Next.JS Application Is Running...")
    app.listen(port, async () => {
      payload.logger.info(`Next.JS Application URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
