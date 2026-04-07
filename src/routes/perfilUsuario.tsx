import { createFileRoute } from '@tanstack/react-router'
import { PerfilUsuarioPage } from '../pages/PerfilUsuarioPage'

export const Route = createFileRoute('/perfilUsuario')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PerfilUsuarioPage/>
}
