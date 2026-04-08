import { useCartStore } from "@/store/useCartStore"
import { Botao } from "../../Components/Botao"

export function ProdutoPage(){

    const addItem = useCartStore((state) => state.addItem)


    return(
        <Botao onClick={() => addItem(produto)}>
            Adicionar ao carrinho
        </Botao>
    )
}