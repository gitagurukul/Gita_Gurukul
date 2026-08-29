import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="bg-[#FDFBF7]">
      <div className="max-w-[1280px] w-full mx-auto relative px-6 lg:px-[60px]">
        
        {/* HERO SECTION */}
        <AnimatedSection className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 min-h-screen pt-[100px]">
          
          {/* Hero Left Content */}
          <div className="w-full lg:flex-1 flex flex-col gap-5 lg:pr-8 text-center lg:text-left items-center lg:items-start">
            <h1 className="font-display font-normal text-5xl lg:text-[64px] leading-[1.1] tracking-tight text-brand-dark">
              A diary worth the success
            </h1>
            <p className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-gray-950">
              Discover the transformative power of ancient Vedic wisdom. This Bhagavad Gita diary contains 27 handpicked shlokas carefully curated to guide your daily reflection and spiritual growth. As you engage with these profound teachings, your mind grows steadier, calmer, and more focused. A perfect companion for anyone seeking mindfulness, inner peace, and a deeper connection to Krishna consciousness in the modern world, one page at a time.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 self-center">
              <Link 
                href="/shop"
                className="bg-brand-primary text-white font-button font-medium text-lg px-8 py-3 rounded-md shadow-md flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300 self-center lg:self-start" 
              >
                <span>Buy now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
          
          {/* Hero Right Image */}
          <div className="w-full max-w-[320px] lg:max-w-none mx-auto lg:w-[400px] flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-full">
              <Image 
                src="/images/screenshot_from_2026_07_12_18_39_10_1.png" 
                alt="Bhagavad Gita Diary" 
                width={400} 
                height={400} 
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* MISSION TEASER SECTION */}
        <AnimatedSection className="flex flex-col items-center py-12 lg:py-16">
          <div className="w-full bg-brand-dark border-t-[6px] border-brand-primary shadow-lg rounded-sm flex flex-col items-center py-12 px-6 lg:px-16 text-center">
          <svg className="w-10 h-10 text-brand-primary mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6h8l-6.4 4.8 2.4 7.6-6.4-4.8-6.4 4.8 2.4-7.6-6.4-4.8h8z" /></svg>
          <h2 className="font-display font-normal text-3xl lg:text-[40px] leading-[1.1] tracking-tight text-white mb-6">
            Why Thousands Begin Their Day With the Gita
          </h2>
          <p className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-brand-tan">
            The teachings of the Bhagavad Gita aren't just meant to be read—they are meant to be lived.<br />
            Our unique spiritual journal transforms timeless Hindu philosophy and ancient Vedic wisdom into practical daily exercises. This guided reflection process helps you build better habits, strengthen your mindset, and cultivate <span>deep inner peace.</span><br />
            Whether you're a student, professional, entrepreneur, or a dedicated spiritual seeker in Rishikesh or beyond, each day offers one small step toward a more balanced, mindful, and successful life rooted in Krishna consciousness.
          </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-16 py-12 lg:py-16">
          
          <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-display font-normal text-5xl lg:text-[64px] leading-[1.1] tracking-tight text-brand-dark">About Us</h2>
            <p className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-gray-950">
              Gita Gurukul was created to help you build a life of calmness, focus, success, and devotion. Founder Papiya Ranabijayini Samal spent seven years studying the Gita in depth, and from its 754 shlokas, selected the 27 that offer the clearest path to mastering calmness and achieving greatness in life.
            </p>
            <Link 
              href="/about" 
              className="bg-brand-primary text-white font-button font-medium text-lg px-8 py-3 rounded-md shadow-md flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300 mt-4 self-center"
            >
              <span>Our Story</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
          
          <div className="w-full max-w-[320px] lg:max-w-none mx-auto lg:w-[450px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-primary/10">
            <Image 
              src="/images/oleg_churakov_akr89i3xf94_unsplash_1.png" 
              alt="About Us" 
              width={450} 
              height={315} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </AnimatedSection>

        {/* DONATION SECTION */}
        <AnimatedSection className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 py-12 lg:py-16">
          
          <div className="w-full max-w-[320px] lg:max-w-none mx-auto lg:w-[450px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-primary/10">
            <Image 
              src="/images/manojkumar_bathala_jqfrgnf7cqo_unsplash_1.png" 
              alt="Donation" 
              width={450} 
              height={315} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-display font-normal text-5xl lg:text-[64px] leading-[1.1] tracking-tight text-brand-dark">
              Support Our Mission
            </h2>
            <p className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-gray-950">
              Gita Gurukul is a dedicated e-commerce and donation platform designed to spread the wisdom of the Bhagavad Gita. By creating a secure account, users can seamlessly purchase our curated spiritual diaries, manage their order history, and make charitable donations to support spiritual seekers in Rishikesh. Your account allows us to securely process payments and deliver physical products directly to your shipping address.
            </p>
            <Link 
              href="/donate" 
              className="bg-brand-primary text-white font-button font-medium text-lg px-8 py-3 rounded-md shadow-md flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300 mt-4 self-center"
            >
              <span>Donate Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
