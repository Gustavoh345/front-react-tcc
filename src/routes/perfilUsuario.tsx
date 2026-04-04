import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/perfilUsuario')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/perfilUsuario"!</div>
}
