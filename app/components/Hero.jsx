import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-stone-950 pt-20">
      <div className="absolute inset-0 bg-black/60 z-0">
        <Image 
          src="/restaurante.png"
          fill
          priority
          alt="Prato sofisticado" 
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
        />
      </div>


      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <p className="text-[#b36239] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
          Autêntica Culinária Artesanal
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-6">
          Saboreie a <br />
          <span className="italic">Tradição</span> em Cada Prato
        </h1>
        <p className="text-stone-300 font-sans text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Ingredientes frescos, receitas de família e um ambiente que transforma cada refeição em uma experiência inesquecível.
        </p>
      </div>
    </section>
  );
}