import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  User,
  Phone,
  MapPin,
  FileText,
  ShoppingBag,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Share2,
  Image as ImageIcon
} from 'lucide-react';
import type { CartItem } from './CartDrawer';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

/** Format cart items + customer data into an exquisite, royal WhatsApp message */
function buildWhatsAppMessage(
  items: CartItem[],
  customer: {
    fullName: string;
    phone: string;
    email: string;
    pincode: string;
    address: string;
    city: string;
    state: string;
    notes: string;
  },
  orderId: string
): string {
  const totalPieces = items.reduce((sum, i) => sum + i.quantity, 0);
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : 'https://hkjewellers.com';

  let msg = `👑 *NEW LUXURY ORDER — HK JEWELLERS* 👑\n`;
  msg += `✨ *Royal Heritage Jewellery • Order Inquiry* ✨\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📋 *Order ID:* #${orderId}\n`;
  msg += `📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}\n`;
  msg += `⏰ *Time:* ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}\n\n`;

  msg += `👤 *CUSTOMER DETAILS*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `• *Name:* ${customer.fullName}\n`;
  msg += `• *Contact:* ${customer.phone}\n`;
  if (customer.email) msg += `• *Email:* ${customer.email}\n`;
  msg += `• *Shipping Address:* ${customer.address}\n`;
  msg += `• *City / State:* ${customer.city}, ${customer.state} – ${customer.pincode}\n\n`;

  msg += `🛍️ *SELECTED JEWELLERY (${totalPieces} piece${totalPieces > 1 ? 's' : ''})*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

  items.forEach((item, idx) => {
    const fullImageUrl = item.image.startsWith('http')
      ? item.image
      : `${origin}${item.image.startsWith('/') ? '' : '/'}${item.image}`;

    msg += `\n🔸 *[0${idx + 1}] ${item.title.toUpperCase()}*\n`;
    if (item.goldPurity) msg += `   • *Purity:* ${item.goldPurity}\n`;
    if (item.gemstones) msg += `   • *Gemstones:* ${item.gemstones}\n`;
    if (item.craft || item.tagline) msg += `   • *Artistry:* ${item.craft || item.tagline}\n`;
    if (item.price) msg += `   • *Price:* ${item.price}\n`;
    msg += `   • *Quantity:* ${item.quantity} piece${item.quantity > 1 ? 's' : ''}\n`;
    msg += `   • 📸 *Product Photo:* ${fullImageUrl}\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

  if (customer.notes.trim()) {
    msg += `\n📝 *Special Request / Customisation Notes:*\n"${customer.notes.trim()}"\n\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  }

  msg += `\n🛡️ *HK JEWELLERS ASSURANCE*\n`;
  msg += `✓ 100% BIS Hallmarked 22K/18K Gold\n`;
  msg += `✓ IGI / SGL Certified Natural Diamonds & Gemstones\n`;
  msg += `✓ Complimentary Fully-Insured Doorstep Transit\n\n`;

  msg += `🙏 _Please confirm piece availability, hallmark certification & payment details._\n`;
  msg += `🏛️ *HK Jewellers — Crafting Timeless Legacies Since 1994*`;

  return msg;
}

const WHATSAPP_NUMBER = '917069916916';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    notes: '',
  });
  const [orderId, setOrderId] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalPieces = items.reduce((s, i) => s + i.quantity, 0);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) errors.fullName = 'Name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    else if (formData.phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.pincode.trim()) errors.pincode = 'PIN Code is required';
    else if (formData.pincode.replace(/\D/g, '').length !== 6) errors.pincode = 'Enter a valid 6-digit PIN';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(2);
    }
  };

  const handleConfirmAndSendWhatsApp = () => {
    const generatedId = orderId || ('HKJ-' + Math.floor(100000 + Math.random() * 900000));
    setOrderId(generatedId);

    // Build the WhatsApp message
    const message = buildWhatsAppMessage(items, formData, generatedId);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Move to confirmation step
    setStep(3);
    onOrderComplete();
  };

  const handleShareNative = async () => {
    const currentOrderId = orderId || ('HKJ-' + Math.floor(100000 + Math.random() * 900000));
    setOrderId(currentOrderId);
    const message = buildWhatsAppMessage(items, formData, currentOrderId);

    if (navigator.share) {
      try {
        await navigator.share({
          title: `HK Jewellers Order #${currentOrderId}`,
          text: message,
        });
        setStep(3);
        onOrderComplete();
      } catch (err) {
        // User dismissed share dialog or canceled; fallback to regular WhatsApp
        handleConfirmAndSendWhatsApp();
      }
    } else {
      handleConfirmAndSendWhatsApp();
    }
  };

  const handleCopyMessage = () => {
    const currentOrderId = orderId || ('HKJ-' + Math.floor(100000 + Math.random() * 900000));
    if (!orderId) setOrderId(currentOrderId);
    const message = buildWhatsAppMessage(items, formData, currentOrderId);
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClose = () => {
    // Reset form on close
    setStep(1);
    setFormErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={step === 3 ? handleClose : undefined}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5] bg-gradient-to-r from-[#FFF7ED] to-[#FAE7D8]">
          <div className="flex items-center gap-2.5">
            {step === 3 ? (
              <CheckCircle2 className="w-5 h-5 text-[#166534]" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-[#4A0712]" />
            )}
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2A1612] leading-tight">
                {step === 1 && 'Delivery & Client Details'}
                {step === 2 && 'Review & WhatsApp Order'}
                {step === 3 && 'Order Sent to HK Jewellers'}
              </h3>
              <p className="text-[10px] text-[#8F6623] font-sans flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                HK Jewellers • Direct Boutique Service
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close Checkout"
            className="p-1.5 text-[#2A1612] hover:text-[#4A0712] rounded-lg transition-colors cursor-pointer hover:bg-black/5"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 3 && (
          <div className="grid grid-cols-2 text-center text-xs font-semibold border-b border-[#E9D1B5] bg-[#FAE7D8]">
            <div className={`py-2.5 border-r border-[#E9D1B5] transition-colors flex items-center justify-center gap-1.5 ${step === 1 ? 'text-[#4A0712] bg-[#FAF3EB] font-bold shadow-sm' : 'text-[#2A1612]/60'}`}>
              <span className="w-4 h-4 rounded-full text-[10px] flex items-center justify-center bg-[#4A0712] text-white">1</span>
              <span>Client Details</span>
            </div>
            <div className={`py-2.5 transition-colors flex items-center justify-center gap-1.5 ${step === 2 ? 'text-[#4A0712] bg-[#FAF3EB] font-bold shadow-sm' : 'text-[#2A1612]/60'}`}>
              <span className="w-4 h-4 rounded-full text-[10px] flex items-center justify-center bg-[#25D366] text-white">2</span>
              <span>Review & Photo Order</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* ───────── STEP 1: Customer Details ───────── */}
          {step === 1 && (
            <form onSubmit={handleProceedToReview} className="space-y-3.5">
              <div className="bg-[#FAE7D8]/80 p-3 rounded-xl border border-[#E9D1B5] text-xs text-[#2A1612]/85 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div className="leading-tight">
                  <span className="font-semibold text-[#2A1612] block">Instant WhatsApp Concierge Order</span>
                  <span className="text-[11px] text-[#2A1612]/70">Your selection, pieces, and HD photo references will be sent directly to our master jewellers.</span>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#B88A3B] pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                    }}
                    placeholder="e.g. Anurag Kalmodiya"
                    className={`w-full bg-[#FAF3EB] border rounded-lg px-3 pl-9 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] transition-colors ${formErrors.fullName ? 'border-red-400' : 'border-[#E9D1B5]'}`}
                  />
                </div>
                {formErrors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#B88A3B] pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                      }}
                      placeholder="e.g. 08269181400"
                      className={`w-full bg-[#FAF3EB] border rounded-lg px-3 pl-9 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] transition-colors ${formErrors.phone ? 'border-red-400' : 'border-[#E9D1B5]'}`}
                    />
                  </div>
                  {formErrors.phone && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.phone}</p>}
                </div>
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anurag@gmail.com"
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded-lg px-3 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                  Delivery Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-3.5 h-3.5 text-[#B88A3B] pointer-events-none" />
                  <textarea
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      if (formErrors.address) setFormErrors({ ...formErrors, address: '' });
                    }}
                    placeholder="House/Plot, Village/Street, Tehsil"
                    className={`w-full bg-[#FAF3EB] border rounded-lg px-3 pl-9 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] resize-none transition-colors ${formErrors.address ? 'border-red-400' : 'border-[#E9D1B5]'}`}
                  />
                </div>
                {formErrors.address && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.address}</p>}
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (formErrors.city) setFormErrors({ ...formErrors, city: '' });
                    }}
                    placeholder="Shujalpur"
                    className={`w-full bg-[#FAF3EB] border rounded-lg px-2.5 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] transition-colors ${formErrors.city ? 'border-red-400' : 'border-[#E9D1B5]'}`}
                  />
                  {formErrors.city && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.city}</p>}
                </div>
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => {
                      setFormData({ ...formData, state: e.target.value });
                      if (formErrors.state) setFormErrors({ ...formErrors, state: '' });
                    }}
                    placeholder="Madhya Pradesh"
                    className={`w-full bg-[#FAF3EB] border rounded-lg px-2.5 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] transition-colors ${formErrors.state ? 'border-red-400' : 'border-[#E9D1B5]'}`}
                  />
                  {formErrors.state && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.state}</p>}
                </div>
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => {
                      setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) });
                      if (formErrors.pincode) setFormErrors({ ...formErrors, pincode: '' });
                    }}
                    placeholder="465331"
                    className={`w-full bg-[#FAF3EB] border rounded-lg px-2.5 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] transition-colors ${formErrors.pincode ? 'border-red-400' : 'border-[#E9D1B5]'}`}
                  />
                  {formErrors.pincode && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.pincode}</p>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                  Special Notes / Customisation Requests
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-3.5 h-3.5 text-[#B88A3B] pointer-events-none" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any specific engraving, purity preferences, delivery instructions..."
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded-lg px-3 pl-9 py-2.5 text-xs font-sans text-[#2A1612] focus:outline-none focus:border-[#4A0712] resize-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-wider uppercase font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.98]"
              >
                <span>Continue to Order Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* ───────── STEP 2: Order Review & WhatsApp Send ───────── */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Product Visual Showcase Banner */}
              <div className="bg-gradient-to-r from-[#FFF7ED] via-[#FAF3EB] to-[#FAE7D8] p-3.5 rounded-xl border border-[#B88A3B]/40 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[10px] uppercase text-[#4A0712] tracking-wider flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#B88A3B]" />
                    Order Pieces & Photos ({totalPieces} {totalPieces > 1 ? 'items' : 'item'})
                  </span>
                  <span className="text-[10px] text-[#25D366] font-semibold flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" />
                    HD Photo Links Attached
                  </span>
                </div>

                <div className="space-y-2.5">
                  {items.map((item, idx) => {
                    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : 'https://hkjewellers.com';
                    const fullImageUrl = item.image.startsWith('http')
                      ? item.image
                      : `${origin}${item.image.startsWith('/') ? '' : '/'}${item.image}`;

                    return (
                      <div
                        key={item.title + idx}
                        className="flex gap-3 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-[#E9D1B5] hover:border-[#B88A3B] transition-all"
                      >
                        <div className="relative group shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded-lg bg-[#1E0E0B] border border-[#B88A3B]/40 shadow-xs"
                          />
                          <a
                            href={fullImageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open High-Res Photo"
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center text-white text-[10px] font-sans font-medium"
                          >
                            <ExternalLink className="w-4 h-4 text-[#E9D1B5]" />
                          </a>
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-serif text-xs font-bold text-[#2A1612] truncate">
                                {item.title}
                              </h4>
                              {item.price && (
                                <span className="text-xs font-bold text-[#4A0712] shrink-0 font-serif">
                                  {item.price}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-[#8F6623] mt-0.5">
                              {item.goldPurity || '22K Hallmarked Gold'} {item.gemstones ? `• ${item.gemstones}` : ''}
                            </p>
                            {item.tagline && (
                              <p className="text-[10px] text-[#2A1612]/70 italic truncate mt-0.5">
                                {item.tagline}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-1 text-[10px] text-[#2A1612]/70 border-t border-[#E9D1B5]/50 pt-1">
                            <span className="font-medium">Quantity: {item.quantity}</span>
                            <a
                              href={fullImageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#8F6623] hover:text-[#4A0712] font-semibold flex items-center gap-1 hover:underline"
                            >
                              <span>View Piece Photo</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Profile Summary */}
              <div className="bg-[#FFF7ED] p-3 rounded-xl border border-[#E9D1B5] text-xs text-[#2A1612] space-y-1.5">
                <span className="font-bold text-[10px] uppercase text-[#8F6623] tracking-wider block">
                  Delivery Destination
                </span>
                <div className="flex items-start justify-between gap-3 text-[11px]">
                  <div>
                    <span className="font-semibold text-[#2A1612]">{formData.fullName}</span>
                    <p className="text-[#2A1612]/75">{formData.address}</p>
                    <p className="text-[#2A1612]/75">{formData.city}, {formData.state} – {formData.pincode}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-[#8F6623] block">Phone</span>
                    <span className="font-semibold text-[#2A1612]">{formData.phone}</span>
                  </div>
                </div>
              </div>

              {/* Special Notes Preview */}
              {formData.notes.trim() && (
                <div className="bg-[#FFF7ED] p-2.5 rounded-xl border border-[#E9D1B5] text-xs text-[#2A1612]/80">
                  <span className="font-bold text-[10px] uppercase text-[#8F6623] tracking-wider block mb-0.5">
                    Client's Custom Request:
                  </span>
                  <p className="text-[#2A1612]/75 italic text-[11px]">"{formData.notes}"</p>
                </div>
              )}

              {/* WhatsApp Order Preview Note */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-3 rounded-xl text-xs text-[#136336] space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Interactive Luxury WhatsApp Message</span>
                </div>
                <p className="text-[11px] text-[#166534] leading-relaxed">
                  Clicking below will format your complete order card with product specifications and clickable high-definition photo previews directly into WhatsApp for <strong>HK Jewellers (+91 70699 16916)</strong>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-3.5 py-3 border border-[#B88A3B]/40 rounded-xl text-xs text-[#2A1612] hover:bg-[#FAE7D8] cursor-pointer flex items-center gap-1 transition-colors active:scale-[0.98]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Edit</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmAndSendWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white font-sans text-xs tracking-wider uppercase font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-[0.98]"
                  >
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Send Order to WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex-1 py-2.5 px-3 border border-[#B88A3B]/40 hover:bg-[#FAE7D8] text-[#4A0712] rounded-xl text-[11px] font-sans font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-semibold">Order Text Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#B88A3B]" />
                        <span>Copy Order Text</span>
                      </>
                    )}
                  </button>

                  {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                    <button
                      type="button"
                      onClick={handleShareNative}
                      className="py-2.5 px-3 border border-[#B88A3B]/40 hover:bg-[#FAE7D8] text-[#4A0712] rounded-xl text-[11px] font-sans font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5 text-[#B88A3B]" />
                      <span>Share</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ───────── STEP 3: Confirmation ───────── */}
          {step === 3 && (
            <div className="text-center py-2 space-y-4 animate-in fade-in duration-200">
              {/* Success Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#25D366] font-bold block">
                  Order Successfully Dispatched
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1612]">
                  Order Sent via WhatsApp!
                </h4>
                <p className="text-xs text-[#8F6623] font-mono mt-1">
                  Order Reference: <strong>{orderId}</strong>
                </p>
              </div>

              {/* Order Visual Summary with Images */}
              <div className="bg-[#FAE7D8] p-3.5 rounded-xl border border-[#E9D1B5] text-xs text-[#2A1612]/80 space-y-2.5 text-left">
                <div className="flex justify-between border-b border-[#E9D1B5]/60 pb-2">
                  <span className="text-[#8F6623]">Destination Boutique</span>
                  <span className="font-semibold text-[#2A1612]">HK Jewellers (+91 70699 16916)</span>
                </div>
                <div className="flex justify-between border-b border-[#E9D1B5]/60 pb-2">
                  <span className="text-[#8F6623]">Customer</span>
                  <span className="font-semibold text-[#2A1612]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#E9D1B5]/60 pb-2">
                  <span className="text-[#8F6623]">Selected Pieces</span>
                  <span className="font-semibold text-[#2A1612]">{totalPieces} piece{totalPieces > 1 ? 's' : ''}</span>
                </div>

                {/* Thumbnails of items */}
                <div className="pt-1">
                  <span className="text-[10px] uppercase font-bold text-[#8F6623] block mb-1.5">
                    Ordered Jewellery Pieces
                  </span>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {items.map((item, i) => (
                      <div key={item.title + i} className="flex items-center gap-2 bg-[#FAF3EB] p-1.5 rounded-lg border border-[#E9D1B5] shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 object-cover rounded bg-[#1E0E0B] border border-[#B88A3B]/30"
                        />
                        <div className="max-w-[120px]">
                          <p className="text-[10px] font-serif font-bold text-[#2A1612] truncate">{item.title}</p>
                          <p className="text-[9px] text-[#8F6623]">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF7ED] p-3 rounded-xl border border-[#E9D1B5] text-[11px] text-[#2A1612]/80 space-y-1 text-left">
                <span className="font-bold text-[#4A0712] block">✨ What happens next?</span>
                <p>1. Our master concierge has received your specifications and piece photographs.</p>
                <p>2. We will verify hallmark certificate availability and send an official invoice.</p>
                <p>3. Secure payment link will be sent directly on your WhatsApp.</p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={handleClose}
                  className="w-full bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-wider uppercase font-semibold py-3.5 rounded-xl transition-colors cursor-pointer shadow-md active:scale-[0.98]"
                >
                  Return to HK Jewellers Boutique
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-sans text-xs tracking-wider uppercase font-semibold py-3 rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
