import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-footer py-4 lg:py-6 mt-12">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-[60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Side: Logo & Description aligned perfectly with Navbar */}
        <div className="flex flex-col gap-3 max-w-sm">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/sss_adjusted_1.png"
              alt="Gita Gurukul Logo"
            width={240}
            height={120}
            className="w-[160px] lg:w-[200px] h-auto object-contain"
            />
          </Link>
          <p className="font-body font-semibold text-sm text-brand-tan">
            Dedicated to spreading eternal wisdom through mindful tools designed for the modern seeker.
          </p>
        </div>
        
        {/* Right Side: Links & Copyright */}
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-4 md:gap-8 font-nav text-sm font-medium text-brand-tan/90">
            <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link>
          </div>
          <p className="font-body font-semibold text-xs text-brand-tan/50">
            © 2026 Gita Gurukul. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
