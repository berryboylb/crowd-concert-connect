
import React, { useState } from "react";
import { Copy, Mail, Check, User, Building, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BankTransferTicket = () => {
  const [quantity, setQuantity] = useState(1);
  const [hasCopied, setHasCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const ticketPrice = 1500;
  const total = quantity * ticketPrice;
  const referenceCode = `CC${Date.now().toString().slice(-8)}`;

  const bankDetails = {
    accountNumber: "6053667376",
    bankName: "Moniepoint Microfinance Bank",
    accountName: "Obafaiye Gift"
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
    const subject = encodeURIComponent(`Crowd Concert Payment Confirmation - ${referenceCode}`);
    const body = encodeURIComponent(`Hello,

I have made a payment for The Crowd Concert tickets.

Payment Details:
- Quantity: ${quantity} ticket(s)
- Amount: ${formatCurrency(total)}
- Reference Code: ${referenceCode}
- Bank: ${bankDetails.bankName}
- Account Number: ${bankDetails.accountNumber}

I have attached the payment receipt as evidence.

Thank you.`);

    window.open(`mailto:giftobafaiye@gmail.com?subject=${subject}&body=${body}`);
  };

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
          <p className="text-white/80 text-lg">
            Secure your spot with bank transfer payment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Ticket Selection */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-neon-yellow/30 shadow-2xl">
            {/* Ticket Type */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                General Admission
              </h3>
              <p className="text-white/80">Access to Concert</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3 text-center">
                Quantity
              </label>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="w-12 h-12 bg-festival-purple rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-festival-magenta transition-colors"
                >
                  <span className="text-xl">−</span>
                </button>

                <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                  <span className="text-xl font-bold text-deep-purple">
                    {quantity}
                  </span>
                </div>

                <button
                  onClick={incrementQuantity}
                  disabled={quantity >= 10}
                  className="w-12 h-12 bg-festival-purple rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-festival-magenta transition-colors"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className="mb-6 text-center">
              <p className="text-white/80 mb-2">
                Price per ticket: {formatCurrency(ticketPrice)}
              </p>
              <p className="text-3xl font-bold text-neon-yellow animate-glow-pulse">
                Total: {formatCurrency(total)}
              </p>
            </div>

            {/* Reference Code */}
            <div className="mb-6 p-4 bg-white/10 rounded-lg border border-neon-yellow/30">
              <label className="block text-white font-semibold mb-2">
                Your Reference Code
              </label>
              <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                <span className="text-neon-yellow font-mono text-lg font-bold">
                  {referenceCode}
                </span>
                <button
                  onClick={() => copyToClipboard(referenceCode, "Reference code")}
                  className="text-white hover:text-neon-yellow transition-colors"
                >
                  {hasCopied === "Reference code" ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Include this reference in your transfer description
              </p>
            </div>
          </div>

          {/* Right Column - Payment Details */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-deep-purple mb-2">
                Payment Details
              </h3>
              <p className="text-gray-600">
                Make payment to the account below
              </p>
            </div>

            {/* Bank Details */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-deep-purple" />
                    <span className="font-semibold text-gray-700">Account Number</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
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

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Building className="w-5 h-5 text-deep-purple" />
                  <span className="font-semibold text-gray-700">Bank Name</span>
                </div>
                <p className="text-lg font-bold text-deep-purple">
                  {bankDetails.bankName}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-5 h-5 text-deep-purple" />
                  <span className="font-semibold text-gray-700">Account Name</span>
                </div>
                <p className="text-lg font-bold text-deep-purple">
                  {bankDetails.accountName}
                </p>
              </div>

              <div className="p-4 bg-neon-yellow/10 border-2 border-neon-yellow rounded-lg">
                <div className="text-center">
                  <p className="font-semibold text-deep-purple mb-1">Amount to Pay</p>
                  <p className="text-3xl font-bold text-deep-purple">
                    {formatCurrency(total)}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h4 className="font-bold text-blue-800 mb-2">Payment Instructions:</h4>
              <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
                <li>Transfer the exact amount to the account above</li>
                <li>Use the reference code in your transfer description</li>
                <li>Take a screenshot of your payment receipt</li>
                <li>Send confirmation email with receipt attached</li>
              </ol>
            </div>

            {/* Confirmation Button */}
            <button
              onClick={handleEmailConfirmation}
              className="w-full bg-gradient-to-r from-deep-purple to-festival-purple text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Payment Confirmation</span>
            </button>

            <p className="text-gray-500 text-sm text-center mt-4">
              Email: giftobafaiye@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankTransferTicket;
