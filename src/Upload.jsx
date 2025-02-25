import { useState } from 'react'

export default function Upload({ setCurrentPage }) {
    const [isUploaded, setIsUploaded] = useState(false)

    return (
        <div className='flex h-full grow flex-col'>
            <div className='px-40 flex flex-1 justify-center py-30'>
                <div className='layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1'>
                    <h3 className='text-[#111418] tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5'>Share a photo of someone special to you</h3>
                    <p className='text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4'>
                        Upload a photo of someone you care about and we'll help you create a meaningful writing prompt based on your special memory.
                    </p>
                    <div className='flex flex-col p-4'>
                        {!isUploaded ? (
                            <div className='flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dce0e5] px-6 py-14'>
                                <p className='text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center'>Upload Photo</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="photo-upload"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setIsUploaded(true)
                                        }
                                    }}
                                />
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                                    onClick={() => document.getElementById('photo-upload').click()}
                                >
                                    <span className='truncate'>Upload Photo</span>
                                </button>
                            </div>
                        ) : (
                            <div className='flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dce0e5] px-6 py-14'>
                                <p className='text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center'>Photo Uploaded Successfully!</p>
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                                    onClick={() => {
                                        setIsUploaded(false)
                                        document.getElementById('photo-upload').value = ''
                                    }}
                                >
                                    <span className='truncate'>Upload Different Photo</span>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-end pr-4'>
                        <div className='flex gap-2'>
                            <button className='flex min-w-[84px] max-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]' onClick={() => setCurrentPage('hero')}>
                                <span className='truncate'>Back</span>
                            </button>
                            <button className="flex min-w-[84px] max-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#308ce8] text-white text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => setCurrentPage('prompt')}>
                                <span className="truncate">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}