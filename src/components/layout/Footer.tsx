import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer role="contentinfo" className="py-12 border-t border-shinro-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo, wordmark and tagline */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-new.png"
                alt="Shinro"
                width={48}
                height={48}
                className="logo-glow"
              />
              <span className="font-bold text-xl tracking-wide text-white">
                SHINRO
              </span>
            </div>
            <span className="hidden sm:inline text-shinro-border">|</span>
            <span className="hidden sm:inline text-shinro-muted text-sm">
              Spatial Intelligence Infrastructure
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#"
              className="text-shinro-light hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-shinro-light hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="mailto:hello@shinro.xyz"
              className="text-shinro-light hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-shinro-muted text-sm">
            <span className="font-mono">2025</span> Shinro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
