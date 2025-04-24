import React, { useState } from 'react';
import { cards } from '../data/cards';
import Card from './Card';
import { Search } from 'lucide-react';

const CardCollection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCards = searchTerm 
    ? cards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.frontMessage.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cards;

  return (
    <section className="mt-4 sm:mt-6 md:mt-8">
      <div className="mb-6 sm:mb-8 max-w-md mx-auto px-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar mensagens..."
            className="pl-10 pr-4 py-2.5 sm:py-3 w-full rounded-full border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-sm text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredCards.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Nenhuma mensagem encontrada para "{searchTerm}".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-3 sm:px-4">
          {filteredCards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CardCollection;