import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-4 sm:py-6 md:py-8">
      <div className="flex items-center justify-center mb-2 sm:mb-3">
        <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-rose-500 animate-pulse mr-2" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600 tracking-tight">
          Abra Quando...
        </h1>
        <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-rose-500 animate-pulse ml-2" />
      </div>
      <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-purple-800 max-w-2xl mx-auto px-4">
        Mensagens especiais para momentos especiais. 
        Clique em um envelope para abrir apenas quando você estiver sentindo 
        o que está descrito.
      </p>
    </header>
  );
};

export default Header;