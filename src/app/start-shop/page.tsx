import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { ArrowLeft } from "lucide-react"; // Install lucide-react for the back icon

// Applying DM Sans specifically for this page structure
const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function StartShop() {
  return (
    <main
      className={`flex min-h-screen flex-col md:flex-row bg-white ${dmSans.className}`}
    >
      {/* LEFT SIDE: Image Section */}
      {/* 
          In your design, the image fills the vertical height. 
          Using 'h-[50vh] md:h-screen' ensures it looks good on mobile and desktop.
      */}
      <section className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
        <Image
          src="/shop/shop-setup.jpg" // Referenced from your provided assets
          alt="Beauty store setup products"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>

      {/* RIGHT SIDE: Content Section */}
      <section className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12 bg-white">
        <div className="max-w-md w-full mx-auto md:mx-0">
          {/* Back Button */}
          <Link
            href="/categories"
            className="flex items-center gap-2 text-gray-900 font-bold mb-4 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>

          {/* Heading */}
          <h1 className="text-xl md:text-xl font-medium text-gray-900 mb-4 leading-tight">
            Now let's bring your beauty store to life ✨
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-sm mb-5 leading-relaxed max-w-[90%]">
            We'll guide you through creating your store and adding your products
            so you can start selling with confidence.
          </p>

          {/* Action Button */}
          <button className="bg-[#8B2D3A] text-white px-8 py-3 rounded-lg font-bold text-sm md:text-sm hover:bg-[#6b222d] transition-colors shadow-sm w-full md:w-auto">
            Start Your Shop
          </button>
        </div>
      </section>
    </main>
  );
}
