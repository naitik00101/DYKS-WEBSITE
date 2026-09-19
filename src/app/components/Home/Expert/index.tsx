'use client'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ExpertChiefType } from '@/app/types/expertchief'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'

const Expert = () => {
  const [chiefDetail, setChiefDetail] = useState<ExpertChiefType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setChiefDetail(data.ExpertChiefData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='bg-[#EEE2D2]/50'>
      <div className='container'>
        <div className='text-center mb-10'>
          <p className='text-[#D49B53] text-xs sm:text-sm font-semibold mb-3 tracking-[1.5px] uppercase'>
            Our Chefs
          </p>
          <h2 className='font-heading font-normal uppercase text-3xl sm:text-4xl text-[#5C3A21] tracking-[0.5px]'>
            Meet Our Culinary Experts
          </h2>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ChiefDetailSkeleton key={i} />
              ))
            : chiefDetail.map((items, i) => (
                <div key={i}>
                  <div className='m-3 my-10 p-10 text-center bg-[#FAF6F0] rounded-3xl shadow-warm'>
                    <div className='relative'>
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={362}
                        height={262}
                        className='inline-block m-auto w-auto'
                      />
                      <div className='absolute top-[75%] -right-[10%]'>
                        <Image
                          src={'/images/Expert/Linkedin.svg'}
                          alt='linkedin'
                          width={220}
                          height={120}
                        />
                      </div>
                    </div>
                    <div className='mt-16'>
                      <h3 className='font-heading font-normal uppercase text-lg sm:text-xl text-[#5C3A21] tracking-[0.5px] mb-1'>
                        {items.name}
                      </h3>
                      <h4 className='font-heading font-normal uppercase text-xs sm:text-sm text-[#725B48] tracking-[0.5px]'>
                        {items.profession}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Expert
