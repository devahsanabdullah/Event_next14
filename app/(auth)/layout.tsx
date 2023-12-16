export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex-center min-h-screen bg-primary-50 w-full bg-dotted-pattern bg-cover bg-center">
      
        {children}

      </div>
    )
  }