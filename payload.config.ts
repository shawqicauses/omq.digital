// DONE REVIEWING: GITHUB COMMIT - 06
import {webpackBundler} from "@payloadcms/bundler-webpack"
import {mongooseAdapter} from "@payloadcms/db-mongodb"
import {lexicalEditor} from "@payloadcms/richtext-lexical"
import dotenv from "dotenv"
import path from "path"
import {buildConfig} from "payload/config"
import AboutsCollection from "./server/collections/abouts"
import ClientsPartnersCollection from "./server/collections/clients-partners"
import MediaCollection from "./server/collections/media"
import PortfoliosCollection from "./server/collections/portfolios"
import ServicesCollection from "./server/collections/services"

dotenv.config({path: path.resolve(__dirname, ".env")})

const config = buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  admin: {bundler: webpackBundler()},
  db: mongooseAdapter({url: process.env.DATABASE_URL}),
  typescript: {outputFile: path.resolve(__dirname, "payload-types.d.ts")},
  editor: lexicalEditor(),
  localization: {
    locales: [
      {label: {en: "English", ar: "الإنجليزية"}, code: "en"},
      {label: {en: "Arabic", ar: "العربية"}, code: "ar", rtl: true}
    ],
    defaultLocale: "en",
    fallback: true
  },
  collections: [
    MediaCollection,
    ServicesCollection,
    PortfoliosCollection,
    ClientsPartnersCollection,
    AboutsCollection
  ]
})

export default config
