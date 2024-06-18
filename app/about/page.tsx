// DONE REVIEWING: GITHUB COMMIT 3️⃣
const AboutPage = function AboutPage() {
  const clipPath =
    "polygon(73% 51%, 91% 11%, 100% 46%, 97% 82%, 92% 84%, 75% 64%, 75% 64%, 55% 47%, 46% 49%, 45% 62%, 50% 87%, 21% 64%, 0% 100%, 5% 51%, 21% 63%, 58% 0%, 73% 51%)"

  return (
    <main className="relative isolate">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-xl-3">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none transform-gpu from-primary to-secondary opacity-25"
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
          <div className="grid max-w-xl grid-cols-1 gap-8 text-justify text-base leading-7 text-muted-foreground lg:max-w-none lg:grid-cols-2">
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
        </div>
      </div>
    </main>
  )
}

export default AboutPage