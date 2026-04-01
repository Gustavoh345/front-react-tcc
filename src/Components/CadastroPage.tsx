import { Input } from "./Input";
import { Botao } from "./Botao"
import { PageLayout } from "./PageLayout";

import Google2 from '../assets/Icone_google.webp'
import Apple from '../assets/Icone_apple.png'


export function CadastroPage() {
  return (

    {/* texto fora do card/apresentação */},
    <PageLayout>
      <div className="text-center">
        <h1 className="text-white text-[90px] font-bold">OmniMarket</h1>
        <p className="text-[#6b6b6b] text-2xl">
          Faça seu cadastro para vender e comprar o que quiser!!!
        </p>
      </div>

      {/* CARD (SÓ FORMULÁRIO) */}
      <div className="bg-[#0f0f0f] w-[380px] p-8 rounded-3xl border border-yellow-400 flex flex-col gap-5">

        {/* INPUTS */}
        <Input
          name="Nome de usuário"
          id="Nome Usuario"
          placeholder="Digite o seu nome de usuário"
        />

        <Input
          name="Email"
          id="email"
          placeholder="Digite seu email"
        />

        <Input
          name="Senha"
          id="senha"
          type="password"
          placeholder="Crie sua senha"
        />

        <Input
          name="Telefone"
          id="Telefone"
          type="tel"
          pattern="\(\d{2}\)\s\d{5}-\d{4}"
          placeholder="(11) 99999-9999"
        />

        <Input
          name="CPF"
          id="CPF"
          placeholder="000.000.000-00"
        />

        <Input
          name="Endereço"
          id="endereço"
          placeholder=""
        />

        {/* BOTÃO */}
        <Botao>ENTRAR</Botao>

        {/* DIVISOR */}
        <p className="text-center text-[#6B6B6B] text-sm">
          ──────── OU ────────
        </p>

        {/* LOGIN SOCIAL */}
        <div className="flex flex-col gap-3">

            {/* Tem que arrumar este botao*/}
            <Botao
              variant="secondary"
              icon={<img src={Google2} alt="Google" className="w-5 h-5" />}
            >
              Continuar com o Google
            </Botao>
          
            <Botao 
            variant="secondary" 
            icon={<img src={Apple} alt="Apple" className="w-5 h-5"/>}
            >
              Continuar com Apple
            </Botao>
        </div>
      </div>
    </PageLayout>


  )
}