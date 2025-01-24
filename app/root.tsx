import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'

import colorsStylesheet from './styles/colors.css?url'
import tailwindStylesheet from './styles/tailwind.css?url'
import appStylesheet from './styles/app.css?url'
import TopBar from '~/components/TopBar/TopBar'
import { FlightsProvider } from './context/FlightsContext'
import Container from './components/Container/Container'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: colorsStylesheet },
  { rel: 'stylesheet', href: tailwindStylesheet },
  { rel: 'stylesheet', href: appStylesheet }
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <FlightsProvider>
          <TopBar />
          <main>{children}</main>
          <ScrollRestoration />
          <Scripts />
        </FlightsProvider>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: { error: Error }) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <Container>
      <section className="my-8">
        <h1 className="mb-8">{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full overflow-x-auto p-4">
            <code>{stack}</code>
          </pre>
        )}
      </section>
    </Container>
  )
}
