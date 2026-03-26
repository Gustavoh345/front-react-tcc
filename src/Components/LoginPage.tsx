import { Input } from "./Input";
import { Botao } from "./Botao"

import Google2 from '../assets/Icone_google.webp'
import Apple from '../assets/Icone_apple.png'

export function LoginPage() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-6">

      {/* TEXTO FORA DO CARD */}
      <div className="text-center">
        <h1 className="text-white text-[90px] font-bold">OmniMarket</h1>
        <p className="text-[#6b6b6b] text-2xl">
          Compre e venda em um só lugar
        </p>
      </div>

      {/* CARD (SÓ FORMULÁRIO) */}
      <div className="bg-[#0f0f0f] w-[380px] p-8 rounded-3xl border border-yellow-400 flex flex-col gap-5">

        {/* INPUTS */}
        <Input
          name="Email"
          id="email"
          placeholder="Digite seu email"
          className="rounded-xl p-2 bg-black text-white border border-[#6B6B6B] placeholder-[#6b6b6b]"
        />

        <Input
          name="Senha"
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="rounded-xl p-2 bg-black text-white border border-[#6B6B6B] placeholder-[#6b6b6b]"
        />

        {/* OPÇÕES */}
        <div className="flex justify-between items-center text-sm">
          <label className="text-[#6b6b6b] flex items-center gap-2">
            <input type="checkbox" className="accent-yellow-500 cursor-pointer" />
            Lembrar-me
          </label>

          <a href="#" className="text-yellow-500 hover:underline hover:text-yellow-300">
            Esqueci minha senha
          </a>
        </div>

        {/* BOTÃO */}
        <Botao>ENTRAR</Botao>

        {/* DIVISOR */}
        <p className="text-center text-[#6B6B6B] text-sm">
          ──────── OU ────────
        </p>

        {/* LOGIN SOCIAL */}
        <div className="flex flex-col gap-3">

            {/* Tem que arrumar este botao*/}
            <Botao variant="secondary">
            <img src={Google2} alt="Google" className="w-5 h-5" />
            <span>Continuar com o Google</span>
            </Botao>
          <button className="flex items-center justify-center gap-3 w-full h-[44px] bg-black text-white rounded-xl border border-[#6B6B6B] hover:bg-neutral-900 transition">
            <img src={Google2} alt="Google" className="w-5 h-5" />
            <span>Continuar com o Google</span>
          </button>

        
          <button className="flex items-center justify-center gap-3 w-full h-[44px] bg-black text-white rounded-xl border border-[#6B6B6B] hover:bg-neutral-900 transition">
            <img src={Apple} alt="Apple" className="w-5 h-5" />
            <span>Continuar com a Apple</span>
          </button>

        </div>

      </div>
    </div>
  );
}