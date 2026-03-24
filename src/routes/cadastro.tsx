import { createFileRoute } from '@tanstack/react-router'
import React from 'react';

export const Route = createFileRoute('/cadastro')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cadastro"!</div>
}
