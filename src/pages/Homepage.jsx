import React from "react";
import { useNavigate } from 'react-router-dom';
import bgImg2 from '../assets/bgImg2.jpg';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import ImageSlider from "../components/ImageSlider";
import BenefitsSection from "../components/BenefitsSection";


const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <section>
        <div
          className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${bgImg2})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center p-8 backdrop-blur-md bg-white bg-opacity-10 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20">
            <h1 className="text-6xl md:text-8xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
              Templates Made Simple
            </h1>
            <h2 className="text-4xl md:text-6xl text-white mt-4 font-light">
              Designs Made Beautiful
            </h2>
            <p className="text-lg md:text-2xl mt-4 text-gray-300">
              Templates for Every Need – Personal, Professional, and More
            </p>
            <button 
            onClick={() => navigate('/templates')}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xl font-medium rounded-full shadow-lg hover:shadow-[0_4px_12px_rgba(255,105,180,0.6)] transition-all duration-300">
              Get Started 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white/10 backdrop-blur-lg border-t-2 border-gray-500 shadow-inner">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-12 text-white uppercase tracking-wide">
            Why Choose <span className="text-pink-500">TemplateGen?</span>
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: card1, title: "Easy to Use", desc: "User-friendly interface for free customization." },
              { img: card2, title: "Customizable", desc: "Modify colors, fonts, and layouts to suit your needs." },
              { img: card3, title: "Responsive Designs", desc: "Templates that look great on all devices." },
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform"
              >
                <img src={card.img} alt="" className="rounded-lg mb-4 border border-white/20" />
                <h4 className="text-2xl font-semibold text-pink-400">{card.title}</h4>
                <p className="text-gray-300 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Templates Section */}
      <div className="flex flex-col items-center w-full px-4 py-16 bg-white/10 backdrop-blur-md border-t-2 border-gray-500 shadow-inner">
        <h3 className="text-4xl font-bold mb-8 text-white uppercase tracking-wide">
          Popular Templates
        </h3>
        <div className="w-full max-w-4xl">
          <ImageSlider />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white/10 backdrop-blur-md border-t-2 border-gray-500 shadow-inner">
        <BenefitsSection />
      </div>

      {/* Footer Section */}
      <footer id="contact" className="bg-black text-white py-12 border-t-2 border-gray-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Contact Us 📧</h3>
              <p className="mb-2">Have questions? Reach out to us!</p>
              <a href="mailto:support@templategen.com" className="text-pink-400 hover:underline">
                support@templategen.com
              </a>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Quick Links 📄</h3>
              <ul className="space-y-2">
                {["Features", "About Us", "Pricing", "Contact"].map((link, i) => (
                  <li key={i}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Follow Us 🌍</h3>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "LinkedIn"].map((social, i) => (
                  <a
                    key={i}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-500 my-8"></div>
          <div className="text-center text-sm">
            <p>&copy; 2025 TemplateGen. All rights reserved.</p>
            <p>
              Designed with ❤️ by{" "}
              <a href="#" className="text-pink-400 hover:underline">
                TemplateGen Team
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
