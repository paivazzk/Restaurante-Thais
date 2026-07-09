import React from 'react';

export default function Contact() {
  return (
    <section id="visite-nos" className="bg-[#1c1a19] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#b36239] text-xs tracking-[0.2em] uppercase mb-3 font-sans">
          Localização
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wide">
          Visite-nos
        </h2>


        <div className="max-w-4xl mx-auto mb-16 shadow-2xl rounded overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" 
            alt="Ambiente interno do restaurante" 
            className="w-full h-auto object-cover max-h-[450px]"
          />
        </div>


        <div className="grid md:grid-cols-3 gap-10 md:gap-6 text-center text-sm font-sans font-light text-stone-300">
          

          <div className="flex flex-col items-center">
            <span className="text-xl text-[#b36239] mb-3"></span>
            <h3 className="uppercase tracking-widest text-white text-xs font-medium mb-2">Endereço</h3>
            <p>R. Benedito Valadares, 37</p>
            <p>Centro, Lavras - MG</p>
            <p>37200-182</p>
          </div>


          <div className="flex flex-col items-center">
            <span className="text-xl text-[#b36239] mb-3"></span>
            <h3 className="uppercase tracking-widest text-white text-xs font-medium mb-2">Horários</h3>
            <p className="font-medium text-white">Segunda: 11:00 — 14:30</p>
            <p className="font-medium text-white">Terça: 11:00 — 14:30</p>
            <p className="font-medium text-white">Quarta: 11:00 — 14:30</p>
            <p className="font-medium text-white">Quinta: 11:00 — 14:30</p>
            <p className="font-medium text-white">Sexta: 11:00 — 14:30</p>
            <p className="font-medium text-white">Sábado: 11:00 — 14:30</p>
            <p className="font-medium text-white">Domingo: 11:00 — 14:30</p>
          </div>


          <div className="flex flex-col items-center">
            <span className="text-xl text-[#b36239] mb-3"></span>
            <h3 className="uppercase tracking-widest text-white text-xs font-medium mb-2">Contato</h3>
            <p className="text-lg text-white font-medium mb-2">(35) 3822-3298</p>
            <p className="hover:text-[#b36239] transition cursor-pointer">contato@restaurante.com.br</p>
            <p className="hover:text-[#b36239] transition cursor-pointer mt-1">@casadathais</p>
          </div>

        </div>


        <button className="mt-16 bg-[#b36239] text-white px-10 py-4 text-sm uppercase tracking-wider font-sans rounded hover:bg-[#964f2c] transition shadow-md">
          Ligar para Reservar
        </button>
      </div>
    </section>
  );
}