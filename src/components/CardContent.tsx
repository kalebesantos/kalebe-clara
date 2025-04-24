import React, { useEffect, useRef } from 'react';
import { type CardData } from '../data/cards';
import { X, Heart, Bookmark, Share2 } from 'lucide-react';

interface CardContentProps {
  card: CardData;
  onClose: () => void;
}

const CardContent: React.FC<CardContentProps> = ({ card, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
      <div 
        ref={modalRef}
        className={`w-full max-w-2xl bg-gradient-to-b ${card.bgGradient} rounded-lg shadow-2xl overflow-hidden 
                  transform transition-all duration-500 ease-out animate-appear`}
      >
        <div className="relative p-4 sm:p-6 md:p-8">
          <button 
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-${card.color}-700`}>
            {card.title}
          </h2>

          <div className="mt-3 sm:mt-4 bg-white bg-opacity-70 rounded-lg p-4 sm:p-5 md:p-8 shadow-inner border border-gray-200">
            <div className="prose max-w-none whitespace-pre-line">
              {card.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="text-right text-base sm:text-lg italic mt-3 sm:mt-4 text-gray-700">
            ❤️
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 flex justify-center space-x-4 sm:space-x-6">
            <button className="flex items-center text-pink-600 hover:text-pink-800 transition-colors">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-xs sm:text-sm">Favorito</span>
            </button>
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-xs sm:text-sm">Salvar</span>
            </button>
            <button className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-xs sm:text-sm">Compartilhar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;