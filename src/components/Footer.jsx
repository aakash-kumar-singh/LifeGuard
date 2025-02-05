import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { LogoSVG } from "./Logo/LogoSVG"; // Assuming you have this

const LinkedIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 3h4v8H3zm0 10h4v8H3zm8-10h10v2h-5v14h-5V5H11zm1 1.5v2h2v-2zm0 3v2h2v-2zm0 3v2h2v-2zm0 3v2h2v-2z"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <LinkedIn size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LogoSVG className="w-24 h-24 mb-4" />
              <p className="text-blue-200 mb-6">
                Your trusted partner in life insurance and financial planning.
                We're here to secure your future.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "Our Plans", "Claims", "Contact"].map(
                  (item, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a
                        href="#"
                        className="text-blue-200 hover:text-blue-400 flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink size={14} />
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-blue-200"
                >
                  <div className="bg-white/10 p-2 rounded-full">
                    <Phone size={16} />
                  </div>
                  <a
                    href="tel:9876543210"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +91 9876543210
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-blue-200"
                >
                  <div className="bg-white/10 p-2 rounded-full">
                    <Mail size={16} />
                  </div>
                  <a
                    href="mailto:lifeguardsolutions@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    lifeguardsolutions@gmail.com
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
                  (item, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a
                        href="#"
                        className="text-blue-200 hover:text-blue-400 flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink size={14} />
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>© {currentYear} Aakash Kumar Singh. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Last Updated: 18/04/2024
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
