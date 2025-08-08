import React, { useState } from "react";
import {
  Copy,
  Mail,
  Check,
  User,
  Building,
  CreditCard,
  Zap,
  Clock,
  Star,
  Crown,
  Sparkles,
  Trophy,
  Diamond,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TicketType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
  benefits: string[];
  maxQuantity: number;
  description: string;
}

const BankTransferTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>("regular");
  const [quantity, setQuantity] = useState(1);
  const [hasCopied, setHasCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const ticketTypes: TicketType[] = [
    {
      id: "regular",
      name: "Regular",
      price: 3000,
      originalPrice: 4000,
      icon: Users,
      color: "text-blue-600",
      gradient: "from-blue-500 to-blue-600",
      benefits: ["General Admission", "Access to Main Event", "Standing Area"],
      maxQuantity: 10,
      description: "Perfect for music lovers who want to experience the concert"
    },
    {
      id: "backstage",
      name: "Backstage",
      price: 50000,
      icon: Star,
      color: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
      benefits: ["Backstage Access", "Meet & Greet", "Exclusive Photo Ops", "VIP Entry"],
      maxQuantity: 5,
      description: "Get behind-the-scenes access and meet your favorite artists"
    },
    {
      id: "table",
      name: "Table",
      price: 200000,
      icon: Crown,
      color: "text-gold-600",
      gradient: "from-yellow-500 to-orange-500",
      benefits: ["Reserved Table for 4", "Premium Viewing", "Complimentary Drinks", "Table Service"],
      maxQuantity: 2,
      description: "Enjoy the concert in luxury with your own reserved table"
    },
    {
      id: "table2",
      name: "Table II",
      price: 500000,
      icon: Trophy,
      color: "text-orange-600",
      gradient: "from-orange-500 to-red-500",
      benefits: ["Premium Table for 6", "Front Row View", "Premium Bar Access", "Dedicated Waiter", "VIP Parking"],
      maxQuantity: 2,
      description: "Ultimate luxury experience with premium amenities"
    },
    {
      id: "table3",
      name: "Table III",
      price: 1000000,
      icon: Diamond,
      color: "text-purple-800",
      gradient: "from-purple-600 to-pink-600",
      benefits: ["Ultra-Premium Table for 8", "Stage-side Position", "Unlimited Premium Bar", "Personal Concierge", "VIP Transport", "Exclusive After-party Access"],
      maxQuantity: 1,
      description: "The most exclusive experience with unparalleled luxury"
    }
  ];

  const currentTicket = ticketTypes.find(t => t.id === selectedTicket)!;
  const savings = currentTicket.originalPrice ? currentTicket.originalPrice - currentTicket.price : 0;
  const total = quantity * currentTicket.price;
  const referenceCode = `CC${Date.now().toString().slice(-8)}`;

  const bankDetails = {
    accountNumber: "6053667376",
    bankName: "Moniepoint Microfinance Bank",
    accountName: "Obafaiye Gift",
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setHasCopied(type);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
      setTimeout(() => setHasCopied(null), 2000);
    });
  };

  const incrementQuantity = () => {
    if (quantity < currentTicket.maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleEmailConfirmation = () => {
    const subject = encodeURIComponent(
      `Crowd Concert ${currentTicket.name} Payment Confirmation - ${referenceCode}`
    );
    const body = encodeURIComponent(`Hello,

I have made a payment for The Crowd Concert ${currentTicket.name} tickets.

Payment Details:
- Ticket Type: ${currentTicket.name}
- Quantity: ${quantity} ticket(s)
- Amount: ${formatCurrency(total)}
- Reference Code: ${referenceCode}
- Bank: ${bankDetails.bankName}
- Account Number: ${bankDetails.accountNumber}

I have attached the payment receipt as evidence.

Thank you.`);

    window.open(
      `mailto:giftobafaiye@gmail.com?cc=hypevibecompanies@gmail.com&subject=${subject}&body=${body}`
    );
  };

  const handleTicketChange = (ticketId: string) => {
    setSelectedTicket(ticketId);
    setQuantity(1); // Reset quantity when changing ticket type
  };

  return (
    <section id="tickets" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-festival-purple to-deep-purple"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-yellow/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-festival-orange/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-festival-magenta/20 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Angled decorative edges */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-neon-yellow via-festival-orange to-neon-yellow transform -skew-y-2"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-neon-yellow via-festival-orange to-neon-yellow transform skew-y-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-festival-orange to-neon-yellow px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 animate-bounce">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-deep-purple" />
            <span className="text-deep-purple font-bold text-xs sm:text-sm uppercase tracking-wide">
              Early Bird Special
            </span>
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-deep-purple" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-festival font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-festival-orange to-neon-yellow mb-4 drop-shadow-2xl">
            Choose Your Experience
          </h2>
          <p className="text-white/90 text-lg sm:text-xl font-medium px-4">
            Limited Time Early Bird Pricing - Don't Miss Out!
          </p>
        </div>

        {/* Ticket Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 sm:mb-12">
          {ticketTypes.map((ticket) => {
            const IconComponent = ticket.icon;
            const isSelected = selectedTicket === ticket.id;
            
            return (
              <div
                key={ticket.id}
                onClick={() => handleTicketChange(ticket.id)}
                className={`relative p-4 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? `border-neon-yellow bg-gradient-to-br ${ticket.gradient} text-white shadow-2xl scale-105`
                    : "border-white/20 bg-white/10 backdrop-blur-sm text-white hover:border-neon-yellow/50"
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <IconComponent className={`w-8 h-8 ${isSelected ? 'text-white' : ticket.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{ticket.name}</h3>
                  <div className="space-y-1">
                    {ticket.originalPrice && (
                      <p className={`text-sm line-through ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>
                        ₦{ticket.originalPrice.toLocaleString()}
                      </p>
                    )}
                    <p className="text-xl font-bold">
                      ₦{ticket.price.toLocaleString()}
                    </p>
                    {savings > 0 && (
                      <p className={`text-sm font-semibold ${isSelected ? 'text-yellow-200' : 'text-green-400'}`}>
                        Save ₦{savings.toLocaleString()}!
                      </p>
                    )}
                  </div>
                  
                  {isSelected && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-neon-yellow text-deep-purple rounded-full p-2">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left Column - Selected Ticket Details */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Ticket Card Design */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-neon-yellow transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {/* Ticket Header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-festival-orange fill-current" />
                      <span className="text-festival-orange font-bold text-base sm:text-lg">
                        EARLY BIRD
                      </span>
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-festival-orange fill-current" />
                    </div>
                    
                    <div className="flex justify-center mb-3">
                      <currentTicket.icon className={`w-12 h-12 ${currentTicket.color}`} />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-deep-purple mb-2">
                      {currentTicket.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{currentTicket.description}</p>
                    
                    <div className="space-y-1">
                      {currentTicket.originalPrice && (
                        <p className="text-gray-500 line-through text-base sm:text-lg">
                          ₦{currentTicket.originalPrice.toLocaleString()}
                        </p>
                      )}
                      <p className="text-3xl sm:text-4xl font-bold text-festival-orange">
                        ₦{currentTicket.price.toLocaleString()}
                      </p>
                      {savings > 0 && (
                        <p className="text-green-600 font-semibold">
                          Save ₦{savings.toLocaleString()}!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-deep-purple mb-3 text-center">What's Included:</h4>
                    <ul className="space-y-2">
                      {currentTicket.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-deep-purple font-bold mb-3 text-center">
                      Select Quantity (Max: {currentTicket.maxQuantity})
                    </label>
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                      <button
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-festival-purple to-festival-magenta rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-lg"
                      >
                        <span className="text-xl sm:text-2xl font-bold">−</span>
                      </button>

                      <div className="w-16 h-12 sm:w-20 sm:h-14 bg-gradient-to-r from-neon-yellow to-festival-orange rounded-xl flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-xl sm:text-2xl font-bold text-deep-purple">
                          {quantity}
                        </span>
                      </div>

                      <button
                        onClick={incrementQuantity}
                        disabled={quantity >= currentTicket.maxQuantity}
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-festival-purple to-festival-magenta rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-lg"
                      >
                        <span className="text-xl sm:text-2xl font-bold">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="text-center p-4 bg-gradient-to-r from-deep-purple to-festival-purple rounded-2xl">
                    <p className="text-white/80 mb-1 text-sm">Total Amount</p>
                    <p className="text-2xl sm:text-3xl font-bold text-neon-yellow">
                      {formatCurrency(total)}
                    </p>
                    {savings > 0 && (
                      <p className="text-white/60 text-xs mt-1">
                        You save: ₦{(savings * quantity).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* Decorative perforated edge */}
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden sm:block">
                    <div className="flex flex-col space-y-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-gray-200 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reference Code Card */}
                <div className="mt-6 p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-neon-yellow/50">
                  <label className="block text-white font-bold mb-2 text-sm sm:text-base">
                    Your Reference Code
                  </label>
                  <div className="flex items-center justify-between bg-white/20 rounded-xl p-3">
                    <span className="text-neon-yellow font-mono text-base sm:text-lg font-bold">
                      {referenceCode}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(referenceCode, "Reference code")
                      }
                      className="text-white hover:text-neon-yellow transition-colors"
                    >
                      {hasCopied === "Reference code" ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm mt-2">
                    Use this code in your transfer description
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Details */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-neon-yellow/20">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-deep-purple mb-2">
                    Complete Your Payment
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Make a bank transfer to secure your {currentTicket.name.toLowerCase()} tickets
                  </p>
                </div>

                {/* Bank Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="space-y-4">
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-festival-orange transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-deep-purple" />
                          <span className="font-bold text-gray-700 text-sm sm:text-base">
                            Account Number
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              bankDetails.accountNumber,
                              "Account number"
                            )
                          }
                          className="text-deep-purple hover:text-festival-purple transition-colors"
                        >
                          {hasCopied === "Account number" ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-xl sm:text-2xl font-mono font-bold text-deep-purple">
                        {bankDetails.accountNumber}
                      </p>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-festival-orange transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-deep-purple" />
                        <span className="font-bold text-gray-700 text-sm sm:text-base">
                          Account Name
                        </span>
                      </div>
                      <p className="text-lg sm:text-xl font-bold text-deep-purple">
                        {bankDetails.accountName}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-festival-orange transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <Building className="w-5 h-5 sm:w-6 sm:h-6 text-deep-purple" />
                        <span className="font-bold text-gray-700 text-sm sm:text-base">
                          Bank Name
                        </span>
                      </div>
                      <p className="text-lg sm:text-xl font-bold text-deep-purple">
                        {bankDetails.bankName}
                      </p>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-r from-neon-yellow/20 to-festival-orange/20 border-3 border-neon-yellow rounded-2xl">
                      <div className="text-center">
                        <p className="font-bold text-deep-purple text-base sm:text-lg mb-2">
                          Amount to Transfer
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-purple">
                          {formatCurrency(total)}
                        </p>
                        <p className="text-festival-orange font-semibold mt-1">
                          {currentTicket.name} Early Bird Price!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Steps */}
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h4 className="font-bold text-blue-800 mb-4 text-base sm:text-lg flex items-center gap-2">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    Quick Payment Steps:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ol className="text-blue-700 space-y-2 list-decimal list-inside text-sm sm:text-base">
                      <li className="font-medium">
                        Transfer exact amount above
                      </li>
                      <li className="font-medium">
                        Include reference code in description
                      </li>
                    </ol>
                    <ol
                      className="text-blue-700 space-y-2 list-decimal list-inside text-sm sm:text-base"
                      start={3}
                    >
                      <li className="font-medium">Screenshot your receipt</li>
                      <li className="font-medium">
                        Send confirmation email below
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Confirmation Button */}
                <button
                  onClick={handleEmailConfirmation}
                  className="w-full bg-gradient-to-r from-deep-purple via-festival-purple to-festival-magenta text-white py-4 sm:py-5 px-4 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 group"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                  <span className="text-center">Send Payment Confirmation</span>
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-spin" />
                </button>

                <div className="text-center mt-4 space-y-2">
                  <p className="text-gray-600 font-medium text-sm sm:text-base">
                    📧 Email:{" "}
                    <span className="text-deep-purple font-bold">
                      giftobafaiye@gmail.com
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    ⚡ Early bird tickets are limited - secure yours now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankTransferTicket;