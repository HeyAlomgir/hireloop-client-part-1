"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SignInPage() {
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    setError("");

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const result = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
      });

      if (result?.error) {
        setError(result.error.message);
        toast.error(result.error.message);
        return;
      }

      toast.success("Login Successful");
      window.location.href = "/";
    } catch (err) {
      setError(err.message || "Something went wrong");
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="bordered"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              variant="bordered"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <Button
            type="submit"
            color="primary"
            className="w-full"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-violet-400 hover:text-violet-300"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
}