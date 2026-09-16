'use client'
import React from 'react'
import { Icon } from '@iconify/react'

const ContactForm = () => {
  return (
    <section id='location' className='scroll-mt-20 my-16'>
      <div className='container'>
        <div className='text-center mb-10'>
          <p className='text-[#D49B53] text-xs sm:text-sm font-semibold mb-3 tracking-[1.5px] uppercase'>
            Visit Us
          </p>
          <h2 className='font-heading font-normal uppercase text-3xl sm:text-4xl text-[#5C3A21] tracking-[0.5px]'>
            Our Location
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4ECE1] p-6 lg:p-10 rounded-3xl shadow-sm border border-[#EEE2D2]'>
          <div className='lg:col-span-5 flex flex-col gap-6'>
            <h3 className='font-heading font-normal uppercase text-2xl sm:text-3xl text-[#5C3A21] tracking-[0.5px]'>
              Dyk's Multicusion
            </h3>
            <p className='text-[#725B48] text-base leading-relaxed'>
              Experience fine multicuisine dining in the heart of Surat. Join us at Urban Food Park for an unforgettable meal with family and friends.
            </p>

            <div className='flex flex-col gap-5 mt-2'>
              <div className='flex items-start gap-4'>
                <div className='bg-[#5C3A21]/10 p-3 rounded-2xl text-[#5C3A21] flex items-center justify-center shrink-0 mt-0.5'>
                  <Icon icon='tabler:map-pin-filled' width={22} height={22} className='text-[#5C3A21]' />
                </div>
                <div>
                  <h4 className='font-heading font-normal uppercase text-sm sm:text-base text-[#5C3A21] tracking-[0.5px] mb-1'>Address</h4>
                  <p className='text-[#725B48] text-sm leading-snug'>
                    Urban Food Park, Vesu, Surat, Gujarat 395007
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-[#5C3A21]/10 p-3 rounded-2xl text-[#5C3A21] flex items-center justify-center shrink-0 mt-0.5'>
                  <Icon icon='tabler:phone-filled' width={22} height={22} className='text-[#5C3A21]' />
                </div>
                <div>
                  <h4 className='font-heading font-normal uppercase text-sm sm:text-base text-[#5C3A21] tracking-[0.5px] mb-1'>Contact Numbers</h4>
                  <p className='text-[#725B48] text-sm leading-snug'>
                    <a href='tel:7203977452' className='hover:text-[#D49B53] transition-colors'>+91 7203977452</a> / <a href='tel:9979377452' className='hover:text-[#D49B53] transition-colors'>+91 9979377452</a>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-[#5C3A21]/10 p-3 rounded-2xl text-[#5C3A21] flex items-center justify-center shrink-0 mt-0.5'>
                  <Icon icon='tabler:mail-filled' width={22} height={22} className='text-[#5C3A21]' />
                </div>
                <div>
                  <h4 className='font-heading font-normal uppercase text-sm sm:text-base text-[#5C3A21] tracking-[0.5px] mb-1'>Email</h4>
                  <p className='text-[#725B48] text-sm leading-snug'>
                    <a href='mailto:Dyksmulticusion@gmail.com' className='hover:text-[#D49B53] transition-colors'>Dyksmulticusion@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7 w-full overflow-hidden rounded-2xl shadow-md h-[420px] relative group border border-[#EEE2D2]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.122668377893!2d72.76347679999999!3d21.147516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da197b6520b%3A0xcdf7edf47d876cae!2sDyk%27s%20Multicusion!5e0!3m2!1sen!2sin!4v1788619076940!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{
                border: 0,
                filter: 'sepia(35%) contrast(104%) saturate(110%) hue-rotate(-12deg) brightness(0.97)',
              }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
              title="Dyk's Multicusion Location Map"
              className='w-full h-full transition-all duration-500 group-hover:brightness-100'></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
