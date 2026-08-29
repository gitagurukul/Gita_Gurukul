"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the Gita Gurukul Diary?",
      answer: "The Gita Gurukul Diary is a beautifully crafted journal containing 27 handpicked shlokas from the Bhagavad Gita. It is designed to help modern seekers practice daily reflection, mindfulness, and integrate ancient Vedic wisdom into their everyday lives."
    },
    {
      question: "Where is Gita Gurukul based?",
      answer: "Our spiritual roots and operations are based in the sacred city of Rishikesh, India—nestled in the foothills of the Himalayas. Our team works year-round with seekers and monks in this holy region."
    },
    {
      question: "Do you ship your diaries internationally?",
      answer: "Yes, while we are proudly based in India, we ship our Bhagavad Gita diaries to spiritual seekers worldwide. Delivery times and shipping costs will vary depending on your global location."
    },
    {
      question: "Are these teachings suitable for beginners?",
      answer: "Absolutely. The shlokas and reflections included in our diary are carefully selected to be accessible to everyone, whether you are just beginning your journey into Hindu philosophy or have been practicing Krishna consciousness for years."
    },
    {
      question: "How does my purchase help the community?",
      answer: "A portion of every purchase goes directly towards supporting spiritual seekers and monks in Rishikesh and the Himalayas. We help provide essential food, clothing for harsh Himalayan winters, and safe shelter so their daily spiritual practice remains uninterrupted."
    },
    {
      question: "Can I return or exchange my diary?",
      answer: "Due to the personal nature of our journals, we can only accept returns or exchanges for products that arrive damaged or defective. Please contact our support team within 7 days of receiving your order with photographic proof."
    },
    {
      question: "How can I contact your team?",
      answer: "You can reach out to us anytime via email at gitagurukulm@gmail.com. We are always happy to connect with our community."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[100px] pb-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[60px]">
        <h1 className="font-display font-normal text-4xl lg:text-5xl text-brand-dark mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="font-body text-lg text-brand-primary font-medium text-center mb-12">
          Learn more about our mission, our Bhagavad Gita diaries, and our roots in Rishikesh.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-tan/10 p-6 lg:p-8 rounded-lg shadow-sm border border-brand-tan/20">
              <h3 className="font-display font-normal text-xl lg:text-2xl text-brand-dark mb-3">
                {faq.question}
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-body text-lg text-gray-600 mb-6">
            Still have questions? We'd love to hear from you.
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gitagurukulm@gmail.com&su=Inquiry%20from%20Gita%20Gurukul%20Website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary text-white font-button font-medium text-lg px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
