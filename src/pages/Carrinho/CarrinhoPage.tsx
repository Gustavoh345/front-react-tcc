import { useCartStore } from "../../store/UseCartStory"

export function cartStory{
const items = useCartStore((state) => state.items)
const removeItem = useCartStore((state) => state.removeItem)
const increase = useCartStore((state) => state.increaseQuantity)
const decrease = useCartStore((state) => state.decreaseQuantity)
const total = useCartStore((state) => state.getTotal())

return (
  <div>
    {items.map((item) => (
      <div key={item.id}>
        <h2>{item.nome}</h2>
        <p>R$ {item.preco}</p>
        <p>Qtd: {item.quantidade}</p>

        <button onClick={() => increase(item.id)}>+</button>
        <button onClick={() => decrease(item.id)}>-</button>
        <button onClick={() => removeItem(item.id)}>Remover</button>
      </div>
    ))}

    <h2>Total: R$ {total}</h2>
  </div>
)
}