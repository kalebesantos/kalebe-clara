import React, { useState } from 'react';
import { type CardData } from '../data/cards';
import CardContent from './CardContent';
import { Mail } from 'lucide-react';

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getColorClasses = () => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 border-blue-300 hover:bg-blue-200',
      purple: 'bg-purple-100 border-purple-300 hover:bg-purple-200',
      red: 'bg-red-100 border-red-300 hover:bg-red-200',
      green: 'bg-green-100 border-green-300 hover:bg-green-200',
      yellow: 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200',
      orange: 'bg-orange-100 border-orange-300 hover:bg-orange-200',
      teal: 'bg-teal-100 border-teal-300 hover:bg-teal-200',
      sky: 'bg-sky-100 border-sky-300 hover:bg-sky-200',
    };

    return colorMap[card.color] || 'bg-gray-100 border-gray-300 hover:bg-gray-200';
  };

  return (
    <>
      <div 
        className={`relative cursor-pointer transition-all duration-300 ease-in-out transform 
                   ${hasOpened ? 'opacity-80' : 'hover:scale-105'} 
                   rounded-lg overflow-hidden shadow-md border ${getColorClasses()}`}
        onClick={handleOpen}
      >
        <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center h-full">
          <Mail className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mb-3 sm:mb-4 text-${card.color}-500`} />
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">{card.title}</h3>
          <p className="text-sm text-center text-gray-600 italic">{card.frontMessage}</p>
          <div className="mt-3 sm:mt-4 text-xs text-center opacity-70">
            {hasOpened ? 'Clique para abrir novamente' : 'Clique para abrir'}
          </div>
        </div>
      </div>

      {isOpen && (
        <CardContent card={card} onClose={handleClose} />
      )}
    </>
  );
};

export default Card;