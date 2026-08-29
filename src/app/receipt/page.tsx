"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReceiptContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "ORD-MOCK-9999";
  const amount = searchParams.get("amount") || "799";

  return (
    <div className="bg-white rounded-lg shadow-xl border border-brand-tan/20 overflow-hidden text-center p-10 flex flex-col items-center w-full">
      <div className="w-20 h-20 bg-[#f0fdf4] text-[#166534] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#bbf7d0]">
        <CheckCircle size={40} />
      </div>

      <h1 className="font-display font-normal text-3xl lg:text-4xl text-brand-dark mb-4">
        Payment Successful!
      </h1>
      <p className="font-body text-gray-600 text-lg mb-8">
        Thank you for your purchase. We are preparing your Bhagavad Gita diaries for shipping.
      </p>

      <div className="w-full bg-gray-50 border border-gray-100 rounded-md p-6 text-left mb-8">
        <h3 className="font-display font-normal text-lg text-brand-dark mb-4 border-b border-gray-200 pb-2">Order Summary</h3>
        <div className="flex justify-between items-center mb-2 font-body text-gray-700">
          <span>Order ID:</span>
          <span className="font-semibold font-display break-all ml-4 text-right">{orderId}</span>
        </div>
        <div className="flex justify-between items-center mb-2 font-body text-gray-700">
          <span>Amount Paid:</span>
          <span className="font-bold text-brand-primary">₹{amount}</span>
        </div>
        <div className="flex justify-between items-center font-body text-gray-700">
          <span>Status:</span>
          <span className="text-[#166534] font-bold text-sm bg-[#f0fdf4] px-2 py-1 rounded">Processing</span>
        </div>
      </div>

      <Link href="/profile">
        <button className="bg-brand-primary text-white font-button font-bold px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 transition-all flex items-center gap-2">
          <ArrowLeft size={20} /> Return to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default function ReceiptPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf7f2] pt-[140px] pb-20 items-center justify-center">
      <AnimatedSection className="max-w-xl w-full mx-auto px-6">
        <Suspense fallback={<div>Loading receipt...</div>}>
          <ReceiptContent />
        </Suspense>
      </AnimatedSection>
    </div>
  );
}
