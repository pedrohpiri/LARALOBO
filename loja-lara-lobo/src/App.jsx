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
          
          <div className="w-full overflow-x-auto scrollbar-hide">
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5586988615886"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20ba57] transition-colors duration-300 pulse flex items-center justify-center animate-pulse"
        style={{
          animation: 'pulse 1.5s ease-in-out infinite'
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}