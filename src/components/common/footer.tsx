import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`py-4 sm:py-6 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl md:rounded-full border border-slate-200/80 dark:border-slate-800 shadow-xs">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center md:text-left order-2 md:order-1">
            © 2026 Tu Lojita. Todos los derechos reservados.
          </p>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1.5 text-xs sm:text-sm font-medium order-1 md:order-2">
            <Link
              href="/terminos-y-condiciones"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1 hover:underline underline-offset-4"
            >
              Términos y Condiciones
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <Link
              href="/politicas-de-privacidad"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1 hover:underline underline-offset-4"
            >
              Políticas de Privacidad
            </Link>
          </nav>

          {/* Brand attribution */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 order-3">
            <span>Powered by</span>
            <Link
              href="https://www.lojitastudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Image
                src="/images/lojita-studio.png"
                alt="Lojita Studio"
                width={24}
                height={24}
                priority
                className="object-contain w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="font-semibold">Lojita Studio</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
