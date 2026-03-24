"use client";

import { useActionState } from "react";
import { signIn } from "./actions";

export default function LoginPage() {
  const [error, action, pending] = useActionState(signIn, null);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-20 relative">
        <div className="hidden md:block absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage-light to-transparent" />

        <p className="text-[11px] tracking-[0.22em] uppercase text-sage-dark mb-6 font-sans">
          Admin Access
        </p>

        <h1
          className="font-serif font-light leading-[1.05] text-charcoal mb-4"
          style={{ fontSize: "clamp(42px, 8vw, 72px)" }}
        >
          Secure
          <em className="italic text-warm"> Control</em>
          <br />
          Panel
        </h1>

        <p
          className="font-serif font-light italic text-[#6b6b68] mb-8 leading-relaxed"
          style={{ fontSize: "clamp(15px, 2.5vw, 20px)" }}
        >
          Manage portfolio. Update projects.
        </p>

        <p className="text-sm leading-[1.85] text-[#6b6b68] max-w-md font-sans">
          Internal access for CV. Swatu Engineering to manage portfolio projects
          and structural design documentation.
        </p>
      </div>

      {/* Right */}
      <div className="bg-cream relative overflow-hidden flex items-center justify-center px-6 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-sage-light/30" />

        {/* Structural grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#4a5e4c"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Login Box */}
        <form
          action={action}
          className="relative z-10 w-full max-w-sm border border-sage-light/40 px-8 py-10 bg-white/40 backdrop-blur-sm"
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-sage-dark font-sans mb-8 text-center">
            Swatu Admin
          </p>

          {error && (
            <p className="text-[10px] text-red-500 text-center mb-6 font-sans">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-6">
            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase text-sage-dark font-sans">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                className="w-full mt-2 border-b border-sage-dark/30 bg-transparent py-2 outline-none focus:border-sage-dark"
              />
            </div>

            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase text-sage-dark font-sans">
                Password
              </label>

              <input
                name="password"
                type="password"
                required
                className="w-full mt-2 border-b border-sage-dark/30 bg-transparent py-2 outline-none focus:border-sage-dark"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="mt-8 bg-sage-dark text-white py-3 text-[11px] tracking-[0.16em] uppercase border border-sage-dark hover:bg-warm hover:border-warm transition-all font-sans"
            >
              {pending ? "Signing in..." : "Enter Admin"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
