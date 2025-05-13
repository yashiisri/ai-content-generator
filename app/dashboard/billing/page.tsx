'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const BillingPage = () => {
  const router = useRouter();

  const handleFreePlan = () => {
    router.push('/dashboard');
  };

  const handleProPlan = () => {
    router.push('/dashboard/payment'); // Customize route if needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 text-gray-800 relative overflow-hidden">

      {/* Decorative Gradient Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-400 via-indigo-300 to-purple-300 opacity-20 rounded-full blur-2xl z-0" />

      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-12 z-10 drop-shadow-lg">
        💳 Choose Your Plan
      </h1>

      <div className="flex flex-wrap justify-center gap-10 z-10">
        {/* Free Plan Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80 transition-transform transform hover:scale-105 border border-gray-200 hover:border-blue-400 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-2">Free Plan</h2>
          <p className="text-center text-gray-600 mb-4">Ideal for beginners and personal use</p>
          <ul className="text-sm text-gray-700 mb-4 space-y-2">
            <li>✅ Basic AI Tools</li>
            <li>✅ 5 Requests / Day</li>
            <li>❌ No Priority Support</li>
            <li>❌ No Custom Branding</li>
          </ul>
          <div className="text-center font-bold text-xl text-blue-500 mb-4">Free</div>
          <button 
            onClick={handleFreePlan}
            className="w-full py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:shadow-blue-400/50 hover:scale-105 transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Pro Plan Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 w-80 transition-transform transform hover:scale-105 border-2 border-indigo-500 hover:shadow-indigo-300/70">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">Pro Plan</h2>
          <p className="text-center text-gray-600 mb-4">Best for professionals and teams</p>
          <ul className="text-sm text-gray-700 mb-4 space-y-2">
            <li>✅ All AI Tools</li>
            <li>✅ Unlimited Requests</li>
            <li>✅ Priority Support</li>
            <li>✅ Custom Branding</li>
          </ul>
          <div className="text-center font-bold text-xl text-indigo-600 mb-4">$99 / month</div>
          <button 
            onClick={handleProPlan}
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-purple-400/50 hover:scale-105 transition duration-300"
          >
            Upgrade Now 🚀
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-500 z-10 text-center">
        Secure checkout • Cancel anytime • Powered by AI ⚡
      </p>
    </div>
  );
};

export default BillingPage;
