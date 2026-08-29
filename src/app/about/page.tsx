import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      
      {/* Container for Our Story (Full screen center) */}
      <div className="w-full bg-[#FAFAF8] min-h-[calc(100vh-85px)] flex items-center pt-[100px]">
        <div className="max-w-[1280px] w-full mx-auto relative overflow-hidden px-6 lg:px-[60px] py-12 lg:py-16">
          
          {/* Our Story Section (Asymmetric) */}
          <AnimatedSection className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="w-full lg:w-[35%] flex flex-col gap-4 text-center lg:text-left">
              <div className="inline-block self-center lg:self-start">
                <h1 className="font-display font-normal text-4xl lg:text-[48px] leading-[1.1] tracking-tight text-brand-dark relative inline-block">
                  Our Story
                  <div className="absolute left-0 -bottom-1 h-[4px] w-[85%] bg-brand-primary"></div>
                </h1>
              </div>
              <p className="font-body font-semibold text-lg lg:text-base text-gray-500 mt-2 max-w-[250px] mx-auto lg:mx-0">
                Born from a desire to make sacred texts accessible.
              </p>
            </div>

            {/* Right Column (Boxes) */}
            <div className="w-full lg:w-[65%] flex flex-col gap-6">
              <div className="bg-[#F3F4F6] p-8 lg:p-12 rounded-md">
                <p className="font-body font-semibold text-xl lg:text-lg text-gray-950 leading-relaxed">
                  Founder Papiya Ranabijayini Samal spent seven years immersed in the study of the Gita. Reading, reflecting, and returning to its 754 shlokas again and again, she began to notice which verses consistently brought clarity in moments of doubt, and steadiness in moments of change. From this study, she selected 27 shlokas, the foundation of the Gita diary, chosen not for their popularity but for their power to hold a person through everyday life.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Vision Section (Full width dark background) */}
      <AnimatedSection className="w-full bg-brand-dark py-12 lg:py-16">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-[60px] text-center flex flex-col gap-4 items-center">
          <svg className="w-10 h-10 text-brand-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <h2 className="font-display font-normal text-3xl lg:text-[40px] leading-[1.1] tracking-tight text-white mb-4">Our Vision</h2>
          <p className="font-body font-semibold text-xl lg:text-lg text-brand-tan leading-relaxed">
            To foster a global community rooted in Dharma, where individuals find balance and strength through the systematic study and application of eternal wisdom. We envision a world where the principles of the Gita inspire mindful action and universal well-being.
          </p>
        </div>
      </AnimatedSection>

      {/* Container for Purpose, Approach, Who We Serve */}
      <div className="max-w-[1280px] w-full mx-auto relative overflow-hidden px-6 lg:px-[60px] py-16 lg:py-24 space-y-20 lg:space-y-32">

        {/* Purpose Section (Image Left, Text Right) */}
        {/* Mobile: Image on top -> flex-col lg:flex-row */}
        <AnimatedSection className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
           <div className="w-full max-w-[360px] lg:max-w-none mx-auto lg:w-[500px] h-[250px] lg:h-[350px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-primary/10">
            <Image 
              src="/images/usha_kiran_lke8fsdqqtc_unsplash_1.png" 
              alt="Our Purpose" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-display font-normal text-3xl lg:text-[40px] leading-[1.1] tracking-tight text-brand-dark">Our Purpose</h2>
            <p className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-gray-950">
              Gita Gurukul was born from a simple belief: that the wisdom of the Bhagavad Gita, when engaged with daily, can quietly reshape how a person moves through the world. Not through grand gestures, but through steady, focused presence.
            </p>
          </div>
        </AnimatedSection>

        {/* Approach Section (Text Left, Image Right) */}
        {/* Mobile: Image on top -> flex-col-reverse lg:flex-row */}
        <AnimatedSection className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-display font-normal text-3xl lg:text-[40px] leading-[1.1] tracking-tight text-brand-dark">Our Approach</h2>
            <div className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-gray-950 flex flex-col gap-2 text-center lg:text-left">
              <p>Everything we make is built around three ideas:</p>
              <p>Depth over volume. Twenty-seven shlokas, chosen with care, rather than an overwhelming compilation.</p>
              <p>Practice over theory. A diary format that invites daily engagement, not a one-time read.</p>
              <p>Devotion over trend. Rooted in Krishna consciousness, not repackaged as a lifestyle product.</p>
            </div>
          </div>
          <div className="w-full max-w-[360px] lg:max-w-none mx-auto lg:w-[500px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-primary/10">
            <Image 
              src="/images/vd_photography_v8qhvuponc_unsplash_1.png" 
              alt="Our Approach" 
              width={500}
              height={350}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </AnimatedSection>

        {/* Who We Serve Section (Image Left, Text Right) */}
        {/* Mobile: Image on top -> flex-col lg:flex-row */}
        <AnimatedSection className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
           <div className="w-full max-w-[360px] lg:max-w-none mx-auto lg:w-[500px] h-[250px] lg:h-[350px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-primary/10">
            <Image 
              src="/images/sai_sai_jc_cyvf5jmk_unsplash_1.png" 
              alt="Who We Serve" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-display font-normal text-3xl lg:text-[40px] leading-[1.1] tracking-tight text-brand-dark">Who We Serve</h2>
            <p className="font-body font-semibold text-xl lg:text-lg leading-relaxed text-gray-950">
              Gita Gurukul is for anyone seeking to bring more calm, focus, and meaning into daily life, whether you are new to the Gita or have walked with it for years. There is no prerequisite of knowledge, only a willingness to sit with the text and let it work.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
