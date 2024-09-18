// DONE REVIEWING: GITHUB COMMIT
import dotenv from "dotenv"
import express from "express"
import path from "path"
import {nextApplication, nextRequestHandler, port} from "./server/next"
import initPayload from "./server/payload"

dotenv.config({path: path.resolve(__dirname, ".env")})

const app = express()

const start = async function start() {
  const payload = await initPayload({
    initOptions: {
      express: app,
      async onInit(payloadInitialized) {
        payloadInitialized.logger.info(`Payload Admin URL: ${payloadInitialized.getAdminURL()}`)
      }
    }
  })

  app.use((request, response) => nextRequestHandler(request, response))
  nextApplication.prepare().then(() => {
    payload.logger.info("Next.JS Application Is Running...")
    app.listen(port, async () => {
      payload.logger.info(`Next.JS Application URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
