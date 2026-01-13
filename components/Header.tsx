'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, User, Search } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-900">
                South<span className="text-yellow-500">State</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors">
                Personal <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors">
                Business <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors">
                Wealth <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <button className="text-gray-700 hover:text-yellow-600 transition-colors">
              Locations
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-yellow-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Button variant="outline" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Login
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Open Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-yellow-600">Personal</a>
            <a href="#" className="block text-gray-700 hover:text-yellow-600">Business</a>
            <a href="#" className="block text-gray-700 hover:text-yellow-600">Wealth</a>
            <a href="#" className="block text-gray-700 hover:text-yellow-600">About</a>
            <a href="#" className="block text-gray-700 hover:text-yellow-600">Locations</a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                Open Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}