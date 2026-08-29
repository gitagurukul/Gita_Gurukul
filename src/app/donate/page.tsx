"use client";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Donate() {
  const { user, profile, openLoginModal, initRazorpay } = useAuth();
  
  const [selectedAmount, setSelectedAmount] = useState<number>(1001);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorMessage, setDonorMessage] = useState<string>("");

  const handleCheckout = () => {
    if (!donorName.trim()) {
      alert("Please enter your Full Name to proceed with the donation.");
      return;
    }

    const parsedCustom = parseInt(customAmount);
    const amount = (parsedCustom > 0) ? parsedCustom : selectedAmount;
    
    if (amount <= 0) return;
    
    if (amount < 101) {
      alert("Minimum donation amount is ₹101");
      return;
    }

    const data = { 
      amount, 
      items: "Donation to Gita Gurukul",
      donorName,
      donorMessage
    };
    
    if (!user) {
      openLoginModal("CHECKOUT", data);
    } else if (!profile?.address || !profile?.pincode) {
      openLoginModal("CHECKOUT", data);
    } else {
      initRazorpay(data, profile);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* How to give? Section */}
      <div className="w-full bg-white pt-[120px] pb-16 lg:pt-[160px] lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[60px] flex flex-col gap-12 lg:gap-16">

          <AnimatedSection className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Why Donate Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div>
                <h3 className="font-display font-normal text-2xl lg:text-3xl mb-4 text-brand-dark">Why Donate?</h3>
                <p className="font-body text-sm lg:text-base text-gray-700 leading-relaxed">
                  Your support is vital. By donating to Gita Gurukul, you are directly investing in the curation, design, and distribution of resources that bring ancient Vedic wisdom into modern daily lives.
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-[#D98A36]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-display font-normal text-[15px] lg:text-base text-brand-dark mb-1">Support that reaches those who need it most.</h4>
                    <p className="font-body text-xs lg:text-sm text-gray-600 leading-relaxed">
                      Every donation to Gita Gurukul goes directly toward two things: spreading Krishna consciousness through community celebration, and supporting spiritual seekers who have little else.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-[#D98A36]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-display font-normal text-[15px] lg:text-base text-brand-dark mb-1">Bhagavad Gita Jayanti</h4>
                    <p className="font-body text-xs lg:text-sm text-gray-600 leading-relaxed">
                      Each December, we mark Bhagavad Gita Jayanti with a large yagnya and a community food distribution for devotees. This is one of our most meaningful times of year, made possible entirely through donor support. Your contribution helps us hold this celebration with the scale and sincerity it deserves.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-[#D98A36]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-display font-normal text-[15px] lg:text-base text-brand-dark mb-1">Where Your Contribution Goes</h4>
                    <p className="font-body text-xs lg:text-sm text-gray-600 leading-relaxed">
                      Every rupee donated is directed toward these two efforts, the Gita Jayanti celebration and ongoing support for seekers in Rishikesh. No portion is set aside for anything beyond these purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN: Donation Form */}
            <div className="w-full lg:w-1/2 bg-[#F9F9F8] p-8 lg:p-10 shadow-sm border border-brand-border/10 rounded-sm">
              <h3 className="font-display font-normal text-2xl lg:text-3xl text-brand-dark mb-6">
                Make a Contribution
              </h3>
              
              <form className="flex flex-col gap-6">
                {/* Amount Selection */}
                <div className="flex flex-col gap-3">
                  <label className="font-body text-xs font-semibold text-brand-dark uppercase tracking-wide">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['101', '501', '1001', '1501', '2001'].map((amountStr) => {
                      const amountVal = parseInt(amountStr);
                      const isSelected = selectedAmount === amountVal && !customAmount;
                      return (
                        <button 
                          key={amountStr}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amountVal);
                            setCustomAmount("");
                          }}
                          className={`py-3 border font-display font-normal rounded-sm transition-colors text-sm lg:text-base ${
                            isSelected 
                              ? "bg-[#D98A36] text-white border-[#D98A36]" 
                              : "bg-transparent border-[#D98A36]/30 text-brand-dark hover:bg-[#D98A36] hover:text-white hover:border-[#D98A36]"
                          }`}
                        >
                          ₹{amountStr}
                        </button>
                      );
                    })}
                    <div className="flex items-center border border-[#D98A36]/30 bg-white rounded-sm px-3 py-3 col-span-1">
                      <span className="text-gray-500 mr-1 text-sm">₹</span>
                      <input 
                        type="number" 
                        placeholder="Custom" 
                        min="101"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) setSelectedAmount(0);
                        }}
                        onBlur={(e) => {
                          const val = parseInt(e.target.value);
                          if (val > 0 && val < 101) {
                            setCustomAmount("101");
                          }
                        }}
                        className="outline-none font-display font-normal w-full text-sm lg:text-base text-brand-dark bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs font-semibold text-brand-dark">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="border border-gray-200 bg-transparent rounded-sm p-3 font-body text-sm focus:outline-brand-primary" 
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs font-semibold text-brand-dark">Message (Optional)</label>
                    <textarea 
                      placeholder="Write a message to accompany your donation..." 
                      value={donorMessage}
                      onChange={(e) => setDonorMessage(e.target.value)}
                      className="border border-gray-200 bg-transparent rounded-sm p-3 font-body text-sm focus:outline-brand-primary resize-none h-24"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button 
                    type="button"
                    onClick={handleCheckout}
                    className="w-full bg-[#D98A36] text-white font-display font-normal text-lg py-4 rounded-sm shadow-md hover:bg-opacity-90 transition-all"
                  >
                    Donate Now
                  </button>
                </div>
              </form>
            </div>

          </AnimatedSection>
        </div>
      </div>

      {/* Hero Section (Background Image with Overlay Text) */}
      <div className="relative w-full h-[calc(100vh-85px)] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/1_1.png" 
            alt="Support Eternal Wisdom" 
            fill
            className="object-cover object-[center_25%]"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col gap-6">
          <h1 className="font-display font-normal text-4xl lg:text-[56px] leading-[1.1] tracking-tight text-white drop-shadow-md">
            Support the Journey of Eternal Wisdom
          </h1>
          <p className="font-body text-base lg:text-lg text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Your generous contribution helps us continue spreading the profound teachings of the Bhagavad Gita, creating tools for mindful reflection and spiritual growth.
          </p>
        </div>
      </div>

      {/* Who We Serve Section (Zig-zag Layout) */}
      <div className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[60px] flex flex-col gap-12 lg:gap-20">
          
          {/* Row 1: Text Left, Image Right */}
          <AnimatedSection className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:flex-1 flex flex-col gap-4 text-center lg:text-left">
              <h2 className="font-display font-normal text-4xl lg:text-[48px] leading-[1.1] tracking-tight text-brand-dark mb-2">
                Who We Serve
              </h2>
              <p className="font-body text-base lg:text-[17px] text-gray-700 leading-relaxed">
                Beyond our annual celebration, our team works year-round with spiritual seekers in the Himalayas, particularly in Rishikesh. Many arrive with little more than their devotion. We help provide:
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[250px] lg:h-[300px] relative rounded-sm overflow-hidden shadow-md">
              <Image 
                src="/images/tong_kbp_xpommw690he_unsplash_1.png" 
                alt="Monks gathering" 
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Row 2: Image Left, Text Right */}
          {/* Mobile: Image Top -> flex-col */}
          <AnimatedSection className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 h-[250px] lg:h-[300px] relative rounded-sm overflow-hidden shadow-md">
              <Image 
                src="/images/manojkumar_bathala_jqfrgnf7cqo_unsplash_1.png" 
                alt="Chariot" 
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:flex-1 flex flex-col gap-4 text-center lg:text-left">
              <div className="font-body text-base lg:text-[17px] text-gray-700 leading-relaxed space-y-2">
                <p>Food, so daily needs don't interrupt spiritual practice</p>
                <p>Clothing, especially through harsh Himalayan seasons</p>
                <p>Shelter and sleeping comfort, so rest is not a struggle</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* Taglines Banner */}
      <AnimatedSection className="w-full bg-[#EAE8E3] py-8 lg:py-10 border-y border-brand-border/20">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-4">
          <p className="font-display text-lg lg:text-xl font-normal tracking-wider text-[#D98A36] uppercase">
            Our goal is simple: to let these seekers focus on their spiritual path, unburdened by basic hardship.
          </p>
          <p className="font-display text-base lg:text-lg font-normal tracking-wider text-[#D98A36] uppercase">
            Whether large or small, your contribution becomes part of a larger act of devotion, helping others walk their own path toward the Gita's wisdom.
          </p>
        </div>
      </AnimatedSection>

    </div>
  );
}
