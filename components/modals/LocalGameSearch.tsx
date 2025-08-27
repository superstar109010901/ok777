"use client"

import { X, Search, ChevronDown, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import CasinoCard from '@/components/ui/cards/CasinoCard';
import { Button } from '@/components/ui';
import { useModalScrollPrevention } from '@/hooks/useModalScrollPrevention';

interface LocalGameSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string; // The specific category to search within
  categoryLabel: string; // Display name for the category
}

const gameImages = [
  'https://api.builder.io/api/v1/image/assets/TEMP/a79278fafd9b48c78c8388123f81620317fe8d54?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/8b925652b70e2da887252313faf53f95f3a960e8?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/e791e1fa9f325156debd5ac895252c60b3b371c2?width=230',
];

// Mock game data for different categories
const gamesByCategory = {
  slots: [
    { id: 1, title: 'Mahjong Ways', provider: 'PG Soft', image: gameImages[0], badge: 'HOT' },
    { id: 2, title: 'Fortune Tiger', provider: 'PG Soft', image: gameImages[1], badge: 'NEW' },
    { id: 3, title: 'Gates of Olympus', provider: 'Pragmatic', image: gameImages[2], badge: 'HOT' },
    { id: 4, title: 'Sweet Bonanza', provider: 'Pragmatic', image: gameImages[0], badge: 'NEW' },
    { id: 5, title: 'Starlight Princess', provider: 'Pragmatic', image: gameImages[1], badge: 'HOT' },
    { id: 6, title: 'Wild West Gold', provider: 'Pragmatic', image: gameImages[2], badge: 'NEW' },
  ],
  casino: [
    { id: 7, title: 'Live Blackjack', provider: 'Evolution', image: gameImages[0], badge: 'NEW' },
    { id: 8, title: 'Live Roulette', provider: 'Evolution', image: gameImages[1], badge: 'HOT' },
    { id: 9, title: 'Live Baccarat', provider: 'Evolution', image: gameImages[2], badge: 'NEW' },
    { id: 10, title: 'Live Poker', provider: 'Evolution', image: gameImages[0], badge: 'HOT' },
  ],
  hash: [
    { id: 11, title: 'Hash Banker Player', provider: '777 Gaming', image: gameImages[0], badge: 'HOT' },
    { id: 12, title: 'Hash Odd Even', provider: '777 Gaming', image: gameImages[1], badge: 'NEW' },
    { id: 13, title: 'Hash Big Small', provider: '777 Gaming', image: gameImages[2], badge: 'HOT' },
  ],
  sport: [
    { id: 14, title: 'Football Manager', provider: 'Sports Co', image: gameImages[0], badge: 'HOT' },
    { id: 15, title: 'Basketball Pro', provider: 'Sports Co', image: gameImages[1], badge: 'NEW' },
    { id: 16, title: 'Tennis Ace', provider: 'Sports Co', image: gameImages[2], badge: 'HOT' },
  ],
};

const gameProviders = [
  { id: 'all', label: 'All Providers' },
  { id: 'pg-soft', label: 'PG Soft' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'pragmatic', label: 'Pragmatic Play' },
  { id: 'cfg-gaming', label: 'CFG Gaming' },
  { id: '777-gaming', label: '777 Gaming' },
  { id: 'sports-co', label: 'Sports Co' },
];

const gameTypes = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New' },
  { id: 'popular', label: 'Popular' },
  { id: 'hot', label: 'Hot' },
  { id: 'featured', label: 'Featured' },
];

export default function LocalGameSearchModal({ 
  isOpen, 
  onClose, 
  category, 
  categoryLabel 
}: LocalGameSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(gameProviders[0]);
  const [selectedType, setSelectedType] = useState(gameTypes[0]);
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const providerRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (providerRef.current && !providerRef.current.contains(event.target as Node)) {
        setIsProviderOpen(false);
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  const currentGames = gamesByCategory[category as keyof typeof gamesByCategory] || [];
  
  // Filter games based on search term
  const filteredGames = currentGames.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex p-2 sm:p-4 justify-center items-center bg-black/80">
      <div className="w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto modal-content-scroll">
        <div className="flex flex-col items-start w-full mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 w-full px-6 py-4 rounded-t-[14px] bg-gradient-to-b from-[rgba(17,25,35,0.54)] to-[#002554] border-t border-white/16 backdrop-blur-[32px]">
            <h2 className="flex-1 text-white font-montserrat text-lg font-bold">
              Search in {categoryLabel}
            </h2>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/4 bg-white/4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] hover:bg-white/8 transition-colors"
            >
              <X className="h-4 w-4 text-[white]" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 p-4 w-full rounded-b-[14px] bg-[rgba(17,25,35,0.54)] backdrop-blur-[32px]">
            {/* Search and filters */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row items-start gap-3 w-full">
                {/* Search Input */}
                <div className="flex items-center gap-2 flex-1 w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent">
                  <Search className="h-6 w-6 text-white stroke-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Search ${categoryLabel.toLowerCase()}...`}
                    className="flex-1 bg-transparent text-gray-300 text-sm font-medium font-montserrat placeholder:text-gray-400 border-none outline-none min-w-0"
                  />
                </div>

                {/* Dropdowns */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  {/* Game Provider Dropdown */}
                  <div ref={providerRef} className="relative">
                    <button
                      onClick={() => setIsProviderOpen(!isProviderOpen)}
                      className="flex items-center justify-between w-full sm:w-[180px] h-12 px-4 rounded-lg bg-white/8 hover:bg-white/12 transition-colors"
                    >
                      <span className="text-gray-300 text-sm font-bold font-montserrat hover:text-white transition-colors">
                        {selectedProvider.label}
                      </span>
                      <ChevronDown className={`h-6 w-6 text-white stroke-gray-400 transition-transform ${
                        isProviderOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {isProviderOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[rgba(17,25,35,0.95)] border border-white/8 rounded-lg backdrop-blur-[32px] shadow-lg z-50">
                        {gameProviders.map((provider) => (
                          <button
                            key={provider.id}
                            onClick={() => {
                              setSelectedProvider(provider);
                              setIsProviderOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-white/8 transition-colors ${
                              selectedProvider.id === provider.id ? 'bg-blue-500/20' : ''
                            }`}
                          >
                            <span className="text-gray-300 text-sm font-medium font-montserrat">
                              {provider.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Game Type Dropdown */}
                  <div ref={typeRef} className="relative">
                    <button
                      onClick={() => setIsTypeOpen(!isTypeOpen)}
                      className="flex items-center justify-between w-full sm:w-[150px] h-12 px-4 rounded-lg bg-white/8 hover:bg-white/12 transition-colors"
                    >
                      <span className="text-gray-300 text-sm font-bold font-montserrat hover:text-white transition-colors">
                        {selectedType.label}
                      </span>
                      <ChevronDown className={`h-6 w-6 text-white stroke-gray-400 transition-transform ${
                        isTypeOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {isTypeOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[rgba(17,25,35,0.95)] border border-white/8 rounded-lg backdrop-blur-[32px] shadow-lg z-50">
                        {gameTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => {
                              setSelectedType(type);
                              setIsTypeOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-white/8 transition-colors ${
                              selectedType.id === type.id ? 'bg-blue-500/20' : ''
                            }`}
                          >
                            <span className="text-gray-300 text-sm font-medium font-montserrat">
                              {type.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">
                {filteredGames.length} games found in {categoryLabel}
              </p>
            </div>

            {/* Game Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 w-full">
              {filteredGames.length > 0 ? (
                filteredGames.map((game, index) => (
                  <div key={game.id} className="group relative">
                    <CasinoCard
                      badge={game.badge}
                      image={game.image}
                    />
                    
                    {/* Hover overlay with play button */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[8px]">
                      <Button variant="red" className="w-12 h-12 p-0">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-400 text-lg">No games found</p>
                  <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

