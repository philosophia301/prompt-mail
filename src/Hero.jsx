import { useState } from 'react'
import heroImage from './assets/hero-image.png'

export default function Hero({ setCurrentPage }) {
    return (
        <div className='flex flex-1 w-full h-screen'>
            <div className='flex flex-1 w-full h-full p-40'>
                <div className='w-full rounded-xl bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroImage})` }}>
                    <div className='flex flex-col h-full gap-2 px-10 py-8 rounded-xl text-white items-start justify-end'>
                        <h1 className='text-4xl font-black leading-tight tracking-[-0.015em]'>Generate custom AI writing prompts from your photos</h1>
                        <h2 className='text-sm font-normal leading-normal'>Boost your creativity with unique, personalized prompts. Just upload a photo and let our AI do the rest.</h2>
                        <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#308ce8] text-white text-sm font-bold leading-normal tracking-[0.015em]' onClick={() => setCurrentPage('upload')}>
                            <span className='truncate'>Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}