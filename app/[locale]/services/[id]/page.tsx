// DONE REVIEWING: GITHUB COMMIT

const Page = function Page({params: {id, locale}}: {params: {id: string; locale: string}}) {
  return (
    <div className="flex h-screen items-center justify-center text-foreground">
      Service {id} in {locale}
    </div>
  )
}

export default Page
