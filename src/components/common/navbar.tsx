"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme_switch";

const NAV_LINKS = [
  { title: "¿Cómo comprar?", href: "#como-funciona" },
  { title: "Simulador de Cuotas", href: "#simulador" },
  { title: "Para Comercios", href: "#comercios" },
  { title: "Lojita Rider", href: "#rider" },
  { title: "Preguntas Frecuentes", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      <div className="container mx-auto">
        {/* Main Navbar Bar */}
        <div className="flex items-center justify-between bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-xs">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <Image
              src="/images/tu-lojita.png"
              alt="Tu Lojita"
              width={36}
              height={36}
              priority
              className="object-contain w-8 h-8 sm:w-9 sm:h-9"
            />
          </Link>

          {/* Desktop Navigation Links (hidden on mobile, visible on lg screens) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="px-3 py-2 text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Action buttons + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeSwitch />

            {/* Mobile Hamburger Button (visible on < lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="lg:hidden p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              {mobileMenuOpen ? (
                /* Close (X) Icon */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 rounded-xl transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}