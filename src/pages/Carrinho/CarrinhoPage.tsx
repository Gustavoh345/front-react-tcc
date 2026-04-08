import { useCartStore } from "../../store/UseCartStory"

export function CarrinhoPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const increase = useCartStore((state) => state.increaseQuantity)
  const decrease = useCartStore((state) => state.decreaseQuantity)
  const total = useCartStore((state) => state.getTotal())

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

      {items.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="border p-4 mb-3 rounded-lg">
              <h2 className="font-semibold">{item.nome}</h2>
              <p>R$ {item.preco}</p>
              <p>Quantidade: {item.quantidade}</p>

              <div className="flex gap-2 mt-2">
                <button onClick={() => increase(item.id)}>+</button>
                <button onClick={() => decrease(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>
                  Remover
                </button>
              </div>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: R$ {total.toFixed(2)}
          </h2>

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Finalizar compra
          </button>
        </>
      )}
    </div>
  )
}