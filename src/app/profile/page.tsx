"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { User, MapPin, Mail, Phone, ShieldCheck, LogOut, Loader2, Edit3, Package, Calendar, IndianRupee } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, setDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const { user, profile, loading, updateProfileState, logout } = useAuth();
  const router = useRouter();
  
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        address: profile.address || "",
        state: profile.state || "",
        pincode: profile.pincode || "",
      });
      if (!profile.address || !profile.pincode) {
        setIsEditing(true);
      }
    }
  }, [profile]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const ordersRef = collection(db, "users", user.uid, "orders");
          const q = query(ordersRef, orderBy("date", "desc"));
          const querySnapshot = await getDocs(q);
          const fetchedOrders: any[] = [];
          querySnapshot.forEach((doc) => {
            fetchedOrders.push({ id: doc.id, ...doc.data() });
          });
          setOrders(fetchedOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoadingOrders(false);
        }
      }
    };
    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
        <Loader2 className="animate-spin text-brand-primary" size={48} />
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const updatedProfile = {
        ...formData,
        phone: user.phoneNumber || "",
      };
      await setDoc(doc(db, "users", user.uid), updatedProfile, { merge: true });
      updateProfileState(updatedProfile);
      toast.success("Profile saved successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-130px)] pt-[130px] bg-[#faf7f2] pb-20">
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto w-full px-6">
        
        <AnimatedSection className="mb-10 text-center flex flex-col items-center">
          <h1 className="font-display font-normal text-3xl lg:text-5xl text-brand-dark mb-4">
            Dashboard
          </h1>
          <p className="font-body text-gray-600 text-lg">
            Manage your account and view past purchases.
          </p>
        </AnimatedSection>

        {/* PROFILE CARD */}
        <AnimatedSection delay={100} className="bg-white rounded-lg shadow-sm border border-brand-tan/20 overflow-hidden mb-10">
          <div className="bg-brand-dark px-8 py-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white">
                <User size={32} />
              </div>
              <div>
                <h2 className="font-display font-normal text-2xl text-white">
                  {profile?.name || "Spiritual Seeker"}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-brand-primary">
                  <ShieldCheck size={16} />
                  <span className="text-sm font-semibold tracking-wide uppercase">Verified Member</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors border border-gray-600 hover:border-gray-400 rounded-md px-4 py-2 font-body text-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
              <h3 className="font-display font-normal text-xl text-brand-dark">
                Shipping Details
              </h3>
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 text-brand-primary hover:text-brand-dark transition-colors font-body text-sm font-semibold"
                >
                  <Edit3 size={16} /> Edit Details
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSave} className="animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-sm font-semibold text-gray-700">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body text-sm focus:outline-brand-primary" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body text-sm focus:outline-brand-primary" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-body text-sm font-semibold text-gray-700">Phone Number (Verified)</label>
                    <input type="text" value={user.phoneNumber || ""} disabled className="border border-gray-200 bg-gray-100 rounded-md p-3 font-body text-sm text-gray-500 cursor-not-allowed" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-body text-sm font-semibold text-gray-700">Complete Address</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} rows={2} className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body text-sm focus:outline-brand-primary resize-none" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-sm font-semibold text-gray-700">State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body text-sm focus:outline-brand-primary" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-sm font-semibold text-gray-700">Pincode</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} maxLength={6} className="border border-gray-200 bg-gray-50 rounded-md p-3 font-body text-sm focus:outline-brand-primary" required />
                  </div>
                </div>
                <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                  <button type="button" onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-brand-dark font-body font-semibold px-4">Cancel</button>
                  <button type="submit" disabled={saving} className="bg-brand-primary text-white font-button font-bold px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 transition-all flex items-center gap-2">
                    {saving ? <Loader2 className="animate-spin" size={20} /> : "Save Changes"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 animate-in fade-in duration-300">
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Address</p>
                  <p className="font-body text-brand-dark text-[15px]">{profile?.address || "No address provided."}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">State & Pincode</p>
                  <p className="font-body text-brand-dark text-[15px]">
                    {profile?.state ? `${profile.state}, ${profile.pincode}` : "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <p className="font-body text-brand-dark text-[15px]">{profile?.email || "No email provided."}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Phone Number</p>
                  <p className="font-body text-brand-dark text-[15px]">{user.phoneNumber}</p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* PAST PURCHASES CARD */}
        <AnimatedSection delay={200} className="bg-white rounded-lg shadow-sm border border-brand-tan/20 overflow-hidden">
          <div className="p-8">
            <h3 className="font-display font-normal text-xl text-brand-dark mb-6 flex items-center gap-2">
              <Package className="text-brand-primary" />
              Past Purchases
            </h3>
            
            {loadingOrders ? (
              <div className="flex justify-center py-8">
                <Loader2 className="animate-spin text-brand-primary" size={32} />
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-8 text-gray-500 font-body">
                No purchases found yet.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {orders.map((order, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-lg p-5 hover:border-brand-primary/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display font-normal text-brand-dark">{order.razorpay_order_id || order.id}</span>
                        <span className="bg-[#f0fdf4] text-[#166534] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
                          {order.status || "Completed"}
                        </span>
                      </div>
                      <p className="font-body text-sm text-gray-600 mb-1">{order.items}</p>
                      <p className="font-body text-xs text-gray-400 flex items-center gap-1">
                        <Calendar size={12} /> Ordered on {order.date ? new Date(order.date.toDate()).toLocaleDateString() : "Recently"}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-display font-normal text-lg text-brand-primary flex items-center sm:justify-end">
                        <IndianRupee size={16} /> {order.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
