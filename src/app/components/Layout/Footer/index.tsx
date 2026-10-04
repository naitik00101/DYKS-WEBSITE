'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <footer className='bg-[#23150C] text-[#EEE2D2] py-2 border-t border-[#362315] mt-12 overflow-hidden whitespace-nowrap select-none'>
      <style jsx>{`
        @keyframes marqueeLtr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLtr 30s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className='animate-marquee-ltr flex items-center gap-12'>
        {/* Set 1 */}
        <div className='flex items-center gap-8 shrink-0'>
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='bg-[#FAF6F0] p-1 rounded-full flex items-center justify-center shadow-sm'>
              <Image
                src='/images/Logo/dyks-logo-official.png'
                alt="Dyk's Multicusion Logo"
                width={24}
                height={24}
                className='w-5 h-5 object-contain'
                quality={100}
              />
            </div>
            <span className='font-heading font-normal uppercase text-xs sm:text-sm text-[#FAF6F0] tracking-[0.5px]'>
              Dyk's Multicusion
            </span>
          </Link>
          
          <p className='text-xs text-[#EEE2D2]/80 tracking-[0.3px]'>
            © 2026 - Dyk's Multicusion. All Rights Reserved
          </p>
          
          <p className='text-xs text-[#EEE2D2]/80 tracking-[0.3px]'>
            Website by <span className='text-[#D49B53] font-medium'>BM Tech</span>
          </p>
        </div>

        {/* Set 2 */}
        <div className='flex items-center gap-8 shrink-0' aria-hidden='true'>
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='bg-[#FAF6F0] p-1 rounded-full flex items-center justify-center shadow-sm'>
              <Image
                src='/images/Logo/dyks-logo-official.png'
                alt="Dyk's Multicusion Logo"
                width={24}
                height={24}
                className='w-5 h-5 object-contain'
                quality={100}
              />
            </div>
            <span className='font-heading font-normal uppercase text-xs sm:text-sm text-[#FAF6F0] tracking-[0.5px]'>
              Dyk's Multicusion
            </span>
          </Link>
          
          <p className='text-xs text-[#EEE2D2]/80 tracking-[0.3px]'>
            © 2026 - Dyk's Multicusion. All Rights Reserved
          </p>
          
          <p className='text-xs text-[#EEE2D2]/80 tracking-[0.3px]'>
            Website by <span className='text-[#D49B53] font-medium'>BM Tech</span>
          </p>
        </div>

        {/* Set 3 */}
        <div className='flex items-center gap-8 shrink-0' aria-hidden='true'>
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='bg-[#FAF6F0] p-1 rounded-full flex items-center justify-center shadow-sm'>
              <Image
                src='/images/Logo/dyks-logo-official.png'
                alt="Dyk's Multicusion Logo"
                width={24}
                height={24}
                className='w-5 h-5 object-contain'
                quality={100}
              />
            </div>
            <span className='font-heading font-normal uppercase text-xs sm:text-sm text-[#FAF6F0] tracking-[0.5px]'>
              Dyk's Multicusion
            </span>
          </Link>
          
          <p className='text-xs text-[#EEE2D2]/80 tracking-[0.3px]'>
            © 2026 - Dyk's Multicusion. All Rights Reserved
          </p>
          
          <p className='text-xs text-[#EEE2D2]/80 tracking-[0.3px]'>
            Website by <span className='text-[#D49B53] font-medium'>BM Tech</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
