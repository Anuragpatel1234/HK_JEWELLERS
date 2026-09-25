import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { CATEGORIES, ALL_CUSTOM_DESIGNS } from '../data/jewelleryData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularTags = ['Necklaces', 'Earrings', 'Polki Choker', 'Kadas', 'Lord Ganesha', 'Temple Gold', 'Bridal', 'Payal', 'Rings'];

  const filteredCategories = query.trim() === ''
    ? []
    : CATEGORIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.tagline.toLowerCase().includes(query.toLowerCase()));

  const filteredCustom = query.trim() === ''
    ? []
    : ALL_CUSTOM_DESIGNS.filter(c =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.craft.toLowerCase().includes(query.toLowerCase()) ||
        c.gemstone.toLowerCase().includes(query.toLowerCase()) ||
        (c.categoryLabel && c.categoryLabel.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <Search className="w-5 h-5 text-[#B88A3B]" />
          <input
            type="text"
            placeholder="Search jewellery, collections, bridal adornments..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-[#2A1612] placeholder-[#2A1612]/50 text-sm sm:text-base focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            aria-label="Close Search"
            className="p-1 text-[#2A1612]/70 hover:text-[#4A0712]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-4">
          {query.trim() === '' ? (
            <div>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#8F6623] uppercase block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-[#FAE7D8] hover:bg-[#4A0712] hover:text-[#FFF7ED] text-[#2A1612] text-xs rounded-full border border-[#B88A3B]/30 transition-colors font-sans"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#8F6623] uppercase block mb-3">
                Matching Results
              </span>
              {filteredCategories.length === 0 && filteredCustom.length === 0 ? (
                <p className="text-sm text-[#2A1612]/60 italic">No pieces found matching "{query}"</p>
              ) : (
                <div className="space-y-2">
                  {filteredCategories.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        onSelectItem({
                          title: cat.name,
                          subtitle: 'Collection',
                          tagline: cat.tagline,
                          description: cat.description,
                          image: cat.image,
                        });
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FAE7D8] cursor-pointer border border-transparent hover:border-[#B88A3B]/30 transition-all"
                    >
                      <img src={cat.image} alt={cat.name} className="w-12 h-12 object-cover rounded bg-[#1E0E0B]" />
                      <div>
                        <div className="font-serif text-sm font-semibold text-[#2A1612]">{cat.name}</div>
                        <div className="text-xs text-[#8F6623]">{cat.tagline}</div>
                      </div>
                    </div>
                  ))}
                  {filteredCustom.map(item => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectItem({
                          title: item.title,
                          subtitle: item.craft,
                          tagline: item.gemstone,
                          description: `Handcrafted in ${item.goldPurity} featuring ${item.gemstone}. Traditional ${item.craft} heritage.`,
                          image: item.image,
                          goldPurity: item.goldPurity,
                        });
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FAE7D8] cursor-pointer border border-transparent hover:border-[#B88A3B]/30 transition-all"
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded bg-[#1E0E0B]" />
                      <div>
                        <div className="font-serif text-sm font-semibold text-[#2A1612]">{item.title}</div>
                        <div className="text-xs text-[#8F6623]">{item.craft} • {item.goldPurity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
