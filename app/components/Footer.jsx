import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#fcfaf7] pt-16 pb-12 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-sm text-stone-600 font-sans font-light">
        

        <div>
          <h2 className="text-lg uppercase tracking-widest text-stone-900 font-serif mb-4">
            RESTAURANTE DA <span className="text-[#b36239] font-semibold">THAIS</span>
          </h2>
          <p className="leading-relaxed">
            Autêntica culinária artesanal no coração de Lavras. Ingredientes honestos, técnicas precisas e uma paixão que você sente em cada garfada.
          </p>
        </div>

      </div>
    </footer>
  );
}