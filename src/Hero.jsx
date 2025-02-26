import { useState } from "react";
import heroImage from "./assets/hero-image.png";

export default function Hero({ setCurrentPage }) {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div
        className="flex flex-1 rounded-xl bg-cover bg-center min-h-[500px] justify-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroImage})`,
        }}
      >
        <div className="flex flex-1 flex-col gap-2 p-10 rounded-xl text-white items-start justify-end">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.015em]">
            Generate custom AI writing prompts from your photos
          </h1>
          <h2 className="text-sm font-normal leading-normal">
            Boost your creativity with unique, personalized prompts. Just upload
            a photo and let our AI do the rest.
          </h2>
          <button
            className="flex min-w-[84px] max-w-[480px] mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#308ce8] text-sm font-bold tracking-[0.015em]"
            onClick={() => setCurrentPage("upload")}
          >
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}
