// DONE REVIEWING: GITHUB COMMIT - 06

import Image from "next/image"

type PortfolioListProps = {
  portfolios: {
    id: string | number
    image: string
    title: string
    testimonial: string
    client: {
      name: string
      title: string
    }
  }[]
}

const PortfolioList = function PortfolioList({portfolios}: PortfolioListProps) {
  const classes = {
    calc: ["50%", "36rem"].join("-"),
    clipPath:
      "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"
  }

  return (
    <div className="my-32 mb-0 flex w-full flex-col gap-20 xl:mb-32 xl:gap-24">
      {portfolios.map((portfolio) => (
        <div
          key={portfolio.id}
          className="group relative z-40 bg-slate-900 pb-20 sm:pb-24 xl:rounded-lg xl:pb-0">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute left-[calc(${classes.calc})] top-[calc(${classes.calc})] transform-gpu blur-xl-3`}>
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-primary to-primary opacity-25"
                style={{clipPath: classes.clipPath}}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl-7 flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-xl-2 group-even:order-none xl:-mb-8 xl:w-96 xl:flex-none group-even:xl:order-1">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="!absolute !inset-0 !h-full !w-full rounded-lg bg-border object-cover shadow-xl-2"
                />
              </div>
            </div>
            <div className="w-full max-w-xl-2 xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg className="absolute left-0 top-0 -z-10 h-32 fill-muted/20 stroke-none">
                  <path
                    id={`${portfolio.id}-quote-icon`}
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href={`#${portfolio.id}-quote-icon`} x={86} />
                </svg>
                <h3 className="text-xl-2 font-semi-bold tracking-tight text-foreground sm:text-xl-3">
                  {portfolio.title}
                </h3>
                <blockquote className="mt-4 text-xl font-medium leading-8 text-muted-foreground sm:text-xl-2 sm:leading-9">
                  <p>{portfolio.testimonial}</p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="text-base font-medium text-foreground sm:text-lg">
                    {portfolio.client.name}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground sm:text-base">
                    {portfolio.client.title}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioList
