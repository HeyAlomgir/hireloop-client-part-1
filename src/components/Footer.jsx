import Link from "next/link";
import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,

} from "@gravity-ui/icons";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo Section */}
                    <div>
                        <Link href="/" className="inline-block">
                            <Image
                                  src="/images/logo.png"
                                  alt="HireLoop"
                                  width={140}
                                  height={40}
                                  className="h-auto w-auto"
                                />
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
                            The AI-native career platform. Built for people who take
                            their work seriously.
                        </p>

                        {/* Social Links */}
                        <div className="mt-10 flex gap-3">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition hover:bg-violet-600 hover:text-white"
                            >
                                <LogoFacebook className="h-5 w-5" />
                            </Link>

                         

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition hover:bg-violet-600 hover:text-white"
                            >
                                <LogoGithub className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition hover:bg-violet-600 hover:text-white"
                            >
                                <LogoLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-violet-500">
                            Product
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/jobs"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Job Discovery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/ai"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Worker AI
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/companies"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Companies
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/salary"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Salary Data
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-violet-500">
                            Navigation
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/help-center"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/career-resources"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Career Library
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-violet-500">
                            Resources
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/brand-guidelines"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Brand Guideline
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/newsroom"
                                    className="text-gray-400 transition hover:text-white"
                                >
                                    Newsroom
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
                    <p>© 2026 HireLoop. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link
                            href="/terms"
                            className="hover:text-white"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            href="/privacy"
                            className="hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/guidelines"
                            className="hover:text-white"
                        >
                            Community Guidelines
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}