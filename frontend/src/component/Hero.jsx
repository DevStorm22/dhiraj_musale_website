import React from 'react'

function Hero() {
    return (
        <div className="bg-gray-800 py-35 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl pb-12 font-bold italic">Crafting Dreams</h1>
            <p className="text-white text-2xl pb-15 font-bold">Where Passion Infuses Every Pixel, Every Frame, Every Creation. It’s Not Just Work, It’s My Breath, My Bliss.</p>
            <iframe className="w-[1400px] h-[787.5px]" src="https://www.youtube.com/embed/dGxpKKMVmWA?si=mSJLqtE3tLi_nxWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default Hero