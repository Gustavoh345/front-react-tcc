import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { CadastroPage } from '../Components/CadastroPage';

export const Route = createFileRoute('/cadastro')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CadastroPage/>
}
