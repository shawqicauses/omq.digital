// DONE REVIEWING: GITHUB COMMIT - 15

import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon
} from "@heroicons/react/20/solid"
import Image from "next/image"

const stats = [
  {id: 0, label: "Business was founded", value: "2018"},
  {id: 1, label: "People on our team", value: ["+", "10"].join("")},
  {id: 2, label: "Users on our platform", value: ["250", "K"].join("")},
  {id: 3, label: "Paid out to creators", value: ["$", "10", "M"].join("")}
]

const values = [
  {
    id: 0,
    name: "Be world-class.",
    description: "We have a team of highly skilled developers who are passionate about their work.",
    icon: RocketLaunchIcon
  },
  {
    id: 1,
    name: "Take responsibility.",
    description: "We take responsibility for our work when it comes to quality and performance.",
    icon: HandRaisedIcon
  },
  {
    id: 2,
    name: "Be supportive.",
    description: "We are always looking for ways to improve our services and support our users.",
    icon: UserGroupIcon
  },
  {
    id: 3,
    name: "Always learning.",
    description: "We stay up-to-date with the latest technologies and trends in the industry.",
    icon: AcademicCapIcon
  },
  {
    id: 4,
    name: "Share everything you know.",
    description: "We believe in the power of open collaboration to build a better future.",
    icon: SparklesIcon
  },
  {
    id: 5,
    name: "Enjoy down-time",
    description: "We enjoy being part of a team that is always learning and growing.",
    icon: SunIcon
  }
]

const teams = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Eng. Obaida AL-Anzi",
    role: "CEO / Founder",
    location: "Bahrain"
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Eng. Khalil",
    role: "Back-End Developer",
    location: "Bahrain"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Shawqi Hatem",
    role: "Front-End Developer",
    location: "Gaza - Palestine"
  }
]

const AboutPage = function AboutPage() {
  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  return (
    <main className="relative isolate">
      {/* Background */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-xl-3">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none transform-gpu bg-gradient-to-r from-primary to-secondary opacity-25"
          style={{clipPath}}
        />
      </div>

      {/* Header */}
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-xl-2 pt-24 text-center sm:pt-40">
          <h2 className="text-xl-4 font-bold tracking-tight text-foreground sm:text-xl-6">
            About OMQ
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            OMQ is a platform that helps small businesses grow and succeed through digital
            transformation and engagement with their customers.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto mt-20 max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:mx-0 lg:max-w-none">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 text-justify text-base leading-7 text-muted-foreground lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                We create stunning, responsive websites that provide an intuitive user experience.
                Using the latest technologies, we ensure your site is fast, secure, and scalable.
                Boost your online presence with our digital marketing services. We develop
                strategies that drive traffic, engage your audience, and convert visitors into
                customers.
              </p>
              <p className="mt-8">
                Make a lasting impression with our graphic design solutions. Our designers create
                visuals that align with your brand and capture attention. Expand your reach with our
                custom app development services. We build user-friendly, high-performance mobile and
                web apps tailored to your business needs.
              </p>
            </div>
            <div>
              <p>
                Working with OMQ Solutions was a game-changer for our business. Their expertise and
                dedication helped us launch a successful e-commerce platform that exceeded our
                expectations.
              </p>
              <p className="mt-8">
                The team at OMQ Solutions transformed our out-dated website into a modern,
                user-friendly site. Their attention to detail and creative approach made all the
                difference.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((element) => (
              <div
                key={element.id}
                className="flex flex-col-reverse gap-y-3 border-l border-border pl-6">
                <dt className="text-base leading-7 text-muted-foreground">{element.label}</dt>
                <dd className="text-xl-3 font-semi-bold tracking-tight text-foreground">
                  {element.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Image */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-xl-7 xl:px-8">
        <Image
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5"
          alt="About OMQ"
          fill
          className="!static aspect-[9/4] w-full object-cover xl:rounded-xl"
        />
      </div>

      {/* Values */}
      <div className="mx-auto mt-32 max-w-xl-7 px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:mx-0">
          <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
            Our Values
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            OMQ is a platform that helps small businesses grow and succeed through digital
            transformation and engagement with their customers.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-xl-2 grid-cols-1 gap-8 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((element) => (
            <div key={element.id} className="relative pl-9">
              <dt className="inline font-semi-bold text-foreground">
                <element.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-primary"
                />
                {element.name}
              </dt>{" "}
              <dd className="inline">{element.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team */}
      <div className="mx-auto my-32 max-w-xl-7 px-6 sm:my-40 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:mx-0">
          <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Introducing our dedicated team of experts who are passionate about what they do. Our
            team is committed to delivering top-notch solutions.
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-xl-2 grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {teams.map((element) => (
            <li key={element.id}>
              <Image
                src={element.image}
                alt={element.name}
                fill
                className="!static aspect-[14/13] !h-auto w-full rounded-xl-2 object-cover"
              />
              <h3 className="mt-6 text-lg font-semi-bold leading-8 tracking-tight text-foreground">
                {element.name}
              </h3>
              <p className="text-base leading-7 text-muted-foreground">{element.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default AboutPage
