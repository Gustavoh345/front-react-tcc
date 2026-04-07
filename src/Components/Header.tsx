//cabeçalho da nossa aplicação
// Header.tsx
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, House, LogIn, UserRound } from "lucide-react";
import LogoOmnimarket from "../assets/Logo_omnimarket.jpg";

// Lista centralizada de links do cabecalho para facilitar manutencao futura.
const navItems = [
  {
    to: "/home",
    label: "Home",
    icon: House,
  },
  {
    to: "/login",
    label: "Login",
    icon: LogIn,
  },
  {
    to: "/perfilUsuario",
    label: "Perfil",
    icon: UserRound,
  },
] as const;

export default function Header() {
  // Le a rota atual para destacar visualmente a pagina ativa no menu.
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
        <div className='flex justify-between gap-4'>
          <Link to="/login" className='text-white'>Login</Link>
          <Link to="/perfilUsuario" className='text-white'> Pagina de usuário </Link>
        </div>
        )}

      {/* Se estiver no login */}
      { (isLogin || isCadastro || isPerfil) && <Link to="/home" style={{color: 'white'}}>Home</Link>}
 

    </header>
  )
}
