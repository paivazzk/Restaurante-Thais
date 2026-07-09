import React from 'react';

export default function Historia() {
  return (
    <section id="historia" className="py-24 bg-[#fcfaf7] px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#b36239] text-xs tracking-[0.2em] uppercase mb-3 font-sans">
          Nossa História
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
          Onde a <span className="italic">paixão</span> encontra o prato
        </h2>
        

        <div className="max-w-3xl mx-auto mb-12 shadow-xl overflow-hidden rounded">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977" 
            alt="Chef preparando prato" 
            className="w-full h-auto object-cover max-h-[450px]"
          />
        </div>


        <div className="max-w-2xl mx-auto space-y-6 text-stone-600 text-base md:text-lg leading-relaxed font-light">
          <p>
            Nascido da obsessão por ingredientes honestos e técnicas que respeitam a matéria-prima, o <span className="font-medium text-stone-800">Restaurante da Thais</span> é mais do que um restaurante — é um manifesto gastronômico. Cada prato é uma conversa entre tradição e ousadia, conduzida pelo Chef Ricardo Almeida e sua equipe.
          </p>
          <p>
            Desde 2018, transformamos ingredientes locais e sazonais em experiências que desafiam expectativas. Nossa cozinha aberta é o palco onde a alquimia acontece — à vista de todos, sem segredos.
          </p>
        </div>
      </div>
    </section>
  );
}