// DONE REVIEWING: GITHUB COMMIT
import {viteBundler} from "@payloadcms/bundler-vite"
import {mongooseAdapter} from "@payloadcms/db-mongodb"
import {lexicalEditor} from "@payloadcms/richtext-lexical"
import dotenv from "dotenv"
import path from "path"
import {buildConfig} from "payload/config"

dotenv.config({path: path.resolve(__dirname, ".env")})

const config = buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  admin: {bundler: viteBundler()},
  db: mongooseAdapter({url: process.env.DATABASE_URL}),
  typescript: {outputFile: path.resolve(__dirname, "payload-types.ts")},
  editor: lexicalEditor(),
  collections: []
})

export default config
