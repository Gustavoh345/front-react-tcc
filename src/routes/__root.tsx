import { Outlet, createRootRoute } from '@tanstack/react-router'
import AppHeader from '../Components/AppHeader'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <>
      <AppHeader />
      <Outlet />
    </>
  )
}
