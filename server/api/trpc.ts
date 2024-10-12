// DONE REVIEWING: GITHUB COMMIT
import {ExpressContext} from "@/server"
import {initTRPC} from "@trpc/server"

const t = initTRPC.context<ExpressContext>().create()

export const {router} = t
export const {procedure} = t
