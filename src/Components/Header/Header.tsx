//cabeçalho da nossa aplicação
// Header.tsx
import { Link, useRouterState } from '@tanstack/react-router'
import Logo_Omnimarket from "../../assets/Logo_omnimarket.jpg"

export default function Header() {
  const { location } = useRouterState()

  const isLogin = location.pathname === '/login'

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', background: 'black', borderBottom: '2px solid', borderBottomColor:'#6B6B6B'}}>
      <img src={Logo_Omnimarket} alt="Logo omnimarket do header" className="w-[80px] h-[80px] rounded-2xl"/>

      {/* Se estiver na home */}
      {!isLogin && <Link to="/login" style={{color: 'white'}}>Login</Link>}

      {/* Se estiver no login */}
      {isLogin && <Link to="/" style={{color: 'white'}}>Home</Link>}
    </header>
  )
}