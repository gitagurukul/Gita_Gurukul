"use client";

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ShieldCheck, ArrowRight, Loader2, MapPin, User, Mail, Phone } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, loginIntent, checkoutData, updateProfileState, profile, initRazorpay } = useAuth();
  const router = useRouter();
  
  const [step, setStep] = useState<"SIGN_IN" | "ADDRESS">("SIGN_IN");
  const [loading, setLoading] = useState(false);
  
  const [addressData, setAddressData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    if (isLoginModalOpen) {
      setStep("SIGN_IN");
      setLoading(false);
    }
  }, [isLoginModalOpen]);

  if (!isLoginModalOpen) return null;

  const handleResolveIntent = async (currentProfile: any) => {
    if (loginIntent === "CHECKOUT" && checkoutData) {
      closeLoginModal(); // Close modal first, then open razorpay
      await initRazorpay(checkoutData, currentProfile);
    } else if (loginIntent === "PROFILE") {
      closeLoginModal();
      router.push("/profile");
    } else {
      closeLoginModal();
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists() && docSnap.data().address && docSnap.data().pincode) {
        toast.success("Logged in successfully!");
        updateProfileState(docSnap.data() as any);
        await handleResolveIntent(docSnap.data());
      } else {
        toast.success("Logged in successfully! Please complete your profile.");
        if (docSnap.exists()) {
          setAddressData(prev => ({
            ...prev, 
            ...docSnap.data(),
            name: docSnap.data().name || user.displayName || "",
            email: docSnap.data().email || user.email || ""
          }));
        } else {
           setAddressData(prev => ({
            ...prev,
            name: user.displayName || "",
            email: user.email || ""
          }));
        }
        setStep("ADDRESS");
      }
    } catch (error: any) {
      console.error(error);
      if (error.code !== 'auth/popup-closed-by-user') {
        toast.error("Error signing in with Google.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No authenticated user");
      
      const updatedProfile = {
        ...addressData,
      };
      await setDoc(doc(db, "users", user.uid), updatedProfile, { merge: true });
      updateProfileState(updatedProfile);
      toast.success("Shipping details saved!");
      await handleResolveIntent(updatedProfile);
    } catch (error: any) {
      console.error(error);
      toast.error("Error saving details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <Toaster position="top-center" />
      
      <div className={`bg-[#FDFBF7] rounded-lg shadow-2xl w-full transition-all duration-300 animate-in zoom-in-95 overflow-hidden ${step === "ADDRESS" ? "max-w-2xl" : "max-w-md"}`}>
        
        {/* Header */}
        <div className="bg-[#faf7f2] px-6 py-4 flex items-center justify-between border-b border-brand-tan/20">
          <h2 className="font-display font-normal text-xl text-brand-dark flex items-center gap-2">
            <ShieldCheck className="text-brand-primary" />
            {step === "ADDRESS" ? "Complete Your Profile" : "Secure Login"}
          </h2>
          <button 
            onClick={closeLoginModal}
            className="text-gray-400 hover:text-brand-dark transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[80vh] overflow-y-auto">
          {step === "SIGN_IN" && (
            <div className="flex flex-col gap-6">
              <div className="text-center mb-2">
                <p className="font-body font-semibold text-gray-950">
                  Sign in securely with your Google account to continue.
                </p>
              </div>

              <button 
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full bg-[#FDFBF7] border border-gray-300 text-black font-body font-semibold text-base py-3 px-4 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-primary flex items-center justify-center gap-3 transition-all"
              >
                {loading ? (
                  <Loader2 className="animate-spin text-gray-500" size={20} />
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>
            </div>
          )}

          {step === "ADDRESS" && (
            <form onSubmit={handleSaveAddress} className="flex flex-col gap-6">
              <div className="text-center mb-6">
                <p className="font-body font-semibold text-gray-950">
                  We need your shipping details to complete the setup.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-semibold text-black flex items-center gap-2">
                    <User size={16} className="text-brand-primary" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    value={addressData.name}
                    onChange={(e) => setAddressData({...addressData, name: e.target.value})}
                    placeholder="Enter your full name" 
                    className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body font-semibold text-sm focus:outline-brand-primary" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-semibold text-black flex items-center gap-2">
                    <Mail size={16} className="text-brand-primary" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    value={addressData.email}
                    onChange={(e) => setAddressData({...addressData, email: e.target.value})}
                    placeholder="Enter your email" 
                    className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body font-semibold text-sm focus:outline-brand-primary" 
                  />
                </div>
                
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-body text-sm font-semibold text-black flex items-center gap-2">
                    <Phone size={16} className="text-brand-primary" /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={addressData.phone}
                    onChange={(e) => setAddressData({...addressData, phone: e.target.value.replace(/\D/g, '')})}
                    placeholder="Enter your mobile number" 
                    className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body font-semibold text-sm focus:outline-brand-primary" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-body text-sm font-semibold text-black flex items-center gap-2">
                    <MapPin size={16} className="text-brand-primary" /> Complete Address
                  </label>
                  <textarea 
                    value={addressData.address}
                    onChange={(e) => setAddressData({...addressData, address: e.target.value})}
                    placeholder="House No, Street, Landmark" 
                    rows={2}
                    className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body font-semibold text-sm focus:outline-brand-primary resize-none" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-semibold text-black">State</label>
                  <input 
                    type="text" 
                    value={addressData.state}
                    onChange={(e) => setAddressData({...addressData, state: e.target.value})}
                    placeholder="Enter your state" 
                    className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body font-semibold text-sm focus:outline-brand-primary" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-sm font-semibold text-black">Pincode</label>
                  <input 
                    type="text" 
                    value={addressData.pincode}
                    onChange={(e) => setAddressData({...addressData, pincode: e.target.value})}
                    placeholder="6-digit pincode" 
                    maxLength={6}
                    className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body font-semibold text-sm focus:outline-brand-primary" 
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-brand-primary text-white font-button font-bold text-lg py-3 rounded-md shadow-md hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : "Submit and Proceed"}
                {!loading && <ArrowRight size={20} />}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
