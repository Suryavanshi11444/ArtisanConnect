import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faYoutube,
  faFacebookSquare,
  faPinterest,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  { value: "Terms & Conditions", href: "#!" },
  { value: "Privacy Policy", href: "#!" },
  { value: "Refund Policy", href: "#!" },
];

const socialMedia = [
  { value: "Facebook", href: "#!" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const jobInfo = [
  { value: "Select", href: "#!" },
  { value: "Service", href: "#!" },
  { value: "Payment", href: "#!" },
];

const language = [
  { value: "en", text: "US Dollars $" },
  { value: "bn", text: "UK Dollars $" },
];

const currency = [
  { value: "en", text: "English" },
  { value: "bn", text: "Bangla" },
];

const sociaIcons = [
  { icon: faLinkedin, href: "#!" },
  { icon: faTwitterSquare, href: "#!" },
  { icon: faYoutube, href: "#!" },
  { icon: faFacebookSquare, href: "#!" },
  { icon: faPinterest, href: "#!" },
  { icon: faWordpress, href: "#!" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900/90 text-white pt-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="bg-white text-black rounded-xl p-6 md:p-10 mb-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Get 10% Off Your First Order
            </h2>
            <p className="text-sm md:text-base text-gray-800">
              Sign up now for exclusive news and savings. Be the first to know.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 w-full md:w-auto">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-black bg-white text-sm md:text-base"
              />
              <button className="bg-blue-900 text-white px-5 py-3 rounded-r-md text-sm md:text-base transition">
                Sign Up
              </button>
            </div>
            <p className="text-xs text-gray-700 max-w-xs">
              *Offer valid for full-price items only. Terms apply.
            </p>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/30 pb-10">
          <div>
            <h5 className="font-semibold mb-4 text-lg text-white">Quick Links</h5>
            <ul>
              {quickLinks.map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-amber-400 transition"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-lg text-white">Social Media</h5>
            <ul>
              {socialMedia.map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-amber-400 transition"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-lg text-white">Job Info</h5>
            <ul>
              {jobInfo.map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-amber-400 transition"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-lg text-white">Language</h5>
            <select className="w-full p-2 bg-white text-black rounded-md border border-gray-300">
              {language.map((lang, idx) => (
                <option value={lang.value} key={idx}>
                  {lang.text}
                </option>
              ))}
            </select>
            <h5 className="font-semibold mt-6 mb-4 text-lg text-white">Currency</h5>
            <select className="w-full p-2 bg-white text-black rounded-md border border-gray-300">
              {currency.map((cur, idx) => (
                <option value={cur.value} key={idx}>
                  {cur.text}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-10 mb-6">
          <ul className="flex gap-6 flex-wrap justify-center items-center">
            {sociaIcons.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-2xl text-white hover:text-amber-400 transition"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6 border-white/30">
          <div className="text-sm text-white/80 text-center md:text-left mb-4 md:mb-0">
            Powered by <span className="text-white font-semibold">Easy Frontend</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-white/70 text-center md:text-right">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Easy Frontend. All rights reserved.
            </span>
            {quickLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:underline hover:text-amber-400 transition"
              >
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
