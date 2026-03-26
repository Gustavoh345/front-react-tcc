import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '../Components/LoginPage'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginPage />
}