import React, { useState } from 'react';
import { X, User, Crown, Package, Calendar, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AccountDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStoreLocator?: () => void;
}

export const AccountDrawer: React.FC<AccountDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'concierge'>('profile');
  const [appointmentService, setAppointmentService] = useState('Bridal Jewellery Trousseau Consultation');
  const [appointmentDate, setAppointmentDate] = useState('2026-09-28');
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#FAF3EB] text-[#2A1612] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#E9D1B5] z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#4A0712]" />
            <h3 className="font-serif text-lg font-bold text-[#2A1612]">VIP Concierge & Account</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Account Drawer"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E9D1B5] bg-[#FAE7D8] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#4A0712] text-[#4A0712] bg-[#FAF3EB]'
                : 'border-transparent text-[#2A1612]/70 hover:text-[#2A1612]'
            }`}
          >
            Patron Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
              activeTab === 'orders'
                ? 'border-[#4A0712] text-[#4A0712] bg-[#FAF3EB]'
                : 'border-transparent text-[#2A1612]/70 hover:text-[#2A1612]'
            }`}
          >
            Orders (1)
          </button>
          <button
            onClick={() => setActiveTab('concierge')}
            className={`flex-1 py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
              activeTab === 'concierge'
                ? 'border-[#4A0712] text-[#4A0712] bg-[#FAF3EB]'
                : 'border-transparent text-[#2A1612]/70 hover:text-[#2A1612]'
            }`}
          >
            Book Salon
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeTab === 'profile' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Luxury Gold VIP Membership Card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2D060D] via-[#4A0712] to-[#1C0408] text-[#FFF7ED] p-5 border border-[#B88A3B]/60 shadow-[0_8px_24px_rgba(74,7,18,0.35)]">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#D8B477]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-serif text-[10px] tracking-[0.2em] text-[#D8B477] uppercase block">
                      HK Jewellers Imperial Club
                    </span>
                    <h4 className="font-serif text-xl font-bold tracking-wide mt-0.5 text-[#FDF5E6]">
                      Maharani Patron
                    </h4>
                  </div>
                  <Crown className="w-6 h-6 text-[#E6C687]" />
                </div>

                <div className="mt-6 flex items-end justify-between font-mono text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#D8B477]/70 block font-sans">
                      Cardholder
                    </span>
                    <span className="text-sm font-serif tracking-wider font-semibold">Anurag Patel</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider text-[#D8B477]/70 block font-sans">
                      Member ID
                    </span>
                    <span className="text-xs text-[#E6C687]">HK-VIP-1994</span>
                  </div>
                </div>
              </div>

              {/* Privileges */}
              <div className="bg-[#FAE7D8] p-3.5 rounded-lg border border-[#E9D1B5] space-y-2 text-xs">
                <h5 className="font-sans font-bold tracking-wider uppercase text-[10px] text-[#4A0712]">
                  Your Royal Privileges
                </h5>
                <ul className="space-y-1.5 text-[#2A1612]/80">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B88A3B]" />
                    <span>Complimentary Lifetime Hallmark Repolishing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B88A3B]" />
                    <span>Priority Access to High-Jewellery Solitaire Auctions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#B88A3B]" />
                    <span>Dedicated 24/7 Master Karigar Concierge Line</span>
                  </li>
                </ul>
              </div>

              {/* Default Address */}
              <div className="bg-[#FAE7D8] p-3.5 rounded-lg border border-[#E9D1B5] space-y-1 text-xs">
                <div className="flex items-center justify-between text-[#8F6623] font-semibold text-[10px] uppercase">
                  <span>Saved Vault Delivery Address</span>
                  <MapPin className="w-3 h-3" />
                </div>
                <p className="font-medium text-[#2A1612]">1502, Bank Street, Karol Bagh</p>
                <p className="text-[#2A1612]/70">New Delhi, Delhi — 110005</p>
                <p className="text-[#2A1612]/70">+91 98765 43210</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="bg-[#FAE7D8] p-3.5 rounded-lg border border-[#E9D1B5] shadow-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold tracking-wider uppercase bg-[#4A0712] text-[#FFF7ED] px-2 py-0.5 rounded">
                    In Insured Transit
                  </span>
                  <span className="text-xs text-[#8F6623] font-mono">#HK-94821</span>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 rounded bg-[#1E0E0B] flex items-center justify-center text-[#D8B477] border border-[#B88A3B]/40">
                    <Package className="w-6 h-6 stroke-[1.4]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-[#2A1612]">The Nizam Polki Choker</h5>
                    <p className="text-[10px] text-[#8F6623]">22K Hallmarked • Certified Emeralds</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E9D1B5]/70 flex items-center justify-between text-[11px] text-[#2A1612]/80">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold text-[#4A0712]">Tomorrow by 2:00 PM</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'concierge' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              {appointmentBooked ? (
                <div className="bg-[#FAF3EB] border border-[#B88A3B] rounded-lg p-5 text-center space-y-2.5">
                  <div className="w-12 h-12 rounded-full bg-[#4A0712] text-[#D8B477] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#4A0712]">Salon Appointment Confirmed</h4>
                  <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                    Our Senior Jewellery Director will receive you at our flagship Karol Bagh salon on <strong className="text-[#4A0712]">{appointmentDate}</strong> for your <em>{appointmentService}</em>.
                  </p>
                  <button
                    onClick={() => setAppointmentBooked(false)}
                    className="mt-2 text-xs font-semibold text-[#8F6623] underline cursor-pointer"
                  >
                    Modify Appointment
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppointmentBooked(true);
                  }}
                  className="space-y-3"
                >
                  <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                    Reserve a private, champagne-accompanied viewing suite at our Karol Bagh boutique with our master gemmologists.
                  </p>

                  <div>
                    <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                      Consultation Type
                    </label>
                    <select
                      value={appointmentService}
                      onChange={(e) => setAppointmentService(e.target.value)}
                      className="w-full bg-[#FAE7D8] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                    >
                      <option>Bridal Jewellery Trousseau Consultation</option>
                      <option>Ancestral Gold & Polki Remodelling</option>
                      <option>Private Solitaire Diamond Selection</option>
                      <option>Divine Temple Idols Commissioning</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full bg-[#FAE7D8] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs uppercase tracking-wider font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm VIP Booking</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#FAE7D8] border-t border-[#E9D1B5] text-center text-[10px] text-[#2A1612]/70">
          HK Jewellers Flagship Salon • Karol Bagh, New Delhi • Concierge: +91 98765 43210
        </div>
      </div>
    </div>
  );
};
