import { useEffect, useState } from "react";
import { ArrowDownWideNarrow } from "lucide-react";
import { Banner } from "../../Components/home/Banner";
import { CategoryList } from "../../Components/home/CategoryList";
import { ProductGrid } from "../../Components/home/ProductGrid";
import { SearchBar } from "../../Components/home/SearchBar";
import { PageLayout } from "../../Components/PageLayout";
import type { HomeCategory, HomeProduct } from "../../types/home";

// Cria uma imagem SVG em formato data URI para manter o mock independente de backend e de URLs externas.
function createMockImage(label: string, colorA: string, colorB: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      <circle cx="650" cy="140" r="110" fill="rgba(255,255,255,0.08)" />
      <circle cx="180" cy="470" r="150" fill="rgba(0,0,0,0.18)" />
      <text x="70" y="310" fill="#ffffff" font-family="Arial, sans-serif" font-size="56" font-weight="700">
        ${label}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Lista fixa de categorias usadas para o mock visual da Home.
// No futuro, esse array pode ser substituido por uma resposta da API em C#.
const mockCategorias: HomeCategory[] = [
  { id: "todos", nome: "Todos", icone: "smartphone" },
  { id: "eletronicos", nome: "Eletronicos", icone: "smartphone" },
  { id: "roupas", nome: "Roupas", icone: "shirt" },
  { id: "games", nome: "Games", icone: "gamepad" },
  { id: "casa", nome: "Casa", icone: "sofa" },
  { id: "audio", nome: "Audio", icone: "headphones" },
  { id: "acessorios", nome: "Acessorios", icone: "watch" },
];

// Lista fixa de produtos para simular um marketplace carregado de forma realista.
// Quando a API existir, a Home devera trocar esse mock por um fetch e manter a mesma tipagem.
const mockProdutos: HomeProduct[] = [
  {
    id: "1",
    nome: "Smartphone Orion Pro 256GB com camera tripla",
    preco: 2499.9,
    avaliacao: 4.8,
    categoriaId: "eletronicos",
    imagem: createMockImage("Orion Pro", "#f59e0b", "#111827"),
    destaque: "Frete gratis",
  },
  {
    id: "2",
    nome: "Jaqueta urban tech resistente a agua",
    preco: 289.9,
    avaliacao: 4.6,
    categoriaId: "roupas",
    imagem: createMockImage("Urban Tech", "#334155", "#0f172a"),
    destaque: "Mais vendido",
  },
  {
    id: "3",
    nome: "Console NovaPlay com controle sem fio",
    preco: 3599.0,
    avaliacao: 4.9,
    categoriaId: "games",
    imagem: createMockImage("NovaPlay", "#1d4ed8", "#020617"),
  },
  {
    id: "4",
    nome: "Poltrona lounge para sala e home office",
    preco: 899.9,
    avaliacao: 4.5,
    categoriaId: "casa",
    imagem: createMockImage("Lounge Seat", "#78716c", "#111827"),
  },
  {
    id: "5",
    nome: "Fone bluetooth pulse com cancelamento de ruido",
    preco: 649.9,
    avaliacao: 4.7,
    categoriaId: "audio",
    imagem: createMockImage("Pulse Audio", "#0f766e", "#022c22"),
    destaque: "Entrega hoje",
  },
  {
    id: "6",
    nome: "Smartwatch Axis com monitoramento avancado",
    preco: 799.9,
    avaliacao: 4.4,
    categoriaId: "acessorios",
    imagem: createMockImage("Axis Watch", "#7c3aed", "#111827"),
  },
  {
    id: "7",
    nome: "Notebook Vision 15 para estudo e produtividade",
    preco: 4299.9,
    avaliacao: 4.8,
    categoriaId: "eletronicos",
    imagem: createMockImage("Vision 15", "#f97316", "#1f2937"),
  },
  {
    id: "8",
    nome: "Moletom essencial premium com modelagem ampla",
    preco: 159.9,
    avaliacao: 4.3,
    categoriaId: "roupas",
    imagem: createMockImage("Essencial", "#475569", "#111827"),
  },
  {
    id: "9",
    nome: "Kit gamer com teclado mecanico e mouse RGB",
    preco: 449.9,
    avaliacao: 4.6,
    categoriaId: "games",
    imagem: createMockImage("Kit Gamer", "#9333ea", "#111827"),
  },
];

export function HomePage() {
  // Controla o valor digitado na busca principal da Home.
  const [searchTerm, setSearchTerm] = useState("");

  // Guarda a categoria ativa para filtrar os produtos visualmente.
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // Simula o loading inicial da listagem, como aconteceria em uma requisicao real.
  const [isLoading, setIsLoading] = useState(true);

  // Mantem os produtos carregados na interface.
  // Hoje eles vem do mock, mas futuramente poderao vir da API sem mudar os componentes visuais.
  const [products, setProducts] = useState<HomeProduct[]>([]);

  // Define quantos itens ficam visiveis no grid atual.
  // Esse estado deixa a pagina pronta para evoluir para paginacao ou infinite scroll.
  const [visibleCount] = useState(6);

  // Simula o carregamento inicial dos produtos, como se viessem do backend.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setProducts(mockProdutos);
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  // Faz a busca local apenas para o mock visual.
  // Quando a API em C# existir, este filtro pode virar query string enviada ao backend.
  const normalizedSearch = searchTerm.trim().toLowerCase();

  // Filtra os produtos usando categoria e busca para simular o comportamento de um marketplace.
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "todos" || product.categoriaId === selectedCategory;

    const matchesSearch =
      normalizedSearch.length === 0 ||
      product.nome.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  // Recupera o nome da categoria ativa para exibir textos mais claros no estado vazio.
  const activeCategoryName =
    mockCategorias.find((categoria) => categoria.id === selectedCategory)?.nome ?? "Todos";

  return (
    <PageLayout>
      {/* Container principal da Home com espacamento confortavel e largura limitada. */}
      <div className="min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
          {/* Cabecalho da Home com titulo contextual e barra de busca. */}
          <section className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),_transparent_48%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.01))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <span className="inline-flex w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm font-medium text-yellow-300">
                  Marketplace visual
                </span>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Descubra ofertas com uma experiencia pronta para evoluir
                  </h1>
                  <p className="max-w-3xl text-sm leading-6 text-neutral-400 sm:text-base">
                    Esta Home simula uma vitrine de marketplace com banner, categorias,
                    cards de produto, loading, estado vazio e estrutura preparada para
                    receber dados reais da API futuramente.
                  </p>
                </div>
              </div>

              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </section>

          {/* Banner principal usado como area de destaque promocional. */}
          <Banner
            titulo="Semana OmniMarket com descontos em tecnologia, moda e casa"
            descricao="Use esta secao para destacar campanhas sazonais, vitrines patrocinadas ou produtos lideres de conversao quando a API estiver conectada."
            imagem={createMockImage("Semana OmniMarket", "#eab308", "#111827")}
          />

          {/* Lista horizontal de categorias com scroll no mobile. */}
          <CategoryList
            categorias={mockCategorias}
            categoriaAtiva={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Cabecalho da secao de produtos, reforcando a ideia de ordenacao futura. */}
          <section className="space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Produtos em destaque</h2>
                <p className="text-sm text-neutral-400">
                  A listagem abaixo usa dados mockados e ja esta preparada para receber
                  resposta de API, filtros do backend e proxima pagina de resultados.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                <ArrowDownWideNarrow className="h-4 w-4 text-yellow-400" />
                Ordenacao: mais relevantes
              </div>
            </div>

            {/* A grade centraliza os estados de loading, vazio e listagem. */}
            <ProductGrid
              produtos={filteredProducts}
              isLoading={isLoading}
              termoBusca={searchTerm}
              categoriaAtivaNome={activeCategoryName}
              visibleCount={visibleCount}
            />
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
