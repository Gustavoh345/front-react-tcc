import { useLocation, useNavigate } from "@tanstack/react-router";
import { PageLayout } from "../../Components/PageLayout";
import { Botao } from "../../Components/Botao";
import { CheckCircle, Home, HomeIcon, ShoppingCart } from "lucide-react";



export function SuccessPage() {
  // Hook para pegar os dados enviados pela navegação
  const location = useLocation();

  // Hook para redirecionamento
  const navigate = useNavigate();

  // Dados vindos da ProductPage
  const { produto, preco, id } = location.state || {};

  // Caso o usuário entre direto na rota sem dados
  if (!produto) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-screen text-white">
          <h1 className="text-2xl">
            Nenhuma informação de compra encontrada.
          </h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Container principal centralizado */}
      <div className="flex items-center justify-center min-h-screen px-4">
        
        {/* Card principal */}
        <div className="w-full max-w-2xl bg-[#0f0f0f] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-6">

          {/* Ícone de sucesso */}
          <CheckCircle className="w-20 h-20 text-green-500" />

          {/* Título principal */}
          <h1 className="text-white font-bold text-[clamp(24px,4vw,40px)]">
            Compra realizada com sucesso!
          </h1>

          {/* Subtexto */}
          <p className="text-gray-400 text-[clamp(14px,2vw,18px)]">
            Obrigado pela sua compra 🎉
          </p>

          {/* Linha separadora */}
          <div className="w-full h-[1px] bg-gray-700"></div>

          {/* Informações do pedido */}
          <div className="w-full flex flex-col gap-4 text-left text-white">
            
            <div className="flex justify-between">
              <span className="text-gray-400">Produto:</span>
              <span>{produto}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">ID do Produto:</span>
              <span>{id}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Preço:</span>
              <span className="text-yellow-500 font-bold">
                R$ {preco}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className="text-green-500 font-semibold">
                Aprovado
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Pedido:</span>
              <span>#{Math.floor(Math.random() * 100000)}</span>
            </div>
          </div>

          {/* Linha separadora */}
          <div className="w-full h-[1px] bg-gray-700"></div>

          {/* Mensagem adicional */}
          <p className="text-gray-400 text-sm">
            Você receberá mais informações por e-mail.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col md:flex-row gap-4 w-full pt-4">
            
            {/* Voltar para home */}
            <Botao
              className="w-full"
              onClick={() => navigate({ to: "/" })}
              icon={<HomeIcon className="w-5 h-5"/>}
            >
              Voltar para Pagina Principal
            </Botao>

            {/* Continuar comprando */}
            <Botao
              className="w-full"
              onClick={() => navigate({ to: "/carrinho" })}
              icon={<ShoppingCart className="w-5 h-5"/>}
            >
              Voltar ao carrinho
            </Botao>
          </div>

        </div>
      </div>

      {/* 
        TODO: integrar com API futuramente
        Aqui será feita a busca real dos dados do pedido (backend)
        Exemplo: GET /orders/{id}
      */}
    </PageLayout>
  );
}