import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fcfaf7]/95 backdrop-blur-sm border-b border-stone-200 z-50 px-6 py-4 flex justify-between items-center transition-all">
      <div className="text-xl tracking-widest uppercase">
        RESTAURANTE DA <span className="text-[#b36239] font-semibold">THAIS</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm tracking-wide text-stone-600 uppercase">
        <a href="#inicio" className="hover:text-[#b36239] transition">Início</a>
        <a href="#historia" className="hover:text-[#b36239] transition">História</a>
        <a href="#menu" className="hover:text-[#b36239] transition">Menu</a>
        <a href="#depoimentos" className="hover:text-[#b36239] transition">Depoimentos</a>
        <a href="#visite-nos" className="hover:text-[#b36239] transition">Visite-nos</a>
      </div>
      <button className="bg-[#b36239] text-white px-5 py-2 text-sm uppercase tracking-wider rounded shadow-sm hover:bg-[#964f2c] transition">
        Reservar Mesa
      </button>
    </nav>
  );
}