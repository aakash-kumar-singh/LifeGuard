// components/Premium.js
import React, { useState } from "react";
import { Calculator, Info, ArrowRight } from "lucide-react";

const Premium = () => {
  const [formData, setFormData] = useState({
    planType: "term",
    age: "",
    coverage: "",
    term: "",
    paymentFrequency: "annual",
  });

  const [premium, setPremium] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculatePremium = (e) => {
    e.preventDefault();
    // Add your premium calculation logic here
    // This is a dummy calculation
    const basePremium =
      formData.coverage * 0.0005 * (formData.age / 25) * (formData.term / 10);
    setPremium(basePremium);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200 text-center">
              Premium Calculator
            </h1>
            <p className="text-xl text-blue-100 mb-12 text-center">
              Calculate your premium in just a few steps
            </p>

            {/* Calculator Form */}
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <form onSubmit={calculatePremium} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Plan Type</label>
                    <select
                      name="planType"
                      value={formData.planType}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 rounded-lg"
                    >
                      <option value="term">Term Life Insurance</option>
                      <option value="endowment">Endowment Plan</option>
                      <option value="moneyback">Money Back Plan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Enter your age"
                      className="w-full p-3 bg-white/10 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Coverage Amount</label>
                    <input
                      type="number"
                      name="coverage"
                      value={formData.coverage}
                      onChange={handleInputChange}
                      placeholder="Enter coverage amount"
                      className="w-full p-3 bg-white/10 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Policy Term (Years)</label>
                    <input
                      type="number"
                      name="term"
                      value={formData.term}
                      onChange={handleInputChange}
                      placeholder="Enter policy term"
                      className="w-full p-3 bg-white/10 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Payment Frequency</label>
                    <select
                      name="paymentFrequency"
                      value={formData.paymentFrequency}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 rounded-lg"
                    >
                      <option value="annual">Annual</option>
                      <option value="semi-annual">Semi-Annual</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-500 rounded-lg
                           hover:bg-blue-600 transition-all"
                >
                  Calculate Premium
                </button>
              </form>
            </div>

            {/* Premium Result */}
            {premium && (
              <div className="mt-8 bg-blue-500/20 p-8 rounded-xl backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4">Estimated Premium</h2>
                <div className="text-4xl font-bold text-blue-300">
                  ₹{premium.toFixed(2)}/{formData.paymentFrequency}
                </div>
                <p className="text-blue-200 mt-2">
                  This is an approximate calculation. Final premium may vary.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Factors Affecting Premium
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Age",
                  description: "Premium increases with age",
                },
                {
                  title: "Coverage Amount",
                  description: "Higher coverage means higher premium",
                },
                {
                  title: "Policy Term",
                  description: "Longer term affects premium calculation",
                },
              ].map((factor, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                  <p className="text-blue-200">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
