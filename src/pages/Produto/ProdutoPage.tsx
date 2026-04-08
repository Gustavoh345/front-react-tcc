import { PageLayout } from "../../Components/PageLayout";
//necessidade de arrumar esta pagina para utilizar o carrinho de forma concreta
export function ProdutoPage() {
  return (
    <PageLayout>
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
