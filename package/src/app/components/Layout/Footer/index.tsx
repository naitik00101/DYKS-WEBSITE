'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='pt-16 bg-[#23150C] text-[#EEE2D2] mt-20'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <Logo textColor='text-[#FAF6F0]' isDarkBg={true} />
            <p className='text-xs sm:text-sm font-normal text-[#EEE2D2]/80 my-5 max-w-70% leading-relaxed tracking-[0.4px]'>
              Experience fine multicuisine dining in Surat with authentic flavors and unforgettable moments.
            </p>
            <div className='flex gap-6 items-center'>
              <Link
                href='https://www.instagram.com/dyks_multicusion/'
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-[#2B1B10] hover:bg-[#D49B53] rounded-full shadow-xl p-3 transition duration-300'
                aria-label='Instagram'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='16'
                  height='16'
                  className='group-hover:text-white text-[#EEE2D2]'
                />
              </Link>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='flex gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <p className='text-[#FFFDFC] font-heading font-normal text-base sm:text-lg tracking-[0.5px] mb-6'>
                    {product.section}
                  </p>
                  <ul className='space-y-2.5'>
                    {product.links.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className='text-[#EEE2D2]/80 hover:text-[#D49B53] text-xs sm:text-sm font-normal tracking-[0.4px] transition duration-300 py-1 block'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-6'>
              <div className='flex items-start gap-2.5'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-[#D49B53] text-2xl inline-block mt-0.5 flex-shrink-0'
                />
                <p className='text-[#EEE2D2]/80 text-xs sm:text-sm leading-relaxed tracking-[0.4px]'>
                  Urban Food Park, Vesu, Surat, Gujarat 395007
                </p>
              </div>
              <div className='flex items-start gap-2.5'>
                <Icon
                  icon='solar:phone-bold'
                  className='text-[#D49B53] text-2xl inline-block mt-0.5 flex-shrink-0'
                />
                <div className='flex flex-col text-xs sm:text-sm text-[#EEE2D2]/80 gap-1 tracking-[0.4px]'>
                  <Link href='tel:7203977452' className='hover:text-[#D49B53] transition duration-300'>
                    +91 7203977452
                  </Link>
                  <Link href='tel:9979377452' className='hover:text-[#D49B53] transition duration-300'>
                    +91 9979377452
                  </Link>
                </div>
              </div>
              <Link href='mailto:Dyksmulticusion@gmail.com'>
                <div className='flex items-center gap-2.5'>
                  <Icon
                    icon='solar:mailbox-bold'
                    className='text-[#D49B53] text-2xl inline-block flex-shrink-0'
                  />
                  <p className='text-[#EEE2D2]/80 hover:text-[#D49B53] text-xs sm:text-sm tracking-[0.4px] transition duration-300'>
                    Dyksmulticusion@gmail.com
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t border-[#362315] py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-[#EEE2D2]/60'>
            @2026 - Dyk's Multicusion. All Rights Reserved by{' '}
            <Link
              href='https://getnextjstemplates.com/'
              className='hover:text-[#D49B53] hover:underline transition duration-300'>
              GetNextjsTemplates
            </Link>
          </p>

          <div className=''>
            <Link
              href='#'
              className='text-sm text-[#EEE2D2]/60 px-5 border-r border-[#362315] hover:text-[#D49B53] hover:underline transition duration-300'>
              Privacy policy
            </Link>
            <Link
              href='#'
              className='text-sm text-[#EEE2D2]/60 px-5 hover:text-[#D49B53] hover:underline transition duration-300'>
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
