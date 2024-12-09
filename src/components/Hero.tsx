import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
<div
  className="min-h-screen bg-no-repeat bg-[url('/hero-image.png')] bg-cover"
  style={{ backgroundSize: "35%" , backgroundPosition: "Left 100px"}}
>
  <Navbar />
  <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)'>
    <div className='hidden lg:block'>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p>I'm</p>
          <p>Naveerah</p>
          <p>Jamil</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero;
