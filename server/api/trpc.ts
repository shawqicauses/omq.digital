// DONE REVIEWING: GITHUB COMMIT - 01
import {ExpressContext} from "@/server/server"
import {initTRPC} from "@trpc/server"

const t = initTRPC.context<ExpressContext>().create()

export const {router} = t
export const {procedure} = t
