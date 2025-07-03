"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Logos", href: "#logos" },
    { name: "Web", href: "#web" },
    { name: "Posters", href: "#posters" },
    { name: "Animations", href: "#animations" },
    { name: "Contact", href: "#contact" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <span className="text-teal-500 text-3xl animate-pulse font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <main className="font-sans relative overflow-hidden">
      {/* Mobile Hamburger Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="px-4 py-3 flex justify-between items-center">
          <Link href="#intro" className="flex items-center gap-2">
            <Image src="/logohome2.png" alt="Logo" width={60} height={60} className="ml-4" />
          </Link>
          <button
            className="text-gray-700 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-10 text-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-teal-600 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 pt-4">
              <a href="https://www.linkedin.com/in/karim-melhem/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-teal-600 hover:text-teal-400 transition" size={28} />
              </a>
              <a href="https://github.com/melhemkarim" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-teal-600 hover:text-teal-400 transition" size={28} />
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 min-h-screen bg-white text-gray-900 transition-all overflow-x-hidden">
        {/* Intro Section */}
        <section id="intro" className="fade-in flex flex-col items-center justify-center text-center h-screen px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Hello, my name is <span className="text-teal-500">Karim Melhem</span>
          </h1>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900">
            A UI/<span className="text-teal-500">Graphic Designer</span>.
          </h2>
          <Link
            href="#logos"
            className="mt-10 inline-block border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-md transition-all"
          >
            Know more
          </Link>
        </section>

        {/* Portfolio Sections */}
        {[{ id: "web", title: "WEB DESIGNS", images: ["/gaming1.png", "/gaming2.png", "/web1.png", "/web2.png", "/web5.png", "/web6.png", "/web3.png","/web7.png", "/web9.png", ], bg: "bg-white" }, 
        { id: "logos", title: "LOGOS", images: ["/logo1.png", "/logo2.jpg", "/logo3.jpg","/logo4.png", "/logo5.png", "/logo6.png","/logo7.png", "/logo8.png", "/logo9.png"],  }, 
        { id: "posters", title: "POSTERS", images: ["/1.png",  "/3.png", "/4.png", "/5.png", "/6.png", "/7.png"], bg: "bg-white" }].map((section, index) => (
          <section
            id={section.id}
            key={index}
            className={`fade-in px-6 py-24 ${section.bg} border-t border-gray-200`}
          >
            <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-16 relative">
              <span className="bg-white px-4 relative z-10">{section.title}</span>
              <span className="absolute left-1/2 top-1/2 w-48 h-2 bg-teal-200 rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm opacity-60"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {section.images.map((src, i) => (
                <div
                  key={i}
                  className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 border border-teal-100"
                >
                  <Image
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full object-contain rounded-md transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
<section id="animations" className="fade-in px-6 py-24 bg-white border-t border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-16 relative">
          <span className="bg-white px-4 relative z-10">WEB DESIGN ANIMATIONS</span>
          <span className="absolute left-1/2 top-1/2 w-48 h-2 bg-teal-200 rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm opacity-60"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {["/video1.mp4", "/video2.mp4", "/video3.mp4"].map((src, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-lg border border-teal-100">
              <video
                src={src}
                controls
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </section>
        {/* Contact Section */}
        <section id="contact" className="fade-in px-6 py-28 bg-gradient-to-t from-white via-teal-50 to-white">
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">Get in Touch</h2>
          <form className="max-w-xl mx-auto grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl bg-white w-full border border-teal-200 shadow-sm focus:ring-2 focus:ring-teal-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl bg-white w-full border border-teal-200 shadow-sm focus:ring-2 focus:ring-teal-300"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-xl bg-white w-full border border-teal-200 shadow-sm focus:ring-2 focus:ring-teal-300"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white text-center py-12 mt-[-1px]">
          <div className="flex justify-center items-center flex-col gap-6">
            {/* <a
              href="#contact"
              className="text-2xl font-bold border border-white px-6 py-2 hover:bg-white hover:text-teal-600 transition"
            >
              SEND ME AN EMAIL
            </a> */}
            <div className="flex gap-8 text-2xl">
              <a href="https://www.linkedin.com/in/karim-melhem/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-teal-400 transition" size={28} />
              </a>
              <a href="https://github.com/melhemkarim" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-teal-400 transition" size={28} />
              </a>
            </div>
            <div className="text-sm mt-4 text-gray-400">© 2025 - Karim Melhem</div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .fade-in {
          animation: fadeIn 1s ease-in forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
