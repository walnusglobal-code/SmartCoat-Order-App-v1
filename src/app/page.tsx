"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Global Navigation */}
      <nav
        id="navbar"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 text-gray-900 py-3"
            : "bg-transparent text-white border-b border-white/10 py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/attachments/d7ff20a7-f353-4b54-8033-29fd8b30d74d/logo.webp"
              alt="Walnus Global"
              width={32}
              height={32}
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
            <span className="font-bold tracking-tight text-lg">WALNUS GLOBAL</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
            <a href="#solutions" className="hover:opacity-70 transition-opacity">
              Solutions
            </a>
            <a href="#smartcoat" className="hover:opacity-70 transition-opacity">
              SmartCoat
            </a>
            <a href="#manufacturing" className="hover:opacity-70 transition-opacity">
              Manufacturing
            </a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">
              Projects
            </a>
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#ecosystem"
              className={`btn py-2 px-4 rounded-full text-sm backdrop-blur-sm transition-all ${
                scrolled
                  ? "bg-gray-100 border-transparent text-gray-900 hover:bg-gray-200"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              Explore
            </a>
            <a
              href="#contact"
              className={`btn py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              Talk to Walnus
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-current p-2"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-gray-900 border-b border-gray-100 px-6 py-4 shadow-lg space-y-4">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Solutions
            </a>
            <a
              href="#smartcoat"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              SmartCoat
            </a>
            <a
              href="#manufacturing"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Manufacturing
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              About
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className="btn py-2 px-4 rounded-full text-center text-sm bg-gray-100 text-gray-900"
              >
                Explore
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn py-2 px-4 rounded-full text-center text-sm bg-gray-900 text-white font-medium"
              >
                Talk to Walnus
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/attachments/d7ff20a7-f353-4b54-8033-29fd8b30d74d/638b254dc6645c374fe97559b8cb761e.jpg"
            alt="Coatings & Construction"
            fill
            priority
            className="object-cover object-center opacity-50 scale-105 transform motion-safe:animate-pulse"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white mt-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wide uppercase">
            A new generation of construction
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 max-w-5xl mx-auto leading-tight">
            COATINGS.
            <br />
            CONSTRUCTION.
            <br />
            INTELLIGENCE.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium">
            Technology-enabled coatings, manufacturing and project intelligence for the built environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#ecosystem"
              className="btn bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-4 text-lg w-full sm:w-auto"
            >
              Explore Walnus
            </a>
            <a
              href="#contact"
              className="btn bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-4 text-lg w-full sm:w-auto"
            >
              Talk to Walnus
            </a>
          </div>
        </div>
      </header>

      {/* Walnus Ecosystem Section */}
      <section id="ecosystem" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-3 block">
              The Walnus Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Simple on the surface.
              <br />
              Intelligent underneath.
            </h2>
            <p className="text-lg text-gray-600">
              An interconnected system of manufacturing, intelligence, and professional execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SmartCoat */}
            <div id="smartcoat" className="card group">
              <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SmartCoat™</h3>
              <p className="text-gray-600 mb-6">
                Digital coatings intelligence and advanced formulation technology.
              </p>
              <a href="#contact" className="btn-tertiary flex items-center gap-1 font-semibold text-sm">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* SmartView Pro */}
            <div className="card group">
              <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12h4l3-9 5 18 3-9h5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SmartView Pro™</h3>
              <p className="text-gray-600 mb-6">
                Construction measurement and spatial project intelligence.
              </p>
              <a href="#solutions" className="btn-tertiary flex items-center gap-1 font-semibold text-sm">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Mix Master */}
            <div className="card group">
              <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mix Master™</h3>
              <p className="text-gray-600 mb-6">
                Formulation and production intelligence for consistent quality.
              </p>
              <a href="#contact" className="btn-tertiary flex items-center gap-1 font-semibold text-sm">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Professional Painting */}
            <div className="card group">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Painting</h3>
              <p className="text-gray-600 mb-6">
                Technology-assisted execution by certified professional teams.
              </p>
            </div>

            {/* Manufacturing */}
            <div id="manufacturing" className="card group">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-6">
                High-capacity coatings production and reliable material supply.
              </p>
            </div>

            {/* Project Intelligence */}
            <div id="projects" className="card group">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform border border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Project Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Data-driven workflows from estimation to final reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SmartView Pro / Intelligence Section */}
      <section id="solutions" className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-3 block">
                SmartView Pro™
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                See. Measure.
                <br />
                Understand. Estimate.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our computer vision and spatial intelligence tools transform field surveys. Capture building geometry, calculate exact material requirements, and generate precise estimates in minutes.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-gray-900 mr-3 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Mobile-first site capture</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-gray-900 mr-3 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Automated surface area calculations</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-gray-900 mr-3 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Instant material cost forecasting</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary rounded-full">
                Explore SmartView Pro
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-[2rem] transform -rotate-3 z-0"></div>
              <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <Image
                  src="/attachments/d7ff20a7-f353-4b54-8033-29fd8b30d74d/file_000000006c1082438a43ed82a00b59ce.png"
                  alt="SmartView Pro Interface"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Workflow Sequence */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Connected Workflow</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From the initial site visit to final reporting, intelligence connects every step.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {[
              { num: "1", title: "SITE" },
              { num: "2", title: "DATA" },
              { num: "3", title: "ESTIMATE" },
              { num: "4", title: "FORMULATION" },
              { num: "5", title: "PRODUCTION" },
              { num: "6", title: "EXECUTION" },
              { num: "7", title: "REPORT" },
            ].map((step, idx, arr) => (
              <div key={step.num} className="flex items-center flex-1 w-full md:w-auto">
                <div className="flex flex-col items-center text-center group mx-auto">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white group-hover:text-gray-900 transition-colors border border-white/20 font-bold">
                    {step.num}
                  </div>
                  <span className="text-sm font-medium tracking-wide">{step.title}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-white/20 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Painting / Execution */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <Image
                  src="/attachments/d7ff20a7-f353-4b54-8033-29fd8b30d74d/file_00000000e73481f491fdc0106c1b0c6c.png"
                  alt="Professional Execution"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-3 block">
                Professional Execution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Material. Production.
                <br />
                Execution.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We connect high-capacity manufacturing with certified professional painters. A single-source accountability model that ensures quality, controls cost, and guarantees reliable supply for major projects.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Supply Reliability</h4>
                  <p className="text-sm text-gray-600">Direct from factory to site, eliminating delays.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Quality Consistency</h4>
                  <p className="text-sm text-gray-600">Mix Master™ ensures perfect formulation matches.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cost Control</h4>
                  <p className="text-sm text-gray-600">Precise estimating reduces material waste.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Trained Teams</h4>
                  <p className="text-sm text-gray-600">Certified professionals equipped with the best tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Ready to build?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience the intersection of coatings manufacturing and construction intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:seanlawal@gmail.com"
              className="btn btn-primary rounded-full px-8 py-4 text-lg w-full sm:w-auto"
            >
              Start a Project
            </a>
            <a
              href="#ecosystem"
              className="btn btn-secondary rounded-full px-8 py-4 text-lg w-full sm:w-auto"
            >
              Explore the Technology
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-2">
              <Image
                src="/attachments/d7ff20a7-f353-4b54-8033-29fd8b30d74d/logo.webp"
                alt="Walnus Global"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert mb-6"
              />
              <p className="text-gray-400 text-sm max-w-sm mb-6">
                Walnus Global Ventures is a technology-enabled coatings and construction intelligence company.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase text-gray-500">Solutions</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#smartcoat" className="hover:text-white transition-colors">
                    SmartCoat™
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    SmartView Pro™
                  </a>
                </li>
                <li>
                  <a href="#manufacturing" className="hover:text-white transition-colors">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Project Intelligence
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase text-gray-500">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://github.com/walnusglobal-code/SmartCoat-Order-App-v1" className="hover:text-white transition-colors">
                    Repository
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase text-gray-500">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="mailto:seanlawal@gmail.com" className="hover:text-white transition-colors">
                    seanlawal@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/oluwaseun-lawal" className="hover:text-white transition-colors">
                    LinkedIn Profile
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#contact" className="text-white font-medium hover:underline">
                    Partner with us →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Walnus Global Ventures. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
