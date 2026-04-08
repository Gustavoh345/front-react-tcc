// Importa a função "create" da biblioteca Zustand
// Ela é responsável por criar nossa store (estado global)
import { create } from "zustand"


// 🧩 Tipo que representa um PRODUTO vindo do backend
type Produto = {
  id: number              // Identificador único do produto
  nome: string            // Nome do produto
  preco: number           // Preço do produto
  imagem?: string         // Imagem (opcional)
}


// 🛒 Tipo que representa um ITEM dentro do carrinho
// Ele herda tudo de Produto + adiciona a quantidade
type CartItem = Produto & {
  quantidade: number      // Quantidade desse produto no carrinho
}


// 🧠 Tipo principal da STORE (estrutura completa do carrinho)
type CartStore = {
  items: CartItem[]   // Lista de produtos no carrinho

  // Função para adicionar produto ao carrinho
  addItem: (produto: Produto) => void

  // Remove completamente um produto do carrinho
  removeItem: (id: number) => void

  // Aumenta a quantidade de um produto
  increaseQuantity: (id: number) => void

  // Diminui a quantidade de um produto
  decreaseQuantity: (id: number) => void

  // Limpa todo o carrinho
  clearCart: () => void

  // Calcula o valor total do carrinho
  getTotal: () => number
}


// 🚀 Criação da STORE usando Zustand
// "set" = função para atualizar o estado
// "get" = função para pegar o estado atual
export const useCartStore = create<CartStore>((set, get) => ({

  // 🟢 Estado inicial (carrinho começa vazio)
  items: [],


  // 🛒 Função para adicionar produto ao carrinho
  addItem: (produto) => {

    // Pega os itens atuais do carrinho
    const items = get().items

    // Verifica se o produto já existe no carrinho
    const existing = items.find((item) => item.id === produto.id)


    // 🔵 Se o produto JÁ EXISTE → aumenta a quantidade
    if (existing) {
      set({
        items: items.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 } // incrementa quantidade
            : item
        ),
      })
    }

    // 🟢 Se o produto NÃO EXISTE → adiciona ao carrinho
    else {
      set({
        items: [
          ...items,
          {
            ...produto,
            quantidade: 1, // começa com 1 unidade
          },
        ],
      })
    }
  },


  // ❌ Remove completamente um item do carrinho
  removeItem: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    })
  },


  // ➕ Aumenta a quantidade de um produto específico
  increaseQuantity: (id) => {
    set({
      items: get().items.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ),
    })
  },


  // ➖ Diminui a quantidade de um produto
  decreaseQuantity: (id) => {
    set({
      items: get().items

        // Primeiro diminui a quantidade
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )

        // Depois remove se a quantidade for 0
        .filter((item) => item.quantidade > 0),
    })
  },


  // 🧹 Limpa completamente o carrinho
  clearCart: () => set({ items: [] }),


  // 💰 Calcula o total da compra
  getTotal: () => {
    return get().items.reduce(

      // "total" começa em 0
      // soma preço * quantidade de cada item
      (total, item) => total + item.preco * item.quantidade,

      0
    )
  },

}))