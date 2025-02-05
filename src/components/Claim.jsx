import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Search,
  Download,
  Upload,
  Phone,
  Mail,
  ArrowRight,
  HelpCircle,
  File,
  AlertTriangle,
} from "lucide-react";

const Claims = () => {
  const [claimType, setClaimType] = useState("death");
  const [trackingId, setTrackingId] = useState("");
  const [showTrackingResult, setShowTrackingResult] = useState(false);

  // Sample claim status data
  const claimStatus = {
    id: "CLM123456",
    status: "In Progress",
    lastUpdated: "2024-04-18",
    timeline: [
      { date: "2024-04-18", status: "Claim Received", completed: true },
      { date: "2024-04-19", status: "Document Verification", completed: true },
      { date: "2024-04-20", status: "Under Processing", completed: false },
      { date: "Pending", status: "Final Approval", completed: false },
      { date: "Pending", status: "Payment Disbursement", completed: false },
    ],
  };

  const handleTrackClaim = (e) => {
    e.preventDefault();
    setShowTrackingResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
              Claims Process
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We're here to support you through every step of the claims process
            </p>
          </div>
        </div>
      </div>

      {/* Track Claim Section */}
      <div className="py-16 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Track Your Claim</h2>
              <form onSubmit={handleTrackClaim} className="space-y-6">
                <div>
                  <label className="block mb-2">Claim Reference Number</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="Enter your claim ID"
                      className="flex-1 px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Track
                    </button>
                  </div>
                </div>
              </form>

              {/* Tracking Result */}
              {showTrackingResult && (
                <div className="mt-8 space-y-6 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-blue-200">Claim ID</p>
                      <p className="font-bold">{claimStatus.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Last Updated</p>
                      <p className="font-bold">{claimStatus.lastUpdated}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Status</p>
                      <p className="font-bold text-blue-300">
                        {claimStatus.status}
                      </p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500/20"></div>
                    {claimStatus.timeline.map((step, index) => (
                      <div
                        key={index}
                        className="relative flex items-center gap-4 mb-4 pl-4"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? "bg-blue-500" : "bg-white/10"
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold">{step.status}</p>
                          <p className="text-sm text-blue-200">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Claim Types */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Types of Claims
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "death",
                title: "Death Claim",
                icon: FileText,
                description:
                  "Claim benefits in case of the unfortunate death of the policyholder",
              },
              {
                type: "maturity",
                title: "Maturity Claim",
                icon: Clock,
                description:
                  "Claim your policy benefits upon completion of the policy term",
              },
              {
                type: "surrender",
                title: "Surrender Claim",
                icon: Download,
                description:
                  "Terminate your policy before maturity and claim surrender value",
              },
            ].map((claim) => (
              <button
                key={claim.type}
                onClick={() => setClaimType(claim.type)}
                className={`p-6 text-left rounded-xl transition-all ${
                  claimType === claim.type
                    ? "bg-blue-500"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <claim.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">{claim.title}</h3>
                <p className="text-sm text-blue-200">{claim.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="py-16 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Required Documents
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-8">
              {claimType === "death" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">
                    Death Claim Documents
                  </h3>
                  {[
                    "Original Policy Document",
                    "Death Certificate",
                    "Claimant's Statement Form",
                    "Medical Records (if applicable)",
                    "Police FIR (in case of accidental death)",
                    "Bank Account Details",
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-blue-100"
                    >
                      <File className="w-5 h-5 text-blue-400" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              )}

              {claimType === "maturity" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">
                    Maturity Claim Documents
                  </h3>
                  {[
                    "Original Policy Document",
                    "Discharge Form",
                    "KYC Documents",
                    "Bank Account Details",
                    "Recent Photograph",
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-blue-100"
                    >
                      <File className="w-5 h-5 text-blue-400" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              )}

              {claimType === "surrender" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">
                    Surrender Claim Documents
                  </h3>
                  {[
                    "Original Policy Document",
                    "Surrender Request Form",
                    "KYC Documents",
                    "Bank Account Details",
                    "Cancelled Cheque",
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-blue-100"
                    >
                      <File className="w-5 h-5 text-blue-400" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Claim Process Steps */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Claim Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Submit Claim",
                  description:
                    "Fill the claim form and submit required documents",
                  icon: Upload,
                },
                {
                  title: "Document Verification",
                  description: "Our team verifies the submitted documents",
                  icon: CheckCircle,
                },
                {
                  title: "Claim Processing",
                  description: "Claim undergoes assessment and processing",
                  icon: Clock,
                },
                {
                  title: "Settlement",
                  description:
                    "Approved claim amount is transferred to your account",
                  icon: Download,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <step.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does it take to process a claim?",
                a: "Generally, claims are processed within 30 days of receiving complete documentation.",
              },
              {
                q: "Can I track my claim status online?",
                a: "Yes, you can track your claim status using the claim reference number provided.",
              },
              {
                q: "What happens if documents are missing?",
                a: "Our team will contact you and guide you through the process of submitting additional documents.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  {faq.q}
                </h3>
                <p className="text-blue-100">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Call Us</p>
                <p className="text-blue-200">1800-123-4567</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Email Us</p>
                <p className="text-blue-200">claims@lifeguard.com</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <AlertCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Emergency</p>
                <p className="text-blue-200">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="py-8 px-6 bg-red-500/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-red-300">
              <AlertTriangle className="w-6 h-6" />
              <p className="text-sm">
                Please note that any false or misleading information provided
                during the claims process may result in rejection of the claim
                and legal action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claims;
