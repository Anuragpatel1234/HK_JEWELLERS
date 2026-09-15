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
import { QuickViewModal } from './components/QuickViewModal';
import type { ModalProductDetails } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import type { CartItem } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
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
  // Navigation & Drawer States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ModalProductDetails | null>(null);

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

  const handleCheckout = () => {
    alert('Thank you for exploring HK Jewellers! Our private concierge will connect with you shortly for insured VIP dispatch.');
    setIsCartOpen(false);
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7EBDD] text-[#2A1612] flex flex-col selection:bg-[#4A0712] selection:text-[#FFF7ED]">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Luxury Sticky Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          if (cartItems.length > 0) {
            setSelectedProduct(cartItems[0]);
          } else {
            alert('Your wishlist currently contains: ' + wishlistTitles.join(', '));
          }
        }}
        cartCount={cartTotalCount}
        wishlistCount={wishlistTitles.length}
      />

      {/* 3. Category Horizontal Navigation */}
      <CategoryNav
        onSelectCategory={(catId) => {
          const match = document.getElementById(catId);
          if (match) {
            match.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full">
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
            onViewAllClick={() => {
              handleSelectCategory({
                id: 'custom-all',
                name: 'BESPOKE CUSTOM CREATIONS',
                image: '/assets/customisation/custom_2_kadas.jpg',
                count: 'By Appointment',
                tagline: 'Tailored by Master Karigars',
                description: 'Bring your personal heirloom vision to life with our master craftsmen. From ancestral resets to bridal suites.',
              });
            }}
          />
        </div>

        {/* 8. Divine Idols Section */}
        <div id="divine-idols" className="scroll-reveal">
          <DivineIdolsBanner onExploreDivine={handleExploreDivine} />
        </div>
      </main>

      {/* 9. Luxury Multi-Column Footer */}
      <Footer />

      {/* 10. Floating Back to Top Button */}
      <BackToTop />

      {/* Mobile Slide-Out Drawer Navigation */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          alert('Your wishlist contains: ' + wishlistTitles.join(', '));
        }}
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
        onCheckout={handleCheckout}
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
