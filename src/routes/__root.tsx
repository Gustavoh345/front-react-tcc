import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../Components/Header/Header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      {/* Header aparece em TODAS as páginas */}
      <Header />

      {/* Aqui muda o conteúdo de cada página */}
      <Outlet />
    </>
  )
}