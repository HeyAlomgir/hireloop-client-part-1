"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button } from "@heroui/react";
import { CircleInfoFill } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";


export default function SignupPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [role, setRole] = useState("seeker");

const navg =()=>{}
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    

    try {
      const result = await authClient.signUp.email({
        name: userData?.name,
        email: userData?.email,
        password: userData?.password,
        
        role:role
        
      });

      if (result?.error) {
        setError(result.error.message || "Registration failed");
        toast.error(result.error.message || "Registration failed");
        return;
      }

      setSuccess("Account created successfully! Redirecting to sign in...");
      toast.success("Account created successfully!");

      e.target.reset();
      setRole("seeker");
      
      setTimeout(() => {
        router.push("/auth/signin");
      }, 200);
    } catch (err) {
      const message = err?.message || "Something went wrong";

      setError(message);
      toast.error(message);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Join HireLoop and start your career journey.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>

            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              variant="bordered"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              variant="bordered"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              variant="bordered"
              required
            />
          </div>


          {/* Role selection */}

           <div className="flex flex-col gap-4">
            <Label>Subscription plan</Label>
            <RadioGroup
            value={role}
            onChange={(value) => setRole(value)} 
             name="role" 
             orientation="horizontal">
              <Radio  value="seeker">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Job Seeker</Label>
                </Radio.Content>
              </Radio>
              <Radio value="recruter">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Recruter</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div> 

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              <CircleInfoFill />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400">
              <CircleInfoFill />
              <span>{success}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}