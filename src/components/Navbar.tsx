"use client";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 p-10">
          <div className="relative h-9 w-9 rounded-full border-2 border-primary flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">Y</span>
          </div>
          <span className="font-bold text-2xl">Omar Yasser</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex p-10">
          <Link
            href="#about"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full border-b bg-background md:hidden z-20">
            <nav className="flex flex-col items-center p-4 space-y-4">
              <Link
                href="#about"
                className="w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
