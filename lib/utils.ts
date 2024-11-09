// DONE REVIEWING: GITHUB COMMIT - 01
import {twMerge} from "@/tailwind.config"
import {clsx, type ClassValue} from "clsx"

export const cn = function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const utils = {cn}

export default utils
