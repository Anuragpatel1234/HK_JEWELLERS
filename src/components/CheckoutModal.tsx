import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, CreditCard, Smartphone, Building2, Truck, ArrowLeft, ArrowRight } from 'lucide-react';
import type { CartItem } from './CartDrawer';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: 'Anurag Patel',
    phone: '+91 98765 43210',
    email: 'anurag@example.com',
    pincode: '110005',
    address: '1502, Bank Street, Karol Bagh',
    city: 'New Delhi',
    state: 'Delhi',
    notes: 'Please arrange insured delivery with private concierge call 1 hour prior.',
  });
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'wire'>('upi');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirmOrder = () => {
    const generatedId = 'HK-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep(3);
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={step === 3 ? onClose : undefined}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#4A0712]" />
            <h3 className="font-serif text-lg font-bold text-[#2A1612]">
              {step === 3 ? 'Order Confirmed' : 'Insured VIP Checkout'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Checkout"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 3 && (
          <div className="grid grid-cols-2 text-center text-xs font-semibold border-b border-[#E9D1B5] bg-[#FAE7D8]">
            <div className={`py-2 border-r border-[#E9D1B5] ${step === 1 ? 'text-[#4A0712] bg-[#FAF3EB]' : 'text-[#2A1612]/60'}`}>
              1. Vault Delivery Address
            </div>
            <div className={`py-2 ${step === 2 ? 'text-[#4A0712] bg-[#FAF3EB]' : 'text-[#2A1612]/60'}`}>
              2. Payment & Verification
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {/* STEP 1: Address */}
          {step === 1 && (
            <form onSubmit={handleProceedToPayment} className="space-y-3.5">
              <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] text-xs text-[#2A1612]/80 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B88A3B] flex-shrink-0" />
                <span>Complimentary insured transit by BVC Armoured Logistics.</span>
              </div>

              <div>
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                  Delivery Address
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-wider uppercase font-semibold py-3 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: Payment */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block">
                  Select Secure Payment Method
                </span>

                {/* UPI Option */}
                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'bg-[#FAF3EB] border-[#4A0712] shadow-sm' : 'bg-[#FAE7D8] border-[#E9D1B5]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="accent-[#4A0712]"
                  />
                  <Smartphone className="w-5 h-5 text-[#4A0712]" />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-[#2A1612] block">Instant UPI (GPay / PhonePe / Paytm)</span>
                    <span className="text-[10.5px] text-[#2A1612]/60">0% surcharge • Direct BIS 916 Escrow</span>
                  </div>
                </label>

                {/* Card Option */}
                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'bg-[#FAF3EB] border-[#4A0712] shadow-sm' : 'bg-[#FAE7D8] border-[#E9D1B5]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="accent-[#4A0712]"
                  />
                  <CreditCard className="w-5 h-5 text-[#4A0712]" />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-[#2A1612] block">Credit / Debit Card (Visa, Mastercard, RuPay)</span>
                    <span className="text-[10.5px] text-[#2A1612]/60">Protected with 256-bit SSL Banking Protocol</span>
                  </div>
                </label>

                {/* Bank Wire */}
                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  paymentMethod === 'wire' ? 'bg-[#FAF3EB] border-[#4A0712] shadow-sm' : 'bg-[#FAE7D8] border-[#E9D1B5]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'wire'}
                    onChange={() => setPaymentMethod('wire')}
                    className="accent-[#4A0712]"
                  />
                  <Building2 className="w-5 h-5 text-[#4A0712]" />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-[#2A1612] block">VIP Concierge Bank Transfer (RTGS / NEFT)</span>
                    <span className="text-[10.5px] text-[#2A1612]/60">Dedicated private banker verification</span>
                  </div>
                </label>
              </div>

              {/* Order Summary Recap */}
              <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] space-y-1.5 text-xs">
                <span className="font-bold text-[10px] uppercase text-[#4A0712] tracking-wider block">
                  Vault Order Summary ({items.reduce((s, i) => s + i.quantity, 0)} pieces)
                </span>
                {items.map((i) => (
                  <div key={i.title} className="flex justify-between text-[#2A1612]/85">
                    <span className="truncate pr-2">{i.title} &times; {i.quantity}</span>
                    <span className="font-semibold text-[#4A0712]">Included</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 border border-[#B88A3B]/40 rounded text-xs text-[#2A1612] hover:bg-[#FAE7D8] cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  className="flex-1 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-wider uppercase font-semibold py-3 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Complete Royal Order</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Confirmation */}
          {step === 3 && (
            <div className="text-center py-4 space-y-4 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-full bg-[#4A0712] text-[#D8B477] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#B88A3B] font-bold block">
                  Thank you for placing your trust in HK Jewellers
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#4A0712] mt-1">
                  Order Placed Successfully
                </h4>
                <p className="text-xs text-[#8F6623] font-mono mt-1">
                  Tracking Code: <strong>{orderId}</strong>
                </p>
              </div>

              <div className="bg-[#FAE7D8] p-4 rounded-lg border border-[#E9D1B5] text-xs text-[#2A1612]/80 space-y-2 text-left">
                <div className="flex justify-between border-b border-[#E9D1B5]/60 pb-1.5">
                  <span className="text-[#8F6623]">Recipient</span>
                  <span className="font-semibold text-[#2A1612]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#E9D1B5]/60 pb-1.5">
                  <span className="text-[#8F6623]">Destination</span>
                  <span className="font-semibold text-[#2A1612]">{formData.city}, {formData.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8F6623]">Armoured Courier</span>
                  <span className="font-semibold text-[#4A0712]">BVC Insured Air Freight</span>
                </div>
              </div>

              <p className="text-xs text-[#2A1612]/70 leading-relaxed max-w-sm mx-auto">
                A private concierge confirmation and authenticated BIS Hallmark certificate have been dispatched to <strong>{formData.phone}</strong>.
              </p>

              <button
                onClick={onClose}
                className="w-full bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-wider uppercase font-semibold py-3 rounded transition-colors cursor-pointer shadow-md"
              >
                Return to HK Jewellers Boutique
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
