"use client";

import React from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingCart, MapPin, Star } from 'lucide-react';

export default function Home() {
  const phoneWA = "6282347001500";

  const menus = [
    { 
      id: 1, 
      name: "Nasi Kuning Ayam Palekko", 
      price: "20.000", 
      desc: "Nasi kuning gurih khas Sulawesi dengan topping ayam Palekko pedas mantap.",
      image: "/naskun.jpg" 
    },
    { 
      id: 2, 
      name: "Tahu Walik & Pangsit Goreng", 
      price: "12.000", 
      desc: "Camilan renyah isi ayam pilihan, cocok dinikmati dengan sambal pedas.",
      image: "/tahu.jpg" 
    },
    { 
      id: 3, 
      name: "Pancake Durian Mini (2 Pcs)", 
      price: "30.000", 
      desc: "Durian kupas premium dengan krim lembut dan kulit pancake yang tipis.",
      image: "/pancakeduren.jpg"
    }
  ];

  const handleOrder = (menuName: string) => {
    const text = `Halo Dapur Mama Uwais, saya mau pesan: *${menuName}*. Mohon info ketersediaannya ya!`;
    window.open(`https://wa.me/${phoneWA}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="p-3 bg-white shadow-md flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Logo Kotak Sesuai Asli */}
<div className="relative w-14 h-14 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
  <Image 
    src="/logo.jpg" 
    alt="Logo Dapur Mama Uwais" 
    fill 
    className="object-contain bg-black" // object-contain agar logo tidak terdistorsi
  />
</div>
          <h1 className="text-xl font-black tracking-tighter text-slate-900">DAPUR MAMA UWAIS</h1>
        </div>
        <a href={`https://wa.me/${phoneWA}`} target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm transition-all font-bold shadow-sm">
          <MessageCircle size={18} /> Chat Admin
        </a>
      </nav>

      {/* HERO SECTION - KITA KUNCI WARNA MAROONNYA */}
      <section className="py-24 px-6 text-center bg-[#800000] text-white relative">
        <div className="relative z-10">
          <div className="flex justify-center gap-1 mb-6 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <span className="bg-white/20 text-yellow-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-white/20">
            Authentic Sulawesi
          </span>
          <h2 className="text-5xl md:text-7xl font-black mt-8 mb-6 leading-tight tracking-tighter">
            Asli, Gurih, <span className="text-yellow-400">Nagih!</span>
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">
            Menghadirkan kelezatan masakan khas Sulawesi dengan resep rahasia Dapur Mama Uwais langsung ke meja makan Anda.
          </p>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#FFD700] text-[#800000] px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            LIHAT MENU
          </button>
        </div>
      </section>

      {/* MENU GRID */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-20 text-center">
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">Menu Andalan Kami</h3>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {menus.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-b-[10px] hover:border-b-[#800000]">
              <div className="relative h-80 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-[#800000] text-white font-black px-5 py-2 rounded-2xl shadow-xl border border-yellow-400/50 text-xl">
                  Rp {item.price}
                </div>
              </div>
              
              <div className="p-10 text-center">
                <h4 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-[#800000] transition-colors">{item.name}</h4>
                <p className="text-slate-500 text-base mb-10 leading-relaxed italic">"{item.desc}"</p>
                
                <button 
                  onClick={() => handleOrder(item.name)}
                  className="w-full bg-slate-900 text-white py-5 rounded-3xl hover:bg-[#800000] transition-all shadow-md flex items-center justify-center gap-3 font-black text-lg group/btn"
                >
                  <ShoppingCart size={22} className="group-hover/btn:animate-bounce text-yellow-400" />
                  PESAN SEKARANG
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <div className="relative w-28 h-28 mb-8 mx-auto md:mx-0 border-2 border-[#FFD700] rounded-2xl overflow-hidden shadow-2xl bg-black">
   <Image 
     src="/logo.jpg" 
     alt="Logo Footer" 
     fill 
     className="object-contain p-1" 
   />
</div>
            <h5 className="text-3xl font-black mb-4 text-[#FFD700] tracking-tighter uppercase">DAPUR MAMA UWAIS</h5>
            <p className="text-gray-400 text-lg max-w-sm italic leading-relaxed">"Rasa bintang lima, harga kaki lima. Asli dari dapur kami untuk keluarga Anda."</p>
          </div>
          
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <a href={`https://wa.me/${phoneWA}`} target="_blank" className="flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-8 rounded-[2rem] hover:border-green-500 transition-all group">
              <div className="bg-green-500 p-4 rounded-2xl text-white group-hover:rotate-12 transition-transform">
                <MessageCircle size={32} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp Admin</p>
                <p className="text-2xl font-black text-white leading-none tracking-tight">0823 4700 1500</p>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
