import React, { useState } from 'react';
import { Heart, ChevronRight, Camera, MessageCircleHeart, Flower } from 'lucide-react';
import Gallery from './components/Gallery';
import Declaration from './components/Declaration';
import Flowers from './components/Flowers';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-rose-600 flex items-center gap-2 text-xl font-semibold"
            >
              <Heart className="w-6 h-6 fill-rose-600" /> Kalebe & Clara
            </button>
            <div className="flex gap-4 sm:gap-6">
              <button 
                onClick={() => setActiveSection('gallery')}
                className={`flex items-center gap-1 ${activeSection === 'gallery' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <Camera className="w-4 h-4" /> Galeria
              </button>
              <button 
                onClick={() => setActiveSection('flowers')}
                className={`flex items-center gap-1 ${activeSection === 'flowers' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <Flower className="w-4 h-4" /> Flores
              </button>
              <button 
                onClick={() => setActiveSection('declaration')}
                className={`flex items-center gap-1 ${activeSection === 'declaration' ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600 transition-colors text-sm sm:text-base`}
              >
                <MessageCircleHeart className="w-4 h-4" /> Declaração
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 sm:pt-20">
        {activeSection === 'home' && (
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
                Kalebe & Clara
              </h1>
              <p className="text-2xl sm:text-3xl text-rose-600 font-light mb-4">Nossa História de Amor</p>
              <p className="text-lg sm:text-xl text-gray-600 mb-2">Namorando desde</p>
              <p className="text-2xl sm:text-3xl font-bold text-rose-600 mb-6 sm:mb-8">05/11/2024</p>
              
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-xl">
                <img 
                  src="../public/photos/couple/01.jpeg"
                  alt="Kalebe e Clara"
                  className="w-full h-[300px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6 sm:p-8">
                  <p className="text-white text-lg sm:text-xl font-light">Nosso amor cresce a cada dia</p>
                </div>
              </div>

              <button
                onClick={() => setActiveSection('gallery')}
                className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-rose-700 transition-colors text-sm sm:text-base"
              >
                Ver nossa galeria <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'gallery' && <Gallery />}
        {activeSection === 'flowers' && <Flowers />}
        {activeSection === 'declaration' && <Declaration />}
      </main>
    </div>
  );
}

export default App;