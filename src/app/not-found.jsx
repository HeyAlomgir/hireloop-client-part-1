'use client'; // Next.js App Router-er jonno eti dorkar

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-4 overflow-hidden relative">

            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-pulse delay-700"></div>

            {/* Main Content Container */}
            <div className="flex flex-col items-center max-w-xl text-center z-10">

                {/* Animated Loop Visual */}
                <div className="relative flex items-center justify-center h-48 w-48 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-500/40 animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-3 rounded-full border-4 border-t-indigo-500 border-r-purple-500 border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite]"></div>
                    <div className="absolute inset-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full blur-md opacity-70"></div>
                    <h1 className="text-5xl font-black tracking-tighter text-white z-10 drop-shadow-md">
                        404
                    </h1>
                </div>

                {/* Badge */}
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 mb-4">
                    Loop Broken
                </span>

                {/* Error Messages */}
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                    You've Out of the Loop!
                </h2>

                <p className="text-slate-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                    The page you are trying to reach does not exist. Let's get you back to <span className="text-indigo-400 font-semibold"> <Link href={"/"}>HireLoop</Link> </span>.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm"
                    >
                        Back to Home
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-3 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium rounded-xl border border-slate-700/60 transition-all duration-300 text-center text-sm backdrop-blur-sm"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            {/* Footer Branding */}
            <div className="absolute bottom-6 text-center w-full left-0 z-10">
                <p className="text-xs text-slate-500 tracking-wide">
                    Powered by <span className="font-semibold text-slate-400">HireLoop</span> Recruitment Platform
                </p>
            </div>
        </div>
    );
}
