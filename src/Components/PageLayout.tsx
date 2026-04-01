type PageLayoutProps = {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-6">
      {children}
    </div>
  )
}