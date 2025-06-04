
import React, { useState } from 'react';
import { Minus, Plus, Mail, CreditCard, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TicketSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { toast } = useToast();

  const ticketPrice = 5000;
  const total = quantity * ticketPrice;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePayment = (provider: 'flutterwave' | 'paystack') => {
    if (!isValidEmail) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowConfirmation(true);
      
      toast({
        title: "Payment Successful!",
        description: `Your ${quantity} ticket(s) have been confirmed. Check your email for details.`,
      });
    }, 2000);

    console.log(`Processing ${provider} payment:`, {
      quantity,
      total,
      email,
      provider
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (showConfirmation) {
    return (
      <section id="tickets" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-green via-festival-purple to-deep-purple">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 text-center border-4 border-neon-yellow shadow-2xl animate-scale-in">
            <div className="w-16 h-16 bg-electric-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-deep-purple mb-4">Payment Confirmed!</h3>
            
            <div className="text-gray-700 space-y-2 mb-6">
              <p>Thank you, <strong>{email}</strong>!</p>
              <p>Your payment of {formatCurrency(total)} for {quantity} General Admission ticket(s) has been received.</p>
              <p>Your digital tickets have been sent to your email inbox.</p>
              <p className="text-electric-green font-semibold">Enjoy the show!</p>
            </div>
            
            <button 
              onClick={() => setShowConfirmation(false)}
              className="bg-deep-purple text-white px-6 py-2 rounded-full font-semibold hover:bg-festival-purple transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tickets" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-festival-purple to-deep-purple">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {/* Angled top edge */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-neon-yellow via-festival-orange to-neon-yellow transform -skew-y-1"></div>
        {/* Angled bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-neon-yellow via-festival-orange to-neon-yellow transform skew-y-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-festival font-bold text-neon-yellow mb-4 drop-shadow-lg">
            Get Your Tickets
          </h2>
          <p className="text-white/80 text-lg">Secure your spot at the biggest youth festival</p>
        </div>

        {/* Ticket Panel */}
        <div className="max-w-lg mx-auto bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-neon-yellow/30 shadow-2xl">
          {/* Ticket Type */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">General Admission</h3>
            <p className="text-white/80">Access to all festival areas</p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-3">Quantity</label>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="w-12 h-12 bg-festival-purple rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-festival-magenta transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                <span className="text-xl font-bold text-deep-purple">{quantity}</span>
              </div>
              
              <button 
                onClick={incrementQuantity}
                disabled={quantity >= 10}
                className="w-12 h-12 bg-festival-purple rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-festival-magenta transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Price Display */}
          <div className="mb-6 text-center">
            <p className="text-white/80 mb-2">Price per ticket: {formatCurrency(ticketPrice)}</p>
            <p className="text-3xl font-bold text-neon-yellow animate-glow-pulse">
              Total: {formatCurrency(total)}
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-3">Email Address</label>
            <div className="relative">
              <input 
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${
                  email && !isValidEmail 
                    ? 'border-red-500 focus:ring-red-500' 
                    : email && isValidEmail 
                    ? 'border-neon-yellow focus:ring-neon-yellow' 
                    : 'border-white/20 focus:border-neon-yellow focus:ring-neon-yellow'
                }`}
              />
              <Mail className="absolute right-3 top-3 w-5 h-5 text-white/50" />
            </div>
            {email && !isValidEmail && (
              <p className="text-red-400 text-sm mt-2">Invalid email address</p>
            )}
          </div>

          {/* Payment Buttons */}
          <div className="space-y-4">
            <button 
              onClick={() => handlePayment('flutterwave')}
              disabled={!isValidEmail || isProcessing}
              className="w-full bg-gradient-to-r from-festival-purple to-festival-magenta text-white py-4 rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pay with Flutterwave</span>
            </button>
            
            <button 
              onClick={() => handlePayment('paystack')}
              disabled={!isValidEmail || isProcessing}
              className="w-full bg-electric-green text-white py-4 rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pay with Paystack</span>
            </button>
          </div>

          <p className="text-white/60 text-sm text-center mt-4">
            Your tickets will be sent to your email after payment
          </p>
        </div>
      </div>

      {/* Processing Modal */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 text-center max-w-sm mx-4">
            <div className="w-16 h-16 border-4 border-festival-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-deep-purple font-semibold">Redirecting to secure payment gateway...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TicketSection;
