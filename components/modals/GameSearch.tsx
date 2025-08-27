"use client"

import { X, Search, ChevronDown, Play, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSidebar } from "@/context/SidebarProvider";
import CasinoCard from '@/components/ui/cards/CasinoCard';
import { Button } from '@/components/ui';
import { useModalScrollPrevention } from '@/hooks/useModalScrollPrevention';

interface GameSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const gameCategories = [
  { id: 'hash', label: 'Hash Games', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/539e29d3dd35d4b4f7551e751c116f40a102eaa5?width=52' },
  { id: 'slots', label: 'Slots', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/056061de0a658f58bc9d8b0d5fa49ebd2eb7243d?width=39' },
  { id: 'casino', label: 'Live Casino', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/7245cb568c2fb51c6094f50e99f10760ed43d47c?width=52' },
  { id: 'futures', label: 'Futures', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/ab3b5fe5364a6a5cf19370622e52a65297b9f2fd?width=48' },
  { id: 'crypto', label: 'Crypto Games', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/da20222e69eb632beb025b819d563282485ae610?width=52' },
  { id: 'sport', label: 'Sport', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/72146436b2617db347f4558bef4da1d7dc2be29e?width=52' },
  { id: 'table', label: 'Table Games', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/f3965682be44f8f5716cdfd793a2929763c6f824?width=48' },
];

const gameImages = [
  'https://api.builder.io/api/v1/image/assets/TEMP/a79278fafd9b48c78c8388123f81620317fe8d54?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/8b925652b70e2da887252313faf53f95f3a960e8?width=230',
  'https://api.builder.io/api/v1/image/assets/TEMP/e791e1fa9f325156debd5ac895252c60b3b371c2?width=230',
];

// Mock game data for different categories
const gamesByCategory = {
  hash: [
    { id: 1, title: 'Mahjong Ways', provider: 'PG Soft', image: gameImages[0], badge: 'HOT' },
    { id: 2, title: 'Black Wolf 2', provider: 'CFG Gaming', image: gameImages[1], badge: 'NEW' },
    { id: 3, title: 'Banker Bull Bull', provider: 'CFG Gaming', image: gameImages[2], badge: 'HOT' },
  ],
  slots: [
    { id: 4, title: 'Fortune Tiger', provider: 'PG Soft', image: gameImages[0], badge: 'NEW' },
    { id: 5, title: 'Gates of Olympus', provider: 'Pragmatic', image: gameImages[1], badge: 'HOT' },
    { id: 6, title: 'Sweet Bonanza', provider: 'Pragmatic', image: gameImages[2], badge: 'NEW' },
  ],
  casino: [
    { id: 7, title: 'Live Blackjack', provider: 'Evolution', image: gameImages[0], badge: 'NEW' },
    { id: 8, title: 'Live Roulette', provider: 'Evolution', image: gameImages[1], badge: 'HOT' },
    { id: 9, title: 'Live Baccarat', provider: 'Evolution', image: gameImages[2], badge: 'NEW' },
  ],
  futures: [
    { id: 10, title: 'Crypto Future 1', provider: 'Future Games', image: gameImages[0], badge: 'HOT' },
    { id: 11, title: 'Crypto Future 2', provider: 'Future Games', image: gameImages[1], badge: 'NEW' },
    { id: 12, title: 'Crypto Future 3', provider: 'Future Games', image: gameImages[2], badge: 'HOT' },
  ],
  crypto: [
    { id: 13, title: 'Bitcoin Miner', provider: 'Crypto Games', image: gameImages[0], badge: 'NEW' },
    { id: 14, title: 'Ethereum Rush', provider: 'Crypto Games', image: gameImages[1], badge: 'HOT' },
    { id: 15, title: 'Dogecoin Rally', provider: 'Crypto Games', image: gameImages[2], badge: 'NEW' },
  ],
  sport: [
    { id: 16, title: 'Football Manager', provider: 'Sports Co', image: gameImages[0], badge: 'HOT' },
    { id: 17, title: 'Basketball Pro', provider: 'Sports Co', image: gameImages[1], badge: 'NEW' },
    { id: 18, title: 'Tennis Ace', provider: 'Sports Co', image: gameImages[2], badge: 'HOT' },
  ],
  table: [
    { id: 19, title: 'Poker Master', provider: 'Table Games', image: gameImages[0], badge: 'NEW' },
    { id: 20, title: 'Blackjack Pro', provider: 'Table Games', image: gameImages[1], badge: 'HOT' },
    { id: 21, title: 'Roulette Elite', provider: 'Table Games', image: gameImages[2], badge: 'NEW' },
  ],
};

const gameProviders = [
  { id: 'all', label: 'All Providers' },
  { id: 'pg-soft', label: 'PG Soft' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'pragmatic', label: 'Pragmatic Play' },
  { id: 'cfg-gaming', label: 'CFG Gaming' },
  { id: 'future-games', label: 'Future Games' },
  { id: 'crypto-games', label: 'Crypto Games' },
  { id: 'sports-co', label: 'Sports Co' },
  { id: 'table-games', label: 'Table Games' },
];

const gameTypes = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New' },
  { id: 'popular', label: 'Popular' },
  { id: 'featured', label: 'Featured' },
  { id: 'hot', label: 'Hot' },
  { id: 'exclusive', label: 'Exclusive' },
];

export default function GameSearchModal({ isOpen, onClose }: GameSearchModalProps) {
  const { isCollapsed } = useSidebar();
  const [sidebarOffset, setSidebarOffset] = useState(0);

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const updateOffset = () => {
      const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
      if (sidebar && isCollapsed) {
        setSidebarOffset(sidebar.clientWidth || 0);
      } else {
        setSidebarOffset(0);
      }
    };
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [isOpen, isCollapsed]);
  const [activeCategory, setActiveCategory] = useState('hash');
  const [selectedProvider, setSelectedProvider] = useState(gameProviders[0]);
  const [selectedType, setSelectedType] = useState(gameTypes[0]);
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const providerRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

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

  const currentGames = gamesByCategory[activeCategory as keyof typeof gamesByCategory] || [];

  return (
    <div className="fixed inset-0 z-50 flex p-2 sm:p-4 justify-center items-center bg-black/80" >
      <div className="w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto modal-content-scroll" >
        <div className="flex flex-col items-start w-full mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 w-full px-6 py-4 rounded-t-[14px] bg-gradient-to-b from-[rgba(17,25,35,0.54)] to-[#002554] border-t border-white/16 backdrop-blur-[32px]">
            <h2 className="flex-1 text-white font-montserrat text-lg font-bold">
              Global Game Search
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
                     placeholder="A search requires at least 3 letters."
                     className="flex-1 bg-transparent text-gray-300 text-sm font-medium font-montserrat placeholder:text-gray-400 border-none outline-none min-w-0"
                   />
                 </div>

                {/* Dropdowns */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  {/* Game Provider Dropdown */}
                  <div ref={providerRef} className="relative">
                    <button
                      onClick={() => setIsProviderOpen(!isProviderOpen)}
                      className="flex items-center justify-between w-full sm:w-[200px] h-12 px-4 rounded-lg bg-white/8 hover:bg-white/12 transition-colors"
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
                      className="flex items-center justify-between w-full sm:w-[200px] h-12 px-4 rounded-lg bg-white/8 hover:bg-white/12 transition-colors"
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

            {/* Game Categories - Now with background changes when selected */}
            <div className="flex flex-wrap items-center gap-1 overflow-x-auto pb-2">
              {gameCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                                     className={`flex h-9 items-center gap-2 px-2 sm:px-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                     activeCategory === category.id
                       ? 'bg-blue-500 text-white shadow-lg'
                       : 'text-gray-300 hover:bg-white/8 hover:text-white'
                   }`}
                >
                  <div className="flex h-[26px] w-[26px] items-center justify-center flex-shrink-0">
                    <img
                      src={category.icon}
                      alt={category.label}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold font-montserrat whitespace-nowrap hidden sm:inline">
                    {category.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Game Grid using CasinoCard component */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 w-full">
              {/* Repeat current games to fill the grid */}
              {Array.from({ length: 14 }, (_, index) => {
                const game = currentGames[index % currentGames.length];
                return (
                  <div key={index} className="group relative">
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
