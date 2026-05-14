import { Outlet, createRootRoute } from '@tanstack/react-router'
import AppHeader from '../Components/AppHeader'
import Footer from '../Components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <>
      <AppHeader />
      <Outlet />
      <Footer />
    </>
  )
}
