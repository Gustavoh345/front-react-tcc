import { PageLayout } from "../../Components/PageLayout";
import { useState } from "react";
import { produtosMock } from "../../data/produtos";
import { createMockImage } from "../../data/produtos";
import { useNavigate, useParams } from "@tanstack/react-router";
import { Input } from "../../Components/Input";

export function PagamentPage() {
    const [metodo, setMetodo] = useState("pix");
    
    const { id } = useParams({ strict: false });
    const produtos = produtosMock.find((p) => p.id === id);

    const carrinhoItens = produtos ? [produtos] : [];

    const navigate = useNavigate(); 


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
                                    <img src={item.imagem} className="w-16 h-16 rounded-lg" />

                                    <div className="flex-1">
                                        <p className="text-sm">{item.nome}</p>
                                        <p className="text-yellow-400 font-semibold">
                                            {item.preco}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div className="border-t border-white/10 pt-4">
                                <p>Total: R$ {produtos?.preco}</p>
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