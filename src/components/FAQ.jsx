import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Shield,
  DollarSign,
  FileText,
  Clock,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState({});

  // FAQ Categories and Questions
  const faqData = {
    general: {
      icon: Shield,
      title: "General Questions",
      questions: [
        {
          q: "What is Life Insurance?",
          a: "Life insurance is a contract between an insurance policy holder and an insurer, where the insurer promises to pay a designated beneficiary a sum of money upon the death of the insured person.",
        },
        {
          q: "Why do I need Life Insurance?",
          a: "Life insurance provides financial protection to your loved ones in case of your untimely death. It helps cover expenses, maintain lifestyle, pay off debts, and secure your family's future.",
        },
        {
          q: "What types of Life Insurance policies do you offer?",
          a: "We offer various types including Term Life Insurance, Whole Life Insurance, Endowment Plans, ULIPs, and Retirement Plans. Each type serves different needs and financial goals.",
        },
      ],
    },
    premium: {
      icon: DollarSign,
      title: "Premium & Payments",
      questions: [
        {
          q: "How can I pay my premium?",
          a: "You can pay your premium through multiple channels including online payment, bank transfer, cheque, or through our mobile app.",
        },
        {
          q: "What happens if I miss a premium payment?",
          a: "Missing a premium payment may lead to policy lapse. However, we provide a grace period of 30 days during which you can pay the premium without any penalty.",
        },
      ],
    },
    claims: {
      icon: FileText,
      title: "Claims Process",
      questions: [
        {
          q: "How do I file a claim?",
          a: "Claims can be filed online through our website or by visiting our nearest branch. You'll need to fill out the claim form and submit necessary documents.",
        },
        {
          q: "What is the claim settlement ratio?",
          a: "Our claim settlement ratio stands at 98.5%, which reflects our commitment to honoring legitimate claims promptly and efficiently.",
        },
      ],
    },
    policy: {
      icon: Clock,
      title: "Policy Related",
      questions: [
        {
          q: "Can I modify my policy after purchase?",
          a: "Yes, certain modifications can be made to your policy. This includes changes to nominee, payment frequency, and sum assured (subject to terms and conditions).",
        },
        {
          q: "What is the free look period?",
          a: "We offer a 15-day free look period from the date of receiving your policy document. During this period, you can review and return the policy if not satisfied.",
        },
      ],
    },
  };

  const toggleQuestion = (categoryId, questionIndex) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [`${categoryId}-${questionIndex}`]:
        !prev[`${categoryId}-${questionIndex}`],
    }));
  };

  const filterQuestions = () => {
    const filteredData = {};
    Object.entries(faqData).forEach(([category, data]) => {
      const filteredQuestions = data.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredQuestions.length > 0) {
        filteredData[category] = { ...data, questions: filteredQuestions };
      }
    });
    return filteredData;
  };

  const displayData = searchQuery ? filterQuestions() : faqData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our insurance policies and
              services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-blue-300" />
              </div>
              <input
                type="text"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-white/10 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               placeholder-blue-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            {!searchQuery && (
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.entries(faqData).map(([id, category]) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all
                              ${
                                activeCategory === id
                                  ? "bg-blue-500"
                                  : "bg-white/10 hover:bg-white/20"
                              }`}
                  >
                    <category.icon className="w-5 h-5" />
                    {category.title}
                  </button>
                ))}
              </div>
            )}

            {/* FAQ Accordion */}
            <div className="space-y-6">
              {Object.entries(displayData).map(([categoryId, category]) => (
                <div
                  key={categoryId}
                  className={
                    !searchQuery && activeCategory !== categoryId
                      ? "hidden"
                      : ""
                  }
                >
                  {searchQuery && (
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <category.icon className="w-6 h-6" />
                      {category.title}
                    </h2>
                  )}

                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg backdrop-blur-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryId, index)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5"
                        >
                          <span className="font-semibold">{faq.q}</span>
                          {openQuestions[`${categoryId}-${index}`] ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>

                        {openQuestions[`${categoryId}-${index}`] && (
                          <div className="px-6 py-4 bg-white/5">
                            <p className="text-blue-200">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="py-16 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Still Have Questions?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Talk to Us</h3>
                <p className="text-blue-200 mb-4">
                  Speak with our insurance experts
                </p>
                <p className="font-bold">1800-123-4567</p>
              </div>

              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-blue-200 mb-4">
                  Get answers within 24 hours
                </p>
                <p className="font-bold">support@lifeguard.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
