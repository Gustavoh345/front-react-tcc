//cabeçalho da nossa aplicação
// Header.tsx
import { Link, useRouterState } from '@tanstack/react-router'

export default function Header() {
  const { location } = useRouterState()

  const isLogin = location.pathname === '/login'

  return (
    <header style={{ display: 'flex', gap: '20px' }}>
      <h1>Minha Marca</h1>

      {/* Se estiver na home */}
      {!isLogin && <Link to="/login">Login</Link>}

      {/* Se estiver no login */}
      {isLogin && <Link to="/">Voltar</Link>}
    </header>
  )
}