"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, openLoginModal } = useAuth();
  const router = useRouter();

  const handleProfileClick = () => {
    if (user) {
      router.push("/profile");
    } else {
      openLoginModal("PROFILE");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-50 flex flex-col transition-all duration-300 backdrop-blur-md bg-brand-dark/95 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-brand-primary/10">
      <div className="w-full">
        <nav className="w-full max-w-[1280px] mx-auto h-[85px] flex justify-between items-center px-6 lg:px-[60px]">
        
        {/* Standardized Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <Image
            src="/images/sss_adjusted_1.png"
            alt="Gita Gurukul Logo"
            width={240}
            height={110}
            className="w-[140px] md:w-[160px] lg:w-[200px] h-auto object-contain"
          />
        </Link>
        
        {/* Navigation Links and Button */}
        <div className="flex items-center gap-4 md:gap-10">
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-white font-nav font-bold text-lg hover:text-brand-primary transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/shop" className="text-white font-nav font-bold text-lg hover:text-brand-primary transition-colors cursor-pointer">
              Shop
            </Link>
            <Link href="/about" className="text-white font-nav font-bold text-lg hover:text-brand-primary transition-colors cursor-pointer">
              About
            </Link>
          </div>
          
          {/* Desktop/Tablet Donate Button */}
          <Link href="/donate" className="hidden sm:block">
            <button 
              type="button" 
              className="bg-brand-primary text-white border-none font-button font-bold text-lg px-6 md:px-10 py-3 rounded-md shadow-md hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300 cursor-pointer"
            >
              Donate
            </button>
          </Link>

          {/* User Profile Icon */}
          <button 
            onClick={handleProfileClick}
            className="hidden md:flex text-white hover:text-brand-primary transition-colors ml-2"
            aria-label="User Profile"
          >
            <CircleUser strokeWidth={2} size={32} />
          </button>

          {/* Mobile Hamburger Icon */}
          <button 
            className="md:hidden text-white hover:text-brand-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-tan/10 w-full absolute top-full left-0 shadow-lg flex flex-col px-6 py-8 gap-6 animate-in slide-in-from-top-2 fade-in duration-200">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-nav font-bold text-xl hover:text-brand-primary transition-colors text-center cursor-pointer"
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-nav font-bold text-xl hover:text-brand-primary transition-colors text-center cursor-pointer"
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-nav font-bold text-xl hover:text-brand-primary transition-colors text-center cursor-pointer"
          >
            About
          </Link>
          <Link 
            href="/donate" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden w-full mt-2"
          >
            <button 
              type="button" 
              className="w-full bg-brand-primary text-white font-button font-bold text-xl px-6 py-4 rounded-md shadow-md hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300 cursor-pointer"
            >
              Donate Now
            </button>
          </Link>
          <button 
            onClick={handleProfileClick}
            className="text-white font-nav font-bold text-xl hover:text-brand-primary transition-colors text-center w-full py-2 border border-brand-tan/20 rounded-md"
          >
            {user ? "My Profile" : "Login / Register"}
          </button>
        </div>
      )}
    </div>
  );
}
