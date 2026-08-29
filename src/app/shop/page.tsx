"use client";

import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";

export default function Shop() {
  const [quantity, setQuantity] = useState(1);
  const { user, profile, openLoginModal, initRazorpay } = useAuth();
  const router = useRouter();

  const PRICE_PER_ITEM = 799;
  const totalPrice = quantity * PRICE_PER_ITEM;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handleCheckout = () => {
    const data = { amount: totalPrice, items: quantity + "x Bhagavad Gita Diary" };
    if (!user) {
      openLoginModal("CHECKOUT", data);
    } else if (!profile?.address || !profile?.pincode) {
      openLoginModal("CHECKOUT", data); 
    } else {
      initRazorpay(data, profile);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <div className="max-w-[1280px] w-full mx-auto pt-[100px] pb-8 px-6 lg:px-[60px]">
        <div className="flex flex-col gap-4 mb-12 lg:mb-16 text-center lg:text-left items-center lg:items-start">
          <h1 className="font-display font-normal text-5xl lg:text-[64px] leading-[1.1] tracking-tight text-brand-dark">
            Curated Editions
          </h1>
          <p className="font-body font-semibold text-xl lg:text-lg text-black">
            Discover our collection of beautifully bound Bhagavad Gita diaries, designed for reflection and daily wisdom.
          </p>
        </div>
      
        <div className="w-full">
          {/* Main Product Area */}
          <main className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-[450px] flex-shrink-0 relative bg-[#faf7f2] p-6 lg:p-10 border border-brand-tan/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-primary/10 flex items-center justify-center">
              <Image 
                src="/images/screenshot_from_2026_07_12_18_39_10_1.png" 
                alt="Gita Gurukul Diary" 
                width={400} 
                height={400} 
                className="w-full max-w-[350px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
            
            <div className="w-full lg:flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
              <div>
                <h2 className="font-display font-normal text-4xl lg:text-[48px] leading-[1.1] tracking-tight text-brand-dark mb-4">Gita Gurukul Diary</h2>
                <p className="font-body font-semibold text-lg text-gray-950 max-w-lg">
                  A perfect companion for daily reflection. Features 27 handpicked shlokas carefully curated to bring calmness and focus.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-2">
                <span className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wider">Select Quantity</span>
                <div className="flex items-center gap-6 bg-gray-50 border border-gray-200 rounded-md p-2 px-4 self-center lg:self-start">
                  <button 
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    className="p-2 text-brand-dark hover:text-brand-primary disabled:opacity-30 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="font-display font-normal text-2xl w-8 text-center text-brand-dark">{quantity}</span>
                  <button 
                    onClick={handleIncrease}
                    disabled={quantity >= 10}
                    className="p-2 text-brand-dark hover:text-brand-primary disabled:opacity-30 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-6 border-t border-gray-100 w-full max-w-md flex flex-col gap-4 items-center lg:items-start">
                <div className="flex items-center gap-2">
                  <span className="font-body font-semibold text-gray-500 text-lg">Total Price:</span>
                  <span className="font-display font-normal text-3xl text-brand-primary flex items-center gap-1">
                    <span>₹</span> <span>{totalPrice}</span>
                  </span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-brand-primary text-white font-button font-bold text-lg py-4 px-8 rounded-md shadow-lg hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
