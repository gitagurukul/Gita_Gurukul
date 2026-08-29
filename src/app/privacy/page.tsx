

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-[100px] pb-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[60px]">
        <h1 className="font-display font-normal text-4xl lg:text-5xl text-brand-dark mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="font-body font-semibold text-xl lg:text-lg text-black space-y-8 leading-relaxed">
          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">1. Introduction</h2>
            <p>
              Gita Gurukul ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us when you visit our website, follow our social media pages, or purchase our diaries and related products (collectively, the "Platform"). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of information when you interact with us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Contact details:</strong> name, email address, phone number, shipping and billing address.</li>
              <li><strong>Order information:</strong> products purchased, order history, payment confirmation details (we do not store full card or UPI credentials — these are processed securely by our payment gateway partners).</li>
              <li><strong>Communication data:</strong> messages, feedback, or reviews you send us via email, forms, or social media.</li>
              <li><strong>Technical data:</strong> IP address, browser type, device information, and website usage data collected automatically through cookies or similar technologies, where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Process, fulfil, and deliver your orders.</li>
              <li>Communicate with you about your order, including confirmations, shipping updates, and customer support.</li>
              <li>Respond to your queries, feedback, or complaints.</li>
              <li>Improve our Products, Platform, and customer experience.</li>
              <li>Send you promotional updates or offers, where you have opted in to receive them (you may opt out at any time).</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">4. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Courier and logistics partners, to deliver your orders.</li>
              <li>Payment gateway providers, to process your payments securely.</li>
              <li>Service providers who assist us with hosting, analytics, or customer communication, under confidentiality obligations.</li>
              <li>Law enforcement or regulatory authorities, where required by applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">5. Cookies & Tracking</h2>
            <p>
              Our Platform may use cookies or similar tracking technologies to improve browsing experience and understand how visitors use our site. You can control or disable cookies through your browser settings; note that some features of the Platform may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">6. Data Storage & Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes described in this Policy, including order processing, customer support, legal compliance, and record-keeping, after which it will be securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">8. Your Rights & Choices</h2>
            <p>Depending on applicable law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access, correct, or update the personal information we hold about you.</li>
              <li>Request deletion of your personal information, subject to legal or contractual retention requirements.</li>
              <li>Opt out of marketing communications at any time by using the unsubscribe link or contacting us directly.</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, please contact us using the details below.</p>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">9. Children's Privacy</h2>
            <p>
              Our Products and Platform are not directed at children under 18. We do not knowingly collect personal information from minors without parental or guardian consent.
            </p>
          </section>

          <section>
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on the Platform with a revised "Last updated" date.
            </p>
          </section>

          <section className="bg-brand-tan/20 p-6 rounded-lg mt-8">
            <h2 className="font-display font-normal text-2xl text-brand-dark mb-3">11. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:</p>
            <div className="mt-4 font-medium">
              <p><strong>Gita Gurukul</strong></p>
              <p>Email: <a href="mailto:gitagurukulm@gmail.com" className="text-brand-primary hover:underline">gitagurukulm@gmail.com</a></p>
              <p>Phone: +91 81180 43178</p>
              <p>Address: Rishikesh, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
