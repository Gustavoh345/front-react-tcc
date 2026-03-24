import { createFileRoute } from '@tanstack/react-router'
import React from 'react';

export const Route = createFileRoute('/perfilUsuario')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/perfilUsuario"!</div>
}
