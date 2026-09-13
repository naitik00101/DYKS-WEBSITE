'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Cook = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const lines = title.querySelectorAll<HTMLElement>('.title-line')
    const numLines = lines.length

    const updateScrollFill = () => {
      const rect = title.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      const startOffset = windowHeight * 0.85
      const endOffset = windowHeight * 0.25

      let totalProgress = (startOffset - rect.top) / (startOffset - endOffset)
      totalProgress = Math.max(0, Math.min(1, totalProgress))

      lines.forEach((line, index) => {
        const sliceSize = 1 / numLines
        const sliceStart = index * sliceSize

        let lineProgress = (totalProgress - sliceStart) / sliceSize
        lineProgress = Math.max(0, Math.min(1, lineProgress))

        const lineFillPercent = (1 - lineProgress) * 100
        line.style.setProperty('--line-fill', `${lineFillPercent}%`)
      })
    }

    window.addEventListener('scroll', updateScrollFill, { passive: true })
    window.addEventListener('resize', updateScrollFill, { passive: true })
    updateScrollFill()

    return () => {
      window.removeEventListener('scroll', updateScrollFill)
      window.removeEventListener('resize', updateScrollFill)
    }
  }, [])

  return (
    <section className='relative py-16' id='aboutus'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center'>
          
          {/* LEFT COLUMN: Image */}
          <div className='lg:col-span-5 flex justify-center lg:justify-start'>
            <div className='w-full max-w-[479px] overflow-hidden rounded-md shadow-lg'>
              <Image
                src='/images/Cook/cook.webp'
                alt='Restaurant dining atmosphere'
                width={479}
                height={619}
                className='w-full h-[619px] object-cover block'
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className='lg:col-span-7 flex flex-col gap-7'>
            
            {/* Subtitle */}
            <div className='inline-flex items-center gap-2 text-[15px] font-semibold text-[#5C3A21] uppercase tracking-[0.5px]'>
              <span className='inline-flex items-center justify-center text-[#5C3A21]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path d='M19.9382 13.9475C19.8615 13.825 19.7274 13.75 19.5832 13.75H0.416591C0.272411 13.75 0.138271 13.825 0.0624112 13.9475C-0.0134091 14.07 -0.0209091 14.2233 0.0440909 14.3525C0.629091 15.5233 1.80491 16.25 3.11323 16.25H16.8865C18.194 16.25 19.3699 15.5233 19.9566 14.3533C20.0199 14.2233 20.0141 14.0708 19.9382 13.9475Z' fill='currentColor'/>
                  <path d='M11.1424 5.50332C11.2107 5.34914 11.2499 5.17914 11.2499 5C11.2499 4.31082 10.6891 3.75 9.99991 3.75C9.31073 3.75 8.74991 4.31082 8.85741 5.50332C5.08159 6.0225 2.09991 9.0625 1.71741 12.9167H18.2816C17.8991 9.06418 14.9166 6.0225 11.1424 5.50332ZM9.61073 7.91582C7.27991 8.07 5.27241 9.59164 4.49823 11.7925C4.43823 11.9633 4.27655 12.0708 4.10491 12.0708C4.05909 12.0708 4.01241 12.0633 3.96659 12.0475C3.74991 11.9708 3.63577 11.7333 3.71159 11.5158C4.59659 8.99914 6.89077 7.26 9.55577 7.08414C9.77659 7.06996 9.98327 7.24246 9.99909 7.47246C10.0141 7.7025 9.84073 7.90082 9.61073 7.91582Z' fill='currentColor'/>
                </svg>
              </span>
              <span>About Us</span>
            </div>

            {/* Main Title (Line-by-Line Scroll Fill Animation) */}
            <h2 ref={titleRef} className='flex flex-col gap-[2px] text-[34px] md:text-[34px] leading-[1.25] tracking-[0.5px] uppercase w-full font-heading font-normal'>
              <span className='title-line font-heading'>From locally sourced to</span>
              <span className='title-line font-heading'>carefully crafted recipes, we</span>
              <span className='title-line font-heading'>believe great food brings</span>
              <span className='title-line font-heading'>people together.</span>
            </h2>

            {/* Highlight Box */}
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-5 border border-dashed border-[#5C3A21]/20 rounded p-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 border border-dashed border-[#5C3A21]/30 rounded-full flex items-center justify-center shrink-0'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 44 44' fill='none'>
                    <path d='M5.86575 24.9989C4.54717 24.9989 3.47449 23.9262 3.47449 22.6076C3.47449 21.2891 4.54717 20.2164 5.86575 20.2164C7.18425 20.2164 8.25693 21.2891 8.25693 22.6076C8.25693 23.9262 7.18425 24.9989 5.86575 24.9989Z' fill='#5C3A21'/>
                    <path d='M37.3996 31.8814C37.4162 31.6677 37.4256 31.4532 37.4256 31.2383C37.4256 26.9111 34.0921 23.3484 29.8582 22.982L25.6419 7.84645C25.3557 6.81896 24.2864 6.21594 23.2593 6.50204L17.2521 8.17551C16.1063 7.57619 14.8041 7.23662 13.4239 7.23662H1.05972C0.48881 39.9664 42.9516 39.9664 43.9177 39.3211L37.3996 31.8814Z' fill='#5C3A21'/>
                  </svg>
                </div>
                <h3 className='font-heading text-[15px] leading-[1.35] text-[#5C3A21] uppercase tracking-[0.5px] font-normal'>
                  Fresh &amp; locally sourced ingredients
                </h3>
              </div>

              <div className='hidden sm:block w-[1px] h-10 bg-[#5C3A21]/15' />

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 border border-dashed border-[#5C3A21]/30 rounded-full flex items-center justify-center shrink-0'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 44 44' fill='none'>
                    <path d='M38.0876 12.2135C37.8069 11.9045 37.4432 11.6843 37.0436 11.5718L37.5441 5.81133C37.5852 5.3392 37.44 4.87937 37.1351 4.5165C36.8302 4.15364 36.4023 3.93124 35.9303 3.89024L33.5374 3.68228C33.065 3.64111 32.6055 3.78647 32.2426 4.0914L12.5646 44H31.4359C33.8894 44 35.9104 42.2164 36.1371 39.8512L38.6316 13.8344Z' fill='#5C3A21'/>
                  </svg>
                </div>
                <h3 className='font-heading text-[15px] leading-[1.35] text-[#5C3A21] uppercase tracking-[0.5px] font-normal'>
                  Clean, cozy atmosphere inside
                </h3>
              </div>
            </div>

            {/* Bottom Row */}
            <div className='flex flex-wrap items-center justify-between gap-6 pt-2'>
              
              {/* Customer Rating Block */}
             

              {/* Experience Counter Block */}
              <div className='flex items-baseline gap-3'>
                <span className='font-heading text-[72px] leading-none text-[#5C3A21] font-normal tracking-[1px]'>
                  15+
                </span>
                <span className='text-[13px] font-medium text-[#5C3A21] leading-[1.2] max-w-[80px]'>
                  Year Experience
                </span>
              </div>

              {/* Action Button */}
              <a
                href='#aboutus'
                className='group inline-flex items-center gap-[10px] px-6 py-3 border border-[#5C3A21]/20 rounded text-[#5C3A21] font-heading text-sm uppercase transition-all duration-350 hover:bg-[#5C3A21] hover:border-[#5C3A21] hover:text-white hover:shadow-lg'
              >
                <span>About Us</span>
                <span className='transition-transform duration-350 group-hover:translate-x-1'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='14' viewBox='0 0 18 14' fill='none'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M17 5.66001C14.562 5.66001 12.34 3.439 12.34 1V0H10.34V1C10.34 2.774 11.118 4.438 12.339 5.66001H0V7.66001H12.339C11.118 8.88201 10.34 10.546 10.34 12.32V13.32H12.34V12.32C12.34 9.88101 14.562 7.66001 17 7.66001H18V5.66001H17Z' fill='currentColor'/>
                  </svg>
                </span>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Cook
