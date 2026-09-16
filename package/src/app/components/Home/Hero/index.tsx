'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-[#FAF6F0]'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-heading font-normal uppercase text-3xl sm:text-5xl lg:text-6xl tracking-[1px] mb-5 text-[#5C3A21] lg:text-start text-center leading-[1.28] sm:leading-[1.3] lg:leading-[1.32]'>
              Elevated Dining at Dyk’s Multicusion
            </h1>
            <p className='text-[#725B48] text-sm sm:text-base font-normal mb-8 lg:text-start text-center leading-relaxed'>
              Indulge in an elegant culinary journey, crafted with locally
              sourced ingredients and world-class flavors — served fresh, every
              day.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='font-heading font-normal uppercase text-sm sm:text-base tracking-[0.5px] rounded-full text-white py-3 px-7 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Menu →
                </button>
              </Link>
              <Link href='/#location'>
                <button className='font-heading font-normal uppercase text-sm sm:text-base tracking-[0.5px] border border-primary rounded-full py-3 px-7 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  View Location
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-[#F4ECE1] p-3 gap-4 items-center bottom-10 left-10 rounded-xl absolute shadow-warm'>
              <Image
                src={'/images/hero/pizza.webp'}
                alt='pizza-image'
                width={68}
                height={68}
              />
              <p className='font-heading font-normal uppercase text-xs sm:text-sm text-[#2B1B10] tracking-[0.5px]'>
                Over 50+ <br /> signature dishes
              </p>
            </div>
            <Image
              src='/images/hero/banner-image.webp'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
