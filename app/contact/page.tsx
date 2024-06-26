"use client"

// DONE REVIEWING: GITHUB COMMIT 5️⃣

import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline"
import {zodResolver} from "@hookform/resolvers/zod"
import {Fragment} from "react"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button, Form, FormControl, FormField, FormItem, FormLabel, Input} from "../../components/ui"

const address = (
  <Fragment>
    Our company is located <br /> in Bahrain
  </Fragment>
)

const contacts = [
  {
    icon: BuildingOffice2Icon,
    name: "Address",
    title: address,
    href: "https:// maps.google.com"
  },
  {
    icon: PhoneIcon,
    name: "Phone",
    title: "+0 (123) 456-7890",
    href: "tel:+1234567890"
  },
  {
    icon: EnvelopeIcon,
    name: "Email",
    title: "contact@omq.com",
    href: "mailto:contact@omq.com"
  }
]

const ContactFormScheme = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1)
})

const Page = function Page() {
  const id = "contact-pattern"
  const clipPath =
    "polygon(74% 56%, 100% 38%, 97% 73%, 85% 100%, 80% 98%, 72% 67%, 60% 37%, 52% 32%, 47% 41%, 45% 65%, 27% 23%, 0% 35%, 17% 0%, 27% 23%, 76% 2%, 74% 56%)"

  const form = useForm<z.infer<typeof ContactFormScheme>>({
    mode: "onChange",
    resolver: zodResolver(ContactFormScheme),
    defaultValues: {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      message: null
    }
  })

  return (
    <div className="relative isolate min-h-screen">
      <div className="mx-auto grid max-w-xl-7 grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-slate-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
                <defs>
                  <pattern
                    id={id}
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse">
                    <path fill="none" d="M130 200V.5M.5 .5H200" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-slate-800/20">
                  <path strokeWidth={0} d="M-470.5 0h201v201h-201Z" />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-xl-3 lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]">
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-violet-400 to-blue-400 opacity-20"
                  style={{clipPath}}
                />
              </div>
            </div>
            <h2 className="text-xl-3 font-bold tracking-tight text-white">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Do you have any questions or would like to work together? We would love to hear from
              you and get to know you better.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-300">
              {contacts.map((element) => (
                <div key={element.name} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{element.name}</span>
                    <element.icon aria-hidden="true" className="h-7 w-6 text-slate-400" />
                  </dt>
                  <dd>
                    <a
                      href={element.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white">
                      {element.title}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Form {...form}>
          <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:pt-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="sm:col-span-2">
                  <FormField
                    name="email"
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-2">
                  <FormField
                    name="phone"
                    control={form.control}
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-2">
                  <FormField
                    name="message"
                    control={form.control}
                    render={() => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea rows={4} className="shc-input-base" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Page
