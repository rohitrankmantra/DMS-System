'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, Send, Zap } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber?: string;
  callNumber?: string;
  email?: string;
  address?: string;
  defaultMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  companyName?: string;
}

export function FloatingWhatsApp({
  whatsappNumber = '919999035340',
  callNumber = '911126691429',
  email = 'channels@dmsystems.in',
  address = 'E-2/7 & 8, 2nd. Floor, Malviya Nagar, New Delhi – 110017',
  defaultMessage = 'Hi there! 👋',
  position = 'bottom-right',
  companyName = 'Our Team',
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCall, setIsCall] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const pulseTimer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(pulseTimer);
  }, []);

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  const handleWhatsAppClick = () => {
    const message = messageInput || defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    // whatsappNumber should be international format without +
    const normalized = whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappURL = `https://wa.me/${normalized}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setIsOpen(false);
    setMessageInput('');
  };

  const handleCall = () => {
    const normalized = callNumber.replace(/\s+/g, '');
    window.open(`tel:${normalized}`, '_self');
    setIsOpen(false);
  };

  return (
    <div className={`fixed ${positionClasses} z-40 font-sans`}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className="absolute bottom-24 right-0 w-80 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl p-6 border border-gray-200/50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#0F4C92] to-[#0b3a74] bg-clip-text text-transparent">
                  {companyName}
                </h3>
                <p className="text-sm text-gray-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#0F4C92] rounded-full animate-pulse" />
                    Available Now
+                  </span>
                  <span className="text-xs text-slate-500">{address}</span>
                </p>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsOpen(false);
                  setIsCall(false);
                }}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </motion.button>
            </div>

            {/* Content Tabs */}
            {!isCall ? (
              <motion.div
                key="message"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <p className="text-gray-600 text-sm font-medium">
                  💬 Send us a message and we'll respond as soon as possible
                </p>

                {/* Message Preview */}
                <div className="bg-gradient-to-br from-[#f6f9ff] to-[#eef6ff] rounded-2xl p-4 border border-[#e6f0ff]">
                  <p className="text-sm text-gray-700 font-medium mb-2">Quick Message:</p>
                  <div className="text-xs text-gray-600 bg-white rounded-lg p-3 border border-[#e6f0ff]">
                    {messageInput || defaultMessage}
                  </div>
                </div>

                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-[#0F4C92] focus:ring-2 focus:ring-[#cfe0fb] outline-none transition-all text-sm"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-gradient-to-r from-[#0F4C92] to-[#0b3a74] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Send size={18} />
                    Send
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCall(true)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Phone size={18} />
                    Call
                  </motion.button>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a href={`mailto:${email}`} className="text-sm text-[#0F4C92] font-semibold">{email}</a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="call"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <p className="text-gray-600 text-sm font-medium">
                  📞 Ready to talk? Let's connect now!
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-gray-800 mb-2">{callNumber}</p>
                  <p className="text-sm text-gray-600">Call us directly</p>
                  <p className="text-sm text-gray-600 mt-2">Contact: Pallavi Bhardwaj • +91-99990-35340</p>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="flex-1 bg-gradient-to-r from-[#0F4C92] to-[#0b3a74] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Phone size={18} />
                    Call Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCall(false)}
                    className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-2xl hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsCall(false);
        }}
        className="relative group"
      >
        {/* Glow Background */}
        {showPulse && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-[#0F4C92] to-[#0b3a74] rounded-full opacity-40 blur-lg"
          />
        )}

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#0F4C92] via-[#0b3a74] to-[#0F4C92] bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity"
        />

        {/* Main Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#0F4C92] via-[#0b3a74] to-[#0b3a74] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden">
          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-12"
          />

          <MessageCircle size={28} className="relative z-10" strokeWidth={1.5} />

          {/* Badge */}
          {!isOpen && (
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white"
            >
              <Zap size={12} />
            </motion.div>
          )}
        </div>
      </motion.button>
    </div>
  );
}
