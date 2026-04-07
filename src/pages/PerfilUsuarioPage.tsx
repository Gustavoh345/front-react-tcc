import { useState } from "react";
import { PageLayout } from "../components/PageLayout";

export function PerfilUsuarioPage(){
    const user = {nome: "", email: ""}
    
    const [abaAtiva, setAbaAtiva] = useState("produtos")

    return (
    <PageLayout>
        <div className="bg-black text-white min-h-screen p-4 flex flex-col gap-6">

            <h2 className="text-center text-xl font-semibold">Meu Perfil</h2>

            {/* CARD USUÁRIO */}
            <div className="bg-[#111] rounded-3xl p-6 border border-gray-800 flex flex-col items-center text-center gap-3">
                
                <img src="https://i.pravatar.cc/100" className="w-24 h-24 rounded-full border-4 border-yellow-400" />

                <h2 className="text-lg font-semibold">{user.nome}</h2>
                <h3 className="text-gray-400">@{user.email}</h3>

                <span className="text-yellow-400 border border-yellow-400 px-3 py-1 rounded-full text-xs">CONTA VERIFICADA</span>

                <div className="w-full border-t border-gray-800 my-4"></div>

                <div className="w-full flex flex-col gap-3 text-left">
                    <p>📧 {user.email}</p>
                    <p>📱 numero de celular do user</p>
                    <p>📍 endereço</p>
                </div>
            </div>

            {/* AÇÕES RÁPIDAS */}
            <div className="bg-[#111] rounded-3xl border border-gray-800">
                <p className="p-4 font-semibold text-gray-400">AÇÕES RÁPIDAS</p>

                {["Editar Perfil", "Endereços", "Pagamentos", "Minhas compras", "Suporte e ajuda"]
                .map((item) => (
                <button
                    key={item}
                    className="w-full text-left p-4 border-t border-gray-800 flex justify-between">
                    {item}
                    <span>›</span>
                </button>
                ))}
            </div>

            {/* ESTATÍSTICAS */}
            <div className="bg-[#111] rounded-3xl p-4 border border-gray-800 flex flex-col gap-4">
                
                <div>
                    <h3 className="font-semibold">Minha Loja</h3>
                    <p className="text-sm text-gray-400">
                        Desempenho da sua vitrine
                    </p>
                </div>

                <div className="flex gap-4">
                
                    <div className="flex-1 bg-black p-3 rounded-xl text-center">
                        <p className="text-sm text-gray-400">AVALIAÇÃO MÉDIA</p>
                        <p className="text-lg font-bold">4.9 ⭐</p>
                    </div>

                    <div className="flex-1 bg-black p-3 rounded-xl text-center">
                        <p className="text-sm text-gray-400">SEGUIDORES</p>
                        <p className="text-lg font-bold">2.4k</p>
                    </div>

                </div>
            </div>

            {/* NAV TABS */}
            <nav>
                <ul className="flex justify-around gap-6 border-b border-gray-800 pb-2">
                    <li
                    onClick={() => setAbaAtiva("produtos")}
                    className={`cursor-pointer pb-1 ${
                    abaAtiva === "produtos" ? "border-b-2 border-yellow-400" : "text-gray-400"
                    }`}>Produtos</li>

                    <li
                    onClick={() => setAbaAtiva("vendas")}
                    className={`cursor-pointer pb-1 ${
                    abaAtiva === "vendas" ? "border-b-2 border-yellow-400" : "text-gray-400"
                    }`}>Vendas</li>

                    <li
                    onClick={() => setAbaAtiva("compras")}
                    className={`cursor-pointer pb-1 ${
                    abaAtiva === "compras" ? "border-b-2 border-yellow-400" : "text-gray-400"
                    }`}>Compras</li>
                </ul>
            </nav>
            

            {/* PRODUTOS */}
            <div className="grid grid-cols-3 gap-4">
                
                <div className="bg-[#111] rounded-xl overflow-hidden">
                    <img src="https://via.placeholder.com/150" />
                    <div className="p-2">
                        <p>nome produto</p>
                        <h4 className="text-yellow-400 font-bold">R$ 00,00</h4>
                    </div>
                </div>

                <div className="bg-[#111] rounded-xl overflow-hidden">
                    <img src="https://via.placeholder.com/150" />
                    <div className="p-2">
                        <p>nome produto</p>
                        <h4 className="text-yellow-400 font-bold">R$ 00,00</h4>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
    );
}