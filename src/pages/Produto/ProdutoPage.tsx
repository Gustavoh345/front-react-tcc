import { useParams } from "@tanstack/react-router";
import { PageLayout } from "../../Components/PageLayout";
import { produtosMock } from "../../data/produtos";
import { createMockImage } from "../../data/produtos";

import { Botao } from "../../Components/Botao";
import { Car } from "lucide-react";


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
      <div className="flex justify-center items-center min-h-screen">
  
  <div className="flex shadow-lg rounded-lg overflow-hidden max-w-screen w-full">
    
    {/* LADO ESQUERDO */}
    <div className="flex flex-col items-center justify-center p-6 w-1/2 border-r">
      <img 
        src={produto.imagem} 
        className="max-w-max max-h-max object-cover rounded-3xl"
      />
      
    </div>

    {/* LADO DIREITO */}

    {/* este clamp funciona assim (tamanho min, tamanho ideal, tamanho max), fazendo ele se adaptar durante o zoom no site do usuario */}
    {/* este break-words serve para que o texto nao ultrapase a div que esta inserido, que neste caso seria invadir a outra coluna (imagem) */}
    <div className="flex flex-col text-center items-center px-8 w-1/2 text-white">
      <h1 className="text-white mt-4 text-center 
               text-[clamp(80px,2.5vw,80px)] 
               max-w-full 
               break-words 
               pb-[10px]">
          {produto.nome}
      </h1>

      <p className="text-yellow-500 pt-[30px] font-bold text-[60px]">
        R$ {produto.preco}
      </p>

      <h1 className="text-[#6b6b6b] mb-4 text-[40px]">
        Produto Clicado: {id}
      </h1>

      <div className="flex gap-5">
        <Botao className="items-center h-[80px] w-[700px] text-[60px]">
          Comprar
        </Botao>

        <Botao icon={<Car className="w-5 h-5"/>} className="items-center h-[80px] w-[700px] text-[60px]">
          adicionar ao carrinho
        </Botao>
      </div>

      <h1 className="text-[40px] font-bold pt-[400px] ">
        Página de produto em construção
      </h1>

      <p className="mt-2 text-gray-200 text-[30px]">
        Esta rota ainda não foi implementada na arquitetura atual.
      </p>
    </div>

  </div>

</div>
    </PageLayout>
  );
}
