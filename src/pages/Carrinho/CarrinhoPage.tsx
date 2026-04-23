import { useNavigate } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { Botao } from "../../Components/Botao";
import { CartItem } from "../../Components/cart/CartItem";
import { CartSummary } from "../../Components/cart/CartSummary";
import { PageLayout } from "../../Components/PageLayout";
import { useCartStore } from "../../store/useCartStore";
import { Spotlight } from "../../Components/home/SpotLight";

export function CarrinhoPage() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const total = useCartStore((state) => state.getTotal());

  const handleGoToStore = () => {
    navigate({ to: "/" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
          <Spotlight>
            <section className="relative overflow-hidden space-y-3 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),_transparent_48%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.01))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
              <span className="inline-flex w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm font-medium text-yellow-300">
                Carrinho
              </span>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Revise seus itens antes de finalizar a compra
                </h1>
                <p className="text-sm leading-6 text-neutral-400 sm:text-base">
                  Um resumo claro dos produtos selecionados, com ajuste rapido de
                  quantidade e total atualizado em tempo real.
                </p>
              </div>
            </section>
          </Spotlight>

          {items.length === 0 ? (
            <section className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-[32px] border border-dashed border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-300">
                <ShoppingBag className="h-9 w-9" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">
                  Seu carrinho esta vazio
                </h2>
                <p className="max-w-md text-sm leading-6 text-neutral-400">
                  Explore a loja e adicione produtos para montar seu pedido.
                </p>
              </div>

              <div className="w-full max-w-sm">
                <Botao
                  onClick={handleGoToStore}
                  className="h-14 rounded-2xl bg-yellow-400 text-black shadow-[0_0_32px_rgba(250,204,21,0.16)] hover:bg-yellow-300"
                >
                  Voltar para loja
                </Botao>
              </div>
            </section>
          ) : (
            <>
              <section className="space-y-4">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </section>

              <CartSummary subtotal={total} />

              <Botao className="h-14 rounded-2xl bg-yellow-400 text-black shadow-[0_0_36px_rgba(250,204,21,0.18)] hover:bg-yellow-300">
                Finalizar compra
              </Botao>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
