import { NextUIProvider } from '@nextui-org/react'
import '@/styles/globals.css'
import { darkTheme } from '@/themes'

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <main className="dark text-foreground bg-background">
        < Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
