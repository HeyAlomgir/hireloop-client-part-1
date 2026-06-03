"use client";

import { authClient, signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();
  // console.log('sesson data in nav',session  , "pending",isPending);
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // সাইন আউট সফল হলে পেজ রিলোড হবে এবং ডাটা ক্লিয়ার হয়ে যাবে
          window.location.reload(); 
        },
      },
    });
  };


  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5">
        <header className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="HireLoop"
              width={140}
              height={40}
              className="h-auto w-auto"
            />
          </Link>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/jobs"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Browse Jobs
            </Link>

            <Link
              href="/companies"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Companies
            </Link>

            <Link
              href="/pricing"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Pricing
            </Link>

            {/* Divider */}
            <div className="h-5 w-px bg-white/20" />

            {
              user ?
                <>
                  Hi,{user.name} !
                  <Button onClick={handleSignOut} variant="ghost">Sign Out</Button>
                </> :
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-violet-400 hover:text-violet-300 transition"
                >
                  Sign In
                </Link>
            }

            <Link
              href="/auth/signup"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </header>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
      >
        <div className="space-y-1 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            {user ?
              <>

                Hi,{user.name} !
                <Button onClick={handleSignOut} className="rounded-lg border border-white/10 px-4 py-3 text-center text-gray-300 w-full" variant="ghost">Sign Out</Button>

              </> :
              <Link
                href="/auth/signin"
                className="rounded-lg border border-white/10 px-4 py-3 text-center text-gray-300"
              >
                Sign In
              </Link>}

            <Link
              href="/auth/signup"
              className="rounded-lg bg-violet-600 px-4 py-3 text-center font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}