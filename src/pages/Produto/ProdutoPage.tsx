import { useParams } from "@tanstack/react-router";
import { PageLayout } from "../../Components/PageLayout";
import { produtosMock } from "../../data/produtos";
import { createMockImage } from "../../data/produtos";


//necessidade de arrumar esta pagina para utilizar o carrinho de forma concreta
export function ProdutoPage() {
  
  /*Essa const usa esse "{ strict: false } para que o projeto não precise de confirmação para pegar o id do params"*/
  const { id } = useParams({ strict: false });

  const produto = produtosMock.find((p) => p.id === id); //<--uma variavel que procura o produto com o id selecionado (no click do usuario) e busca as infos do produto

  //caso o user coloque um produto que não corresponde 
  if (!produto)
    return <div className="text-green-700">Produto não encontrado</div>;
  
  return (

    <PageLayout>

      <img src={produto.imagem} />
      <h1 className="text-green-400">{produto.nome}</h1>
      <p className="text-yellow-400">{produto.preco}</p>

      <h1 className="text-red-600">Produto Clicado: {id}</h1>
      <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Pagina de produto em construcao
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base">
            Esta rota ainda nao foi implementada na arquitetura atual.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
