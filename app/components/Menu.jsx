import React from 'react';

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#1c1a19] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#b36239] text-xs tracking-[0.2em] uppercase mb-3 font-sans">
          O Menu
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wide">
          Nossos <span className="italic">Destaques</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          
          {/*Massas */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4 aspect-[4/5] bg-stone-900">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010" 
                alt="Tagliatelle al Ragù" 
                className="w-full h-full object-cover transition duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-1 font-sans">
              Massas
            </p>
            <h3 className="text-xl font-light mb-2 transition">
              Tagliatelle al Ragù
            </h3>
            
          </div>

          {/* Carnes */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4 aspect-[4/5] bg-stone-900">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069" 
                alt="Ancho Grelhado" 
                className="w-full h-full object-cover transition duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-1 font-sans">
              Carnes
            </p>
            <h3 className="text-xl font-light mb-2 transition">
              Ancho Grelhado
            </h3>
            
          </div>

          {/*Pratos Principais */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4 aspect-[4/5] bg-stone-900">
              <img 
                src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2070" 
                alt="Risoto de Açafrão" 
                className="w-full h-full object-cover transition duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-1 font-sans">
              Pratos Principais
            </p>
            <h3 className="text-xl font-light mb-2 transition">
              Risoto de Açafrão
            </h3>
            
          </div>

        </div>
      </div>
    </section>
  );
}