import { PageLayout } from "../../Components/PageLayout";
import { useState } from "react";
import { produtosMock } from "../../data/produtos";
import { createMockImage } from "../../data/produtos";
import { useNavigate, useParams } from "@tanstack/react-router";
import { Input } from "../../Components/Input";
import { useCart } from "../../context/CartContext";

export function PagamentPage() {
    const [metodo, setMetodo] = useState("pix");

    const { carrinhoItens } = useCart();

    const navigate = useNavigate(); 

    const total = carrinhoItens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <PageLayout>
            <div className="min-h-screen bg-black text-white px-4 py-8">
                <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">

                    {/* ESQUERDA */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* ENDEREÇO */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">Endereço de entrega</h2>

                            <Input placeholder="CEP" />
                            <Input placeholder="Rua" />
                            <Input placeholder="Número" />
                            <Input placeholder="Cidade" />
                        </section>

                        {/* ENTREGA */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">Opções de entrega</h2>

                            {["Padrão (5 dias)", "Expresso (2 dias)", "Retirada"].map((op) => (
                                <label key={op} className="flex items-center gap-2 border p-3 rounded-xl">
                                    <input type="radio" name="frete" />
                                    {op}
                                </label>
                            ))}
                        </section>

                        {/* Métodos de pagamento da compra */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">Pagamento</h2>

                            {["pix", "credito", "debito", "boleto"].map((tipo) => (
                                <button
                                    key={tipo}
                                    onClick={() => setMetodo(tipo)}
                                    className={`w-full p-3 rounded-xl border ${metodo === tipo ? "border-yellow-400" : "border-white/10"
                                        }`}
                                >
                                    {tipo.toUpperCase()}
                                </button>
                            ))}

                            {/*Caso o método de pagamento for no crédito, aparecerá dois inputs para a coleta de dados do cartão */}
                            {metodo === "credito" && (
                                <div className="space-y-2">
                                    <Input required placeholder="Número do cartão"/>
                                    <Input required placeholder="Validade"/>
                                </div>
                            )}

                            {/*Caso o método de pagamento for no pix, aparecerá um QRCode paga escaneamento.*/}
                            {metodo === "pix" && (
                                <p className="text-sm text-neutral-400">
                                    O QR Code será gerado após finalizar a compra.
                                </p>
                            )}
                        </section>

                    </div>

                    {/* DIREITA - resumo do pedido realizado*/}
                    <div className="lg:col-span-1">
                        <aside className="border border-white/10 rounded-2xl p-5 space-y-4">

                            <h2 className="text-xl font-semibold">Resumo do pedido</h2>

                            {carrinhoItens.map((item) => (
                                <div key={item.id} className="flex gap-3">
                                    <img src={item.imagem} className="w-16 h-16 rounded-2xl" />

                                    <div className="flex-1 py-2">
                                        <p className="text-[16px] pb-2">{item.nome}</p>
                                        <p className="font-semibold">Valor unitário: {item.preco}</p>
                                        <p className="">Quantidade: {item.quantidade}</p>
                                        <p className="text-yellow-400">Valor total: {item.quantidade * item.preco}</p>

                                    </div>
                                </div>
                            ))}

                            <div className="border-t border-white/10 pt-4">
                                <div className="flex font-bold text-[30px]">
                                    <p className="px-3">Total: </p>
                                    <p className="text-emerald-300">R$ {total.toFixed(2)}</p>
                                </div>
                            </div>

                            <button
                            className="w-full bg-yellow-400 text-black py-3 rounded-xl"
                            onClick={() => navigate({
                                to:"/paginaSucesso"
                            })}>
                                Finalizar compra
                            </button>

                        </aside>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}