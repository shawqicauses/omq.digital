// DONE REVIEWING: GITHUB COMMIT - 05
import {webpackBundler} from "@payloadcms/bundler-webpack"
import {mongooseAdapter} from "@payloadcms/db-mongodb"
import {lexicalEditor} from "@payloadcms/richtext-lexical"
import dotenv from "dotenv"
import path from "path"
import {buildConfig} from "payload/config"
import MediaCollection from "./server/collections/media"
import ServicesCollection from "./server/collections/services"

dotenv.config({path: path.resolve(__dirname, ".env")})

const config = buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  admin: {bundler: webpackBundler()},
  db: mongooseAdapter({url: process.env.DATABASE_URL}),
  typescript: {outputFile: path.resolve(__dirname, "payload-types.ts")},
  editor: lexicalEditor(),
  localization: {
    locales: [
      {label: {en: "English", ar: "الإنجليزية"}, code: "en"},
      {label: {en: "Arabic", ar: "العربية"}, code: "ar", rtl: true}
    ],
    defaultLocale: "en",
    fallback: true
  },
  collections: [MediaCollection, ServicesCollection]
})

export default config
