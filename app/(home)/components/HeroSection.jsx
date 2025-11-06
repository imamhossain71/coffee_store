import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: 'url(/assets/image/chandpur.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='hero-overlay'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>76 Gastropub</h1>
            <p className='mb-5'>where great food and great drinks meet</p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
