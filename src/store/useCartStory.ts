import { create } from "zustand"

type Produto = {
  id: number
  nome: string
  preco: number
  imagem?: string
}

type CartItem = Produto & {
  quantidade: number
}

type CartStore = {
  items: CartItem[]
  addItem: (produto: Produto) => void
  removeItem: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (produto) => {
    const items = get().items
    const existing = items.find((item) => item.id === produto.id)

    if (existing) {
      set({
        items: items.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        ),
      })
    } else {
      set({
        items: [...items, { ...produto, quantidade: 1 }],
      })
    }
  },

  removeItem: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    })
  },

  increaseQuantity: (id) => {
    set({
      items: get().items.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ),
    })
  },

  decreaseQuantity: (id) => {
    set({
      items: get().items
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0),
    })
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    return get().items.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    )
  },
}))