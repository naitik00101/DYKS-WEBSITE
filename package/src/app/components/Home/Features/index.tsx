'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='features'>
      <div className='container'>
        <div className='text-center mb-14'>
          <p className='text-[#D49B53] text-xs sm:text-sm font-semibold tracking-[1.5px] uppercase'>
            Why Choose Us
          </p>
          <h2 className='font-heading font-normal text-3xl sm:text-4xl lg:text-5xl text-[#5C3A21] tracking-[0.8px] leading-[1.3] sm:leading-[1.35] lg:leading-[1.4] lg:max-w-60% mx-auto mt-3'>
            Experience More Than Just a Meal
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 mt-24'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <FeaturesSkeleton key={i} />
              ))
            : features.map((items, i) => (
                <div
                  key={i}
                  className='p-8 relative rounded-3xl bg-linear-to-b from-primary/10 to-[#F4ECE1] shadow-warm hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'>
                  <div className='rounded-full flex justify-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-35%] left-[0%]'>
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={510}
                      height={10}
                    />
                  </div>
                  <p className='font-heading font-normal text-lg sm:text-xl text-[#5C3A21] text-center mt-16 mb-2 tracking-[0.5px]'>
                    {items.heading}
                  </p>
                  <p className='text-xs sm:text-sm font-normal text-[#725B48] text-center leading-relaxed tracking-[0.3px]'>
                    {items.subheading}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features
