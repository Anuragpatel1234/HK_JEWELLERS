import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { HeroSection } from './components/HeroSection';
import { CategoryCarousel } from './components/CategoryCarousel';
import { StorySection } from './components/StorySection';
import { CustomisationSection } from './components/CustomisationSection';
import { DivineIdolsBanner } from './components/DivineIdolsBanner';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { MobileDrawer } from './components/MobileDrawer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuickViewModal } from './components/QuickViewModal';
import type { ModalProductDetails } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import type { CartItem } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AccountDrawer } from './components/AccountDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CustomisationStudioModal } from './components/CustomisationStudioModal';
import { RitualsModal } from './components/RitualsModal';
import { ShopByTypeModal } from './components/ShopByTypeModal';
import { InfoModal } from './components/InfoModal';
import { CustomDesignsPage } from './components/CustomDesignsPage';
import { CATEGORIES, ALL_CUSTOM_DESIGNS } from './data/jewelleryData';
import type { CategoryItem, StoryItem, CustomJewelleryItem } from './data/jewelleryData';

/** Hook: IntersectionObserver-based scroll reveal */
function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const initObserver = useCallback(() => {
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all scroll-reveal and scroll-reveal-stagger elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger').forEach((el) => {
      observerRef.current?.observe(el);
    });
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(initObserver, 100);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [initObserver]);
}

export const App: React.FC = () => {
  // Page view routing state
  const [currentPage, setCurrentPage] = useState<'home' | 'custom-designs'>('home');
  const [studioInitialDesign, setStudioInitialDesign] = useState<CustomJewelleryItem | null>(null);

  // Navigation & Drawer States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCustomStudioOpen, setIsCustomStudioOpen] = useState(false);
  const [isRitualsOpen, setIsRitualsOpen] = useState(false);
  const [isShopByTypeOpen, setIsShopByTypeOpen] = useState(false);
  const [infoTopic, setInfoTopic] = useState<string | null>(null);

  const [selectedProduct, setSelectedProduct] = useState<ModalProductDetails | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#custom-designs') {
        setCurrentPage('custom-designs');
      } else {
        setCurrentPage('home');
      }
    };
    if (window.location.hash === '#custom-designs') {
      setCurrentPage('custom-designs');
    }
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  const navigateTo = (page: 'home' | 'custom-designs') => {
    setCurrentPage(page);
    if (page === 'custom-designs') {
      window.location.hash = '#custom-designs';
    } else {
      if (window.location.hash === '#custom-designs') {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // E-commerce state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      title: 'The Nizam Polki Choker',
      subtitle: 'Kundan Meenakari',
      tagline: 'Uncut Diamonds & Colombian Emeralds',
      description: 'Masterfully set in 22K hallmarked gold with certified uncut diamonds and natural emerald droplets.',
      image: '/assets/customisation/custom_1_choker.jpg',
      goldPurity: '22K Hallmarked Gold',
      quantity: 1,
    }
  ]);

  const [wishlistTitles, setWishlistTitles] = useState<string[]>([
    'NECKLACES',
    'Gaja Makara Antique Kadas'
  ]);

  // Unified catalog for wishlist lookup
  const allKnownProducts: ModalProductDetails[] = [
    ...CATEGORIES.map(c => ({
      title: c.name,
      subtitle: 'Imperial Collection',
      tagline: c.tagline,
      description: c.description,
      image: c.image,
      goldPurity: '22K Hallmarked Gold',
    })),
    ...ALL_CUSTOM_DESIGNS.map(c => ({
      title: c.title,
      subtitle: `${c.craft} · ${c.categoryLabel || 'Bespoke'}`,
      tagline: c.gemstone,
      description: c.description || `Bespoke jewellery customisation sculpted in ${c.goldPurity} featuring ${c.gemstone}. Traditional karigari handcrafted over ${c.karigariHours || 250} man-hours.`,
      image: c.image,
      goldPurity: c.goldPurity,
      price: c.priceEst,
    })),
    {
      title: 'The Nizam Polki Choker',
      subtitle: 'Kundan Meenakari',
      tagline: 'Uncut Diamonds & Colombian Emeralds',
      description: 'Masterfully set in 22K hallmarked gold with certified uncut diamonds and natural emerald droplets.',
      image: '/assets/customisation/custom_1_choker.jpg',
      goldPurity: '22K Hallmarked Gold',
    },
    {
      title: 'Lord Ganesha Divine Idol',
      subtitle: 'Divine Idols Sacred Collection',
      tagline: 'Sacred idols, crafted to fill your space with love, devotion & timeless blessings',
      description: 'Sculpted in solid 22K hallmarked gold with intricate floral repoussé engraving and radiant lotus pedestal. Bestows prosperity, peace, and spiritual abundance.',
      image: '/assets/divine/ganesha_idol.png',
      goldPurity: '22K Solid Gold with 24K Leaf Finish',
    },
  ];

  const wishlistProducts = wishlistTitles.map(title => {
    const match = allKnownProducts.find(p => p.title.toLowerCase() === title.toLowerCase());
    return match || {
      title,
      subtitle: 'Heirloom Piece',
      description: 'Handcrafted in 22K certified hallmarked gold with traditional karigari.',
      image: '/assets/hero/herojewellery_cutout.png',
      goldPurity: '22K Hallmarked Gold',
    };
  });

  // Initialize scroll reveal animations
  useScrollReveal();

  // Handlers for interactive previews
  const handleSelectCategory = (cat: CategoryItem) => {
    setSelectedProduct({
      title: cat.name,
      subtitle: 'Imperial Collection',
      tagline: cat.tagline,
      description: cat.description,
      image: cat.image,
      goldPurity: '22K Hallmarked Gold',
    });
  };

  const handleSelectStory = (story: StoryItem) => {
    setSelectedProduct({
      title: story.englishSub,
      subtitle: story.hindiTitle,
      tagline: story.tagline,
      description: story.description,
      image: story.image,
      goldPurity: 'Indian Heritage Archival Piece',
    });
  };

  const handleSelectCustomDesign = (item: CustomJewelleryItem) => {
    setSelectedProduct({
      title: item.title,
      subtitle: item.craft,
      tagline: item.gemstone,
      description: `Bespoke jewellery customisation sculpted in ${item.goldPurity} featuring ${item.gemstone}. Traditional karigari handcrafted over 300 man-hours.`,
      image: item.image,
      goldPurity: item.goldPurity,
    });
  };

  const handleExploreHero = () => {
    setSelectedProduct({
      title: 'A Legacy You Can Wear',
      subtitle: 'Royal Heritage Signature Suite',
      tagline: 'Exquisite craftsmanship and precious stones create a timeless allure of heritage & expression',
      description: 'The crowning centerpiece of HK Jewellers. Featuring multi-layered 22K yellow gold harams, cabochon Zambian emerald strands, handcrafted jhumkis, and repoussé kadas.',
      image: '/assets/hero/herojewellery_cutout.png',
      goldPurity: '22K Antique Yellow Gold',
    });
  };

  const handleExploreDivine = () => {
    setSelectedProduct({
      title: 'Lord Ganesha Divine Idol',
      subtitle: 'Divine Idols Sacred Collection',
      tagline: 'Sacred idols, crafted to fill your space with love, devotion & timeless blessings',
      description: 'Sculpted in solid 22K hallmarked gold with intricate floral repoussé engraving and radiant lotus pedestal. Bestows prosperity, peace, and spiritual abundance.',
      image: '/assets/divine/ganesha_idol.png',
      goldPurity: '22K Solid Gold with 24K Leaf Finish',
    });
  };

  // Cart operations
  const handleAddToCart = (product: ModalProductDetails) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.title === product.title);
      if (existing) {
        return prev.map(i => i.title === product.title ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (title: string) => {
    setCartItems(prev => prev.filter(i => i.title !== title));
  };

  const handleUpdateQuantity = (title: string, delta: number) => {
    setCartItems(prev => prev.map(i => {
      if (i.title === title) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? { ...i, quantity: newQty } : null;
      }
      return i;
    }).filter(Boolean) as CartItem[]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: ModalProductDetails) => {
    setWishlistTitles(prev => {
      if (prev.includes(product.title)) {
        return prev.filter(t => t !== product.title);
      } else {
        return [...prev, product.title];
      }
    });
  };

  const handleMoveWishlistToBag = (item: ModalProductDetails) => {
    handleAddToCart(item);
    setWishlistTitles(prev => prev.filter(t => t.toLowerCase() !== item.title.toLowerCase()));
  };

  const handleMoveAllWishlistToBag = () => {
    wishlistProducts.forEach(product => {
      setCartItems(prev => {
        const existing = prev.find(i => i.title === product.title);
        if (existing) {
          return prev.map(i => i.title === product.title ? { ...i, quantity: i.quantity + 1 } : i);
        } else {
          return [...prev, { ...product, quantity: 1 }];
        }
      });
    });
    setWishlistTitles([]);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  const handleRemoveWishlist = (title: string) => {
    setWishlistTitles(prev => prev.filter(t => t.toLowerCase() !== title.toLowerCase()));
  };

  // Navigation action dispatcher
  const handleSelectNavItem = (id: string) => {
    if (id === 'customisation') {
      navigateTo('custom-designs');
    } else if (id === 'rituals') {
      setIsRitualsOpen(true);
    } else if (id === 'for-you' || id === 'types') {
      setIsShopByTypeOpen(true);
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        if (window.location.hash === '#custom-designs') {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        }
        setTimeout(() => {
          const match = document.getElementById(id);
          if (match) {
            match.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        const match = document.getElementById(id);
        if (match) {
          match.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAE7D8] text-[#2A1612] flex flex-col selection:bg-[#4A0712] selection:text-[#FFF7ED] pb-16 md:pb-0">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Luxury Sticky Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onNavigateHome={() => navigateTo('home')}
        cartCount={cartTotalCount}
        wishlistCount={wishlistTitles.length}
      />

      {/* 3. Category Horizontal Navigation */}
      <CategoryNav onSelectCategory={handleSelectNavItem} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full">
        {currentPage === 'custom-designs' ? (
          <CustomDesignsPage
            onBackToHome={() => navigateTo('home')}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onOpenCustomStudio={(design) => {
              setStudioInitialDesign(design || null);
              setIsCustomStudioOpen(true);
            }}
            wishlistTitles={wishlistTitles}
          />
        ) : (
          <>
            {/* 4. Hero Section */}
            <div id="jewellery">
              <HeroSection onExploreClick={handleExploreHero} />
            </div>

            {/* 5. Collection Intro Section & Category Carousel */}
            <div id="collections" className="scroll-reveal">
              <CategoryCarousel onSelectCategory={handleSelectCategory} />
            </div>

            {/* 6. Heritage Story Section */}
            <div id="story" className="scroll-reveal">
              <StorySection onSelectStory={handleSelectStory} />
            </div>

            {/* 7. Jewellery Customisation Section */}
            <div id="customisation" className="scroll-reveal">
              <CustomisationSection
                onSelectDesign={handleSelectCustomDesign}
                onViewAllClick={() => navigateTo('custom-designs')}
              />
            </div>

            {/* 8. Divine Idols Section */}
            <div id="divine-idols" className="scroll-reveal">
              <DivineIdolsBanner onExploreDivine={handleExploreDivine} />
            </div>
          </>
        )}
      </main>

      {/* 9. Luxury Multi-Column Footer */}
      <Footer
        onOpenInfo={(topic) => setInfoTopic(topic)}
        onOpenShopCategory={() => setIsShopByTypeOpen(true)}
      />

      {/* 10. Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomBar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onNavigateHome={() => navigateTo('home')}
        onNavigateCollections={() => {
          if (currentPage !== 'home') {
            setCurrentPage('home');
            if (window.location.hash === '#custom-designs') {
              window.history.pushState(null, '', window.location.pathname + window.location.search);
            }
            setTimeout(() => {
              const match = document.getElementById('collections');
              if (match) match.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          } else {
            const match = document.getElementById('collections');
            if (match) match.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        cartCount={cartTotalCount}
        wishlistCount={wishlistTitles.length}
      />

      {/* 11. Floating Back to Top Button */}
      <BackToTop />

      {/* Mobile Slide-Out Drawer Navigation */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onSelectNavItem={handleSelectNavItem}
        onOpenInfo={(topic) => setInfoTopic(topic)}
        cartCount={cartTotalCount}
        wishlistCount={wishlistTitles.length}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistTitles.includes(selectedProduct.title) : false}
      />

      {/* Shopping Bag Slide-Out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Wishlist Slide-Out Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistProducts}
        onRemoveItem={handleRemoveWishlist}
        onMoveToBag={handleMoveWishlistToBag}
        onMoveAllToBag={handleMoveAllWishlistToBag}
        onExploreCollections={() => {
          const match = document.getElementById('collections');
          if (match) match.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* VIP Concierge & Account Drawer */}
      <AccountDrawer
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Multi-step VIP Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={() => setCartItems([])}
      />

      {/* Bespoke Customisation Studio Modal */}
      <CustomisationStudioModal
        isOpen={isCustomStudioOpen}
        onClose={() => {
          setIsCustomStudioOpen(false);
          setStudioInitialDesign(null);
        }}
        onSelectDesign={handleSelectCustomDesign}
        initialDesign={studioInitialDesign}
      />

      {/* Brand Rituals Modal */}
      <RitualsModal
        isOpen={isRitualsOpen}
        onClose={() => setIsRitualsOpen(false)}
        onOpenConsultation={() => {
          setIsRitualsOpen(false);
          setIsAccountOpen(true);
        }}
      />

      {/* Curated Shop By Type Modal */}
      <ShopByTypeModal
        isOpen={isShopByTypeOpen}
        onClose={() => setIsShopByTypeOpen(false)}
        onSelectItem={(item) => setSelectedProduct(item)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlistTitles={wishlistTitles}
      />

      {/* Comprehensive Information, Support & Policies Modal */}
      <InfoModal
        isOpen={infoTopic !== null}
        onClose={() => setInfoTopic(null)}
        initialTopic={infoTopic || 'faqs'}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={(item) => setSelectedProduct(item)}
      />
    </div>
  );
};

export default App;
