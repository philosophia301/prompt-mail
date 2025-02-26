import { useState } from "react";

export default function Header({ setCurrentPage }) {
  return (
    <header className="sticky top-0 py-3 px-6 flex justify-between items-center border-b border-gray-200">
      <h2
        className="text-[#111418] text-lg font-bold tracking-[-0.025em] cursor-pointer"
        onClick={() => setCurrentPage("hero")}
      >
        Prompt Letter
      </h2>
      <nav className="flex justify-between items-center gap-8">
        <ul className="hidden md:flex gap-6">
          <li className="text-[#111418] text-sm font-medium">
            <a href="#">About Us</a>
          </li>
          <li className="text-[#111418] text-sm font-medium">
            <a href="#">Explore Prompts</a>
          </li>
          <li className="text-[#111418] text-sm font-medium">
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="flex gap-2 h-8">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 bg-[#308ce8] text-white text-sm font-bold tracking-[0.015em]">
            <span className="truncate">Sign Up</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold tracking-[0.015em]">
            <span className="truncate">Login</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
