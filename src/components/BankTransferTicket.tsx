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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const BankTransferTicket = () => {
  const [quantity, setQuantity] = useState(1);
  const [hasCopied, setHasCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const regularPrice = 2000;
  const earlyBirdPrice = 1500;
  const savings = regularPrice - earlyBirdPrice;
  const total = quantity * earlyBirdPrice;
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
    if (quantity < 10) {
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
      `Crowd Concert Early Bird Payment Confirmation - ${referenceCode}`
    );
    const body = encodeURIComponent(`Hello,

I have made a payment for The Crowd Concert Early Bird tickets.

Payment Details:
- Quantity: ${quantity} Early Bird ticket(s)
- Amount: ${formatCurrency(total)}
- Reference Code: ${referenceCode}
- Bank: ${bankDetails.bankName}
- Account Number: ${bankDetails.accountNumber}

I have attached the payment receipt as evidence.

Thank you.`);

    window.open(
      `mailto:giftobafaiye@gmail.com?cc=hypevibecompanies@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <section id="tickets" className="py-20 relative overflow-hidden">
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
        {/* Section Header with Early Bird Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-festival-orange to-neon-yellow px-6 py-2 rounded-full mb-6 animate-bounce">
            <Zap className="w-5 h-5 text-deep-purple" />
            <span className="text-deep-purple font-bold text-sm uppercase tracking-wide">
              Early Bird Special
            </span>
            <Clock className="w-5 h-5 text-deep-purple" />
          </div>

          <h2 className="text-5xl md:text-6xl font-festival font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-festival-orange to-neon-yellow mb-4 drop-shadow-2xl">
            Grab Your Tickets
          </h2>
          <p className="text-white/90 text-xl font-medium">
            Limited Time Early Bird Pricing - Save ₦{savings.toLocaleString()}!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Ticket Design & Selection */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Ticket Card Design */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border-4 border-neon-yellow transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {/* Ticket Header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Star className="w-6 h-6 text-festival-orange fill-current" />
                      <span className="text-festival-orange font-bold text-lg">
                        EARLY BIRD
                      </span>
                      <Star className="w-6 h-6 text-festival-orange fill-current" />
                    </div>
                    <h3 className="text-3xl font-bold text-deep-purple mb-2">
                      General Admission
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-500 line-through text-lg">
                        ₦{regularPrice.toLocaleString()}
                      </p>
                      <p className="text-4xl font-bold text-festival-orange">
                        ₦{earlyBirdPrice.toLocaleString()}
                      </p>
                      <p className="text-green-600 font-semibold">
                        Save ₦{savings.toLocaleString()}!
                      </p>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-deep-purple font-bold mb-3 text-center">
                      Select Quantity
                    </label>
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                        className="w-14 h-14 bg-gradient-to-r from-festival-purple to-festival-magenta rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-lg"
                      >
                        <span className="text-2xl font-bold">−</span>
                      </button>

                      <div className="w-20 h-14 bg-gradient-to-r from-neon-yellow to-festival-orange rounded-xl flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-2xl font-bold text-deep-purple">
                          {quantity}
                        </span>
                      </div>

                      <button
                        onClick={incrementQuantity}
                        disabled={quantity >= 10}
                        className="w-14 h-14 bg-gradient-to-r from-festival-purple to-festival-magenta rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-lg"
                      >
                        <span className="text-2xl font-bold">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="text-center p-4 bg-gradient-to-r from-deep-purple to-festival-purple rounded-2xl">
                    <p className="text-white/80 mb-1 text-sm">Total Amount</p>
                    <p className="text-3xl font-bold text-neon-yellow">
                      {formatCurrency(total)}
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                      You save: ₦{(savings * quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Decorative perforated edge */}
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
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
                  <label className="block text-white font-bold mb-2">
                    Your Reference Code
                  </label>
                  <div className="flex items-center justify-between bg-white/20 rounded-xl p-3">
                    <span className="text-neon-yellow font-mono text-lg font-bold">
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
                  <p className="text-white/70 text-sm mt-2">
                    Use this code in your transfer description
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Details */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neon-yellow/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-deep-purple mb-2">
                    Complete Your Payment
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Make a bank transfer to secure your early bird tickets
                  </p>
                </div>

                {/* Bank Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-festival-orange transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-6 h-6 text-deep-purple" />
                          <span className="font-bold text-gray-700">
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
                      <p className="text-2xl font-mono font-bold text-deep-purple">
                        {bankDetails.accountNumber}
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-festival-orange transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <User className="w-6 h-6 text-deep-purple" />
                        <span className="font-bold text-gray-700">
                          Account Name
                        </span>
                      </div>
                      <p className="text-xl font-bold text-deep-purple">
                        {bankDetails.accountName}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-festival-orange transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <Building className="w-6 h-6 text-deep-purple" />
                        <span className="font-bold text-gray-700">
                          Bank Name
                        </span>
                      </div>
                      <p className="text-xl font-bold text-deep-purple">
                        {bankDetails.bankName}
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-neon-yellow/20 to-festival-orange/20 border-3 border-neon-yellow rounded-2xl">
                      <div className="text-center">
                        <p className="font-bold text-deep-purple text-lg mb-2">
                          Amount to Transfer
                        </p>
                        <p className="text-4xl font-bold text-deep-purple">
                          {formatCurrency(total)}
                        </p>
                        <p className="text-festival-orange font-semibold mt-1">
                          Early Bird Price!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Steps */}
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-6 mb-6">
                  <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Quick Payment Steps:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ol className="text-blue-700 space-y-2 list-decimal list-inside">
                      <li className="font-medium">
                        Transfer exact amount above
                      </li>
                      <li className="font-medium">
                        Include reference code in description
                      </li>
                    </ol>
                    <ol
                      className="text-blue-700 space-y-2 list-decimal list-inside"
                      start="3"
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
                  className="w-full bg-gradient-to-r from-deep-purple via-festival-purple to-festival-magenta text-white py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 group"
                >
                  <Mail className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Send Payment Confirmation</span>
                  <Star className="w-6 h-6 group-hover:animate-spin" />
                </button>

                {/* <Button
                  asChild
                  className="w-full bg-gradient-to-r from-deep-purple via-festival-purple to-festival-magenta text-white py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 group"
                >
                  <Link to="mailto:giftobafaiye@gmail.com">
                    <Mail className="w-6 h-6 group-hover:animate-bounce" />
                    <span>Send Payment Confirmation</span>
                    <Star className="w-6 h-6 group-hover:animate-spin" />
                  </Link>
                </Button> */}

                <div className="text-center mt-4 space-y-2">
                  <p className="text-gray-600 font-medium">
                    📧 Email:{" "}
                    <span className="text-deep-purple font-bold">
                      giftobafaiye@gmail.com
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
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
