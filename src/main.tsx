import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import './index.css' // <-- ESSENCIAL para o Tailwind funcionar

const router = createRouter({
  routeTree,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)