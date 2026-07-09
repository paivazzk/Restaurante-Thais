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
            src="https://instagram.fjdf1-1.fna.fbcdn.net/v/t39.30808-6/472304632_18483929659007324_263157299863368257_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzQzOTY0NTI2NzYzNDgyODExMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=JjpeOhIUOtUQ7kNvwEtA14t&_nc_oc=Adof8wfQYL24aTtBm8r_CzbDm6Umtg-4S9omoSyPc1QNDP-zlr4MNGDFILQ-mlCZyOo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fjdf1-1.fna&_nc_gid=8ZkQucnYtw1-vauR8icueQ&_nc_ss=7a22e&oh=00_AQBcsPTstHYfrQFsi4IkrhTvqEw8S87f_EqUuoDxu9k_HQ&oe=6A54EC2A" 
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
      </div>
    </section>
  );
}