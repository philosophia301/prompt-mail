import { useState } from "react";

export default function Prompt({ setCurrentPage }) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col flex-1 gap-8 px-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#111418] tracking-light text-4xl font-black leading-tight text-left">
            Customize your writing prompt
          </h3>
          <p className="text-[#8c9aa7] text-base font-normal leading-normal">
            Write your own prompt or click keywords below to add them to your
            prompt. We'll help make it special.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <input
              className="w-full h-14 px-4 text-[#111418] text-base font-normal leading-normal rounded-lg border border-[#dce0e5] resize-none focus:outline-none focus:border-[#308ce8]"
              placeholder="Enter your text here..."
              id="prompt-input"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="flex cursor-pointer items-center justify-center rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium"
              onClick={() => {
                document.getElementById("prompt-input").value +=
                  ", Expressionism";
              }}
            >
              <span className="truncate">Expressionism</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium">
              <span className="truncate">Surrealism</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium">
              <span className="truncate">Baroque</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium">
              <span className="truncate">Romanticism</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium">
              <span className="truncate">Impressionism</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium">
              <span className="truncate">Realism</span>
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-2">
            <button
              className="flex min-w-[84px] max-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={() => setCurrentPage("upload")}
            >
              <span className="truncate">Back</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#308ce8] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={() => setCurrentPage("loading")}
            >
              <span className="truncate">Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
