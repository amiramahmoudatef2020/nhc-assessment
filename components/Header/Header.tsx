'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import logo from '../../public/Isolation_Mode.svg';
import ActiveLink from '../ActiveLink';
import './HeaderStyles.css';
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="nav-container">
            <nav className="nav">
              <Link href="/">
                <Image src={logo} alt="Logo" className="logo" priority />
              </Link>
              <ActiveLink href="/products">Products</ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
            </nav>
          </div>
          <a href="/products" className="nav-link">
            Products
          </a>
          <div className="mobile-button-wrapper">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-button"
              aria-label="Toggle mobile menu"
            >
              mobile
              <svg
                className="mobile-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
}
