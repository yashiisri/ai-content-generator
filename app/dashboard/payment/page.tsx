"use client"
import Image from 'next/image';
import React from 'react';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10 bg-gradient-to-br from-purple-100 via-indigo-200 to-purple-300 text-gray-800 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 to-pink-200/20 blur-3xl opacity-40 z-0" />

      <div className="z-10 max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 text-center relative border border-purple-200">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 drop-shadow">
          🔒 Secure Payment
        </h1>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Scan the QR code below using <strong>Google Pay</strong><br />
          or use the UPI ID provided.
        </p>

        <div className="mx-auto w-fit p-3 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out border border-purple-300">
          <Image 
            src="/gpay-qr.jpg" 
            alt="Google Pay QR" 
            width={230} 
            height={230} 
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="mt-6 text-gray-700 text-sm flex flex-col items-center gap-1">
          <span className="font-semibold">UPI ID:</span>
          <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 font-mono text-sm shadow-sm">
            srivastavayashi494@oksbi
          </div>
        </div>

        <button
          onClick={() => {
            navigator.clipboard.writeText("srivastavayashi494@oksbi");
            alert("UPI ID copied to clipboard!");
          }}
          className="mt-4 text-sm text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          📋 Copy UPI ID
        </button>
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs text-gray-500 z-10">
        Thank you for your support 🙌
      </p>
    </div>
  );
};

export default PaymentPage;
