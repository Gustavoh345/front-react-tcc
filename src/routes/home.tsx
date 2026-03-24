//esta sera a pagina principal, com a tela infinita
import { createFileRoute, Link } from '@tanstack/react-router'
import React from 'react';

export const Route = createFileRoute('/home')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h2>Home</h2>

      {/* botão para login */}
      <Link to="/login">Ir para Login</Link>
    </div>
  )
}