import React, { useState, useEffect } from "react";
import {
  Users,
  Heart,
  Shield,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Check,
  Clock,
  Award,
  Target,
  Umbrella,
  DollarSign,
} from "lucide-react";
import { HeroSVG } from "./HeroSVG";
import Footer from "./Footer";

const InsuranceLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".scroll-animate")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const insurancePlans = {
    personal: [
      {
        title: "Term Life Insurance",
        premium: "From ₹500/month",
        coverage: "Up to ₹1 Crore",
        features: [
          "Death Benefit",
          "Tax Benefits",
          "Rider Options",
          "Low Premium",
        ],
      },
      {
        title: "Health Insurance",
        premium: "From ₹800/month",
        coverage: "Up to ₹50 Lakhs",
        features: [
          "Cashless Treatment",
          "Pre-existing Coverage",
          "No Claim Bonus",
          "Family Floater",
        ],
      },
      {
        title: "Investment Plans",
        premium: "From ₹2000/month",
        coverage: "Market Linked",
        features: [
          "Wealth Creation",
          "Life Coverage",
          "Tax Benefits",
          "Market Returns",
        ],
      },
    ],
    business: [
      // Add business plans here
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Your existing hero content */}
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                हर पल विश्वास के साथ
                <span className="block text-3xl md:text-4xl text-blue-300 mt-4">
                  WE RISE WHEN SALARY DIES
                </span>
              </h1>
              <p className="text-xl text-blue-100">
                A Perfect Insurance Website Designed Just For You!
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white/10 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block w-full max-w-lg mx-auto">
              <HeroSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose LifeGuard?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Protection",
                description: "Backed by LIC's legacy of trust and reliability",
              },
              {
                icon: Clock,
                title: "Quick Claims",
                description: "Hassle-free claim settlement within 24 hours",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Professional advisors to help you choose right",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insurance Plans Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Insurance Plans
          </h2>

          {/* Plan Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 p-1 rounded-lg">
              <button
                className={`px-6 py-2 rounded-lg ${
                  activeTab === "personal" ? "bg-blue-500" : ""
                }`}
                onClick={() => setActiveTab("personal")}
              >
                Personal
              </button>
              <button
                className={`px-6 py-2 rounded-lg ${
                  activeTab === "business" ? "bg-blue-500" : ""
                }`}
                onClick={() => setActiveTab("business")}
              >
                Business
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {insurancePlans[activeTab].map((plan, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="text-2xl font-bold text-blue-300 mb-2">
                  {plan.premium}
                </div>
                <div className="text-sm text-blue-200 mb-6">
                  Coverage: {plan.coverage}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Premium Calculator
          </h2>
          <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            {/* Add calculator form */}
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Type of Insurance</label>
                <select className="w-full p-3 bg-white/10 rounded-lg">
                  <option>Term Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Investment Plans</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Age</label>
                  <input
                    type="number"
                    className="w-full p-3 bg-white/10 rounded-lg"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block mb-2">Coverage Amount</label>
                  <input
                    type="number"
                    className="w-full p-3 bg-white/10 rounded-lg"
                    placeholder="Enter coverage amount"
                  />
                </div>
              </div>
              <button className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                Calculate Premium
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                comment: "Best decision I made for my family's security.",
              },
              {
                name: "Priya Singh",
                role: "IT Professional",
                comment: "Excellent service and quick claim settlement.",
              },
              {
                name: "Amit Patel",
                role: "Doctor",
                comment: "Professional advice and transparent process.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="text-blue-300 mb-4">★★★★★</div>
                <p className="mb-4">{testimonial.comment}</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-blue-200">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with us today and let's create your perfect insurance
            plan.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
            Contact Us Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InsuranceLanding;
