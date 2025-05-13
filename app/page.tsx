"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgb(123,58,237), rgb(153,129,249))",
        animation: "gradientShift 10s ease infinite",
      }}
    >
      {/* Glowing background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0" />

      {/* Content */}
      <div className="z-10 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-xl tracking-wide">
          <span className="text-yellow-300">Welcome</span> to <br />
          <span className="bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text">
            AI Content Generator
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-4 mb-10 font-light leading-relaxed text-white/90">
          Generate intelligent, creative, and high-quality content effortlessly using the power of artificial intelligence.
          Whether it's blogs, captions, product descriptions, or more — we’ve got you covered.
        </p>

        <Button
          onClick={handleNavigate}
          className="bg-white text-[#7B3AED] text-lg px-6 py-3 font-bold rounded-full shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition-all duration-300"
        >
          🚀 Get Started
        </Button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-white/70 text-sm z-10">
        Made with ❤️ by AI 
      </div>

      {/* Keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
