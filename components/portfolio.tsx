// DONE REVIEWING: GITHUB COMMIT 2️⃣

const portfolios = [
  {
    id: 0,
    image: "/assets/portfolio-01.webp",
    title: "E-Commerce Platform",
    testimonial:
      "Working with OMQ Solutions was a game-changer for our business. Their expertise and dedication helped us launch a successful e-commerce platform that exceeded our expectations.",
    client: {
      name: "John Doe",
      title: "CEO, Shop Online"
    }
  },
  {
    id: 1,
    image: "/assets/portfolio-02.webp",
    title: "Corporate Website Re-Design",
    testimonial:
      "The team at OMQ Solutions transformed our out-dated website into a modern, user-friendly site. Their attention to detail and creative approach made all the difference.",
    client: {
      name: "Jane Smith",
      title: "Marketing Director, Tech-Corp"
    }
  }
]

const Portfolio = function Portfolio() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:text-center">
          <h2 className="text-base font-medium leading-7 text-primary">Portfolio</h2>
          <p className="mt-2 text-xl-3 font-bold tracking-tight text-white sm:text-xl-4">
            Our Work Always Speaks for Itself
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Explore our portfolio to see the diverse range of projects we have successfully
            delivered for our clients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
