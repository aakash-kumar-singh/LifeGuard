import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Award,
  Shield,
  Target,
  Users,
  Star,
  TrendingUp,
  CheckCircle,
  Calendar,
} from "lucide-react";
import Footer from "./Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");

  useEffect(() => {
    setIsVisible(true);

    // Animation for elements on scroll
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

  // Achievement Data
  const achievements = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Policies Sold" },
    { number: "₹100Cr+", label: "Claims Settled" },
    { number: "4000+", label: "Happy Clients" },
  ];

  // Timeline Data
  const timeline = [
    { year: "2003", event: "Started Career with LIC" },
    { year: "2008", event: "Achieved First MDRT" },
    { year: "2013", event: "Opened Branch Office" },
    { year: "2018", event: "Reached 1000+ Client Base" },
    { year: "2023", event: "Launched Digital Platform" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm"></div>
          {/* Add background pattern or image here */}
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
                About LifeGuard
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
              <p className="text-xl text-blue-100 mb-8">
                ✨ Welcome to Your Financial Future! ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Tabs */}
      <div className="py-16 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 p-1 rounded-lg">
                {["vision", "mission", "values"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-lg transition-all ${
                      activeTab === tab ? "bg-blue-500" : ""
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              {activeTab === "vision" && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100">
                    To be the most trusted financial guardian, ensuring every
                    Indian family's financial security and prosperity.
                  </p>
                </div>
              )}
              {activeTab === "mission" && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-blue-100">
                    Providing innovative insurance solutions with transparency,
                    integrity, and excellence in service.
                  </p>
                </div>
              )}
              {activeTab === "values" && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {[
                      "Integrity",
                      "Excellence",
                      "Customer First",
                      "Innovation",
                      "Transparency",
                      "Reliability",
                    ].map((value) => (
                      <li key={value} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section with Floating Elements */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Aakash Kumar Singh</h2>
                <p className="text-blue-100 leading-relaxed">
                  Your LIC (Life Insurance Corporation) guardian with two
                  decades of expertise. My pledge? Crafting tailored insurance
                  solutions for your security and peace of mind.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Award, text: "20+ Years of Experience" },
                    { icon: Star, text: "MDRT Qualifier" },
                    { icon: Users, text: "4000+ Satisfied Clients" },
                    { icon: TrendingUp, text: "Top Performer" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <item.icon className="w-6 h-6 text-blue-400" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 absolute inset-0 rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
                  <img
                    src="/path-to-your-image.jpg"
                    alt="Aakash Kumar Singh"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Counter */}
      <div className="py-16 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-blue-100">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>

              {/* Timeline Events */}
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-8 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-8"
                      : "md:mr-auto md:pr-8"
                  } md:w-1/2`}
                >
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 
                                  ${index % 2 === 0 ? 'left-0' : 'right-0'}"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="text-xl font-bold mb-2">{item.year}</div>
                    <div className="text-blue-100">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Map */}
      <div className="py-16 px-6 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Details */}
            <address className="space-y-6 not-italic text-white">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="font-medium">+91 9876543210</p>
                  <p className="font-medium">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <p className="font-medium">lifeguardsolutions@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <p className="font-medium">Your Office Address</p>
              </div>
            </address>

            {/* Contact Form */}
            <form className="bg-white/10 p-6 rounded-xl space-y-4">
              <div>
                <label className="block text-white mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
