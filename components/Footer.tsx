'use client';

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Personal */}
          <div>
            <h3 className="text-white mb-4">Personal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Checking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Savings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mortgages</a></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-white mb-4">Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Business Checking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Savings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchant Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Treasury Management</a></li>
            </ul>
          </div>

          {/* Wealth */}
          <div>
            <h3 className="text-white mb-4">Wealth</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Investment Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Banking</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Banking Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Fraud</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Financial Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tools & Calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ATM Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Routing Number</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="text-2xl font-bold">
              South<span className="text-yellow-500">State</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Disclosures</a>
          </div>

          {/* Copyright & Legal */}
          <div className="mt-6 text-sm text-gray-400 text-center">
            <p className="mb-2">
              © 2026 South State Bank. All rights reserved. Member FDIC. Equal Housing Lender.
            </p>
            <p className="text-xs">
              Investment and insurance products are not deposits, not FDIC-insured, not insured by any federal government agency, not guaranteed by the bank, and may go down in value.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}