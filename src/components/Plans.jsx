
// components/Plans.js
import React, { useState, useEffect } from "react";
import { 
  Shield, Star, Check, ArrowRight, 
  TrendingUp, Wallet, Heart, Filter,
  X, AlertCircle
} from "lucide-react";
import { insuranceData } from "../data/insuranceData.js";

const Plans = () => {
  const [selectedCategory, setSelectedCategory] = useState("term");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    smoker: "no",
    email: "",
    phone: "",
    income: "",
    city: "",
  });
  const [premiumFrequency, setPremiumFrequency] = useState("yearly");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (formData.age < 18 || formData.age > 65) {
      newErrors.age = "Age must be between 18 and 65";
    }
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGetQuote = (plan) => {
    setSelectedPlan(plan);
    setShowQuoteModal(true);
  };

  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle success
      alert("Quote request submitted successfully!");
      setShowQuoteModal(false);
      setFormData({
        name: "",
        age: "",
        gender: "",
        smoker: "no",
        email: "",
        phone: "",
        income: "",
        city: "",
      });
    } catch (error) {
      alert("Error submitting quote request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const calculatePremium = (basePremium) => {
    const age = parseInt(formData.age);
    let factor = 1;

    // Apply age factor
    const ageBracket = insuranceData.premiumFactors.age.find(
      bracket => {
        const [min, max] = bracket.range.split("-").map(Number);
        return age >= min && age <= max;
      }
    );
    if (ageBracket) factor *= ageBracket.factor;

    // Apply gender factor
    if (formData.gender) {
      factor *= insuranceData.premiumFactors.gender[formData.gender];
    }

    // Apply smoker factor
    factor *= insuranceData.premiumFactors.smoker[formData.smoker];

    return Math.round(basePremium * factor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
              Insurance Plans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the perfect plan for your protection needs
            </p>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="py-8 px-6 bg-white/5 sticky top-20 z-10 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {insuranceData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all
                          ${selectedCategory === category.id 
                            ? 'bg-blue-500' 
                            : 'bg-white/10 hover:bg-white/20'}`}
              >
                {category.id === "term" && <Shield className="w-5 h-5" />}
                {category.id === "endowment" && <Wallet className="w-5 h-5" />}
                {category.id === "ulip" && <TrendingUp className="w-5 h-5" />}
                {category.id === "pension" && <Heart className="w-5 h-5" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceData.plans[selectedCategory]?.map((plan) => (
              <div
                key={plan.id}
                className="relative bg-white/10 rounded-xl p-6 backdrop-blur-sm
                         hover:bg-white/15 transition-all group"
              >
                {plan.recommended && (
                  <div className="absolute -top-4 right-4 bg-blue-500 px-4 py-1 rounded-full text-sm">
                    Recommended
                  </div>
                )}

                {/* Plan Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-blue-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-blue-200 mb-4">{plan.tagline}</p>

                <div className="text-3xl font-bold text-blue-300 mb-2">
                  ₹{plan.premium[premiumFrequency].toLocaleString()}/
                  {premiumFrequency}
                </div>

                <p className="text-blue-200 mb-6">
                  Coverage: ₹{plan.coverage.amount}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold">{plan.rating}</span>
                  <span className="text-blue-200">
                    ({plan.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <button
                  onClick={() => handleGetQuote(plan)}
                  className="w-full py-3 bg-blue-500 rounded-lg
                           hover:bg-blue-600 transition-all"
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 p-8 rounded-xl max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-blue-200 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6">
              Get Quote for {selectedPlan.name}
            </h2>

            <form onSubmit={handleSubmitQuote} className="space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  {errors.age && (
                    <p className="text-red-400 text-sm mt-1">{errors.age}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-1">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Smoker</label>
                <select
                  value={formData.smoker}
                  onChange={(e) => setFormData({...formData, smoker: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600
                         transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Get Quote"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;