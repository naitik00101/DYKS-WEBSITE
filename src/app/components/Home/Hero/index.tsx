'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-[#FAF6F0]'>
      <div className='container xl:pt-16 pt-24'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>

            <h1 className='font-heading font-normal uppercase text-[38px] sm:text-[46px] lg:text-[52px] tracking-[0.5px] mb-5 text-[#5C3A21] lg:text-start text-center leading-[1.3]'>

              Elevated Dining at Dyk’s Multicusion
            </h1>
            <p className='text-[#725B48] text-base sm:text-lg lg:text-[20px] font-normal mb-8 lg:text-start text-center leading-relaxed'>
              Indulge in an elegant culinary journey, crafted with locally
              sourced ingredients and world-class flavors — served fresh, every
              day.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='font-heading font-normal uppercase text-xs sm:text-sm tracking-[0.5px] rounded-full text-white py-2.5 px-6 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Menu →
                </button>
              </Link>
              <Link href='/#location'>
                <button className='font-heading font-normal uppercase text-xs sm:text-sm tracking-[0.5px] border border-primary rounded-full py-2.5 px-6 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
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
              className='w-[90%] lg:w-[80%] mx-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
