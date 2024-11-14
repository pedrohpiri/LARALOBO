import React from 'react';
import { ShoppingBag, Instagram, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = React.useState('novidades');

  const products = [
    {
      id: 1,
      name: 'Vestido Resort',
      price: 459.90,
      category: 'novidades',
      image: '/api/placeholder/300/400'
    },
    {
      id: 2,
      name: 'Conjunto Verão',
      price: 389.90,
      category: 'novidades',
      image: '/api/placeholder/300/400'
    },
    {
      id: 3,
      name: 'Vestido Festa',
      price: 559.90,
      category: 'vestidos',
      image: '/api/placeholder/300/400'
    },
    {
      id: 4,
      name: 'Conjunto Chic',
      price: 489.90,
      category: 'conjuntos',
      image: '/api/placeholder/300/400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-4">LARA LOBO</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">Multibrand Store</p>
            <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
              Explorar Coleção
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <ShoppingBag size={32} className="mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Moda Exclusiva</h3>
              <p className="text-gray-600">Peças selecionadas das melhores marcas</p>
            </div>
            <div className="text-center p-4">
              <ShoppingBag size={32} className="mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Atendimento VIP</h3>
              <p className="text-gray-600">Consultoria de moda personalizada</p>
            </div>
            <div className="text-center p-4">
              <ShoppingBag size={32} className="mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Envio para Todo Brasil</h3>
              <p className="text-gray-600">Entrega rápida e segura</p>
            </div>
          </div>
        </div>
      </section>

 {/* Products Section */}
<section className="py-12 sm:py-16 w-full">
  <div className="w-full px-4">
    <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12">DESTAQUES</h2>
    
    {/* Container das categorias com scroll */}
    <div className="w-full overflow-x-auto scrollbar-hide">
      {/* Wrapper interno para as categorias */}
      <div className="flex min-w-max gap-4 justify-start sm:justify-center pb-4">
        {['novidades', 'vestidos', 'conjuntos', 'acessórios'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all whitespace-nowrap ${
              activeCategory === category 
              ? 'bg-black text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>

    {/* Grid de produtos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8">
      {products.filter(p => p.category === activeCategory).map(product => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden mb-3 sm:mb-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] object-cover transition transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition flex items-center justify-center">
              <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition transform translate-y-4 group-hover:translate-y-0">
                Ver Detalhes
              </button>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-medium">{product.name}</h3>
          <p className="text-gray-800 text-sm sm:text-base">R$ {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Instagram Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12">INSTAGRAM</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {[...Array(6)].map((_, i) => (
              <img 
                key={i} 
                src={`/api/placeholder/300/300`} 
                alt={`Instagram ${i + 1}`}
                className="w-full h-32 sm:h-40 object-cover hover:opacity-75 transition cursor-pointer"
              />
            ))}
          </div>
          <a 
            href="https://instagram.com/lojalaralobo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-gray-600 hover:text-black text-sm sm:text-base"
          >
            <Instagram size={20} />
            Siga-nos no Instagram
            <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12">CONTATO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Endereço</h3>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">Avenida Dom Severino 1643</p>
              <p className="text-gray-600 text-sm sm:text-base">Teresina - PI</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Horário</h3>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">Segunda a Sexta: 09:00 às 20:00</p>
              <p className="text-gray-600 text-sm sm:text-base">Sábado: 09:00 às 17:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-sm sm:text-base">© 2024 Lara Lobo - Todos os direitos reservados</p>
          <div className="flex justify-center gap-4 text-sm sm:text-base">
            <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-300">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}