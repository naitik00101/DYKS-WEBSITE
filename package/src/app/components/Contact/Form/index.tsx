'use client'
import React from 'react'

const ContactForm = () => {
  return (
    <section id='location' className='scroll-mt-20 my-16'>
      <div className='container'>
        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-center'>
          Visit Us
        </p>
        <h2 className='mb-9 font-bold tracking-tight text-center'>
          Our Location
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4ECE1] p-6 lg:p-8 rounded-3xl shadow-sm'>
          <div className='lg:col-span-5 flex flex-col gap-6'>
            <h3 className='text-2xl font-bold text-[#5C3A21]'>
              Dyk's Multicusion
            </h3>
            <p className='text-[#725B48] text-base leading-relaxed'>
              Experience fine multicuisine dining in the heart of Surat. Join us at Urban Food Park for an unforgettable meal with family and friends.
            </p>

            <div className='flex flex-col gap-4 mt-2'>
              <div className='flex items-start gap-3'>
                <div className='bg-primary/10 p-3 rounded-full text-primary font-bold'>
                  📍
                </div>
                <div>
                  <h4 className='font-semibold text-[#5C3A21]'>Address</h4>
                  <p className='text-[#725B48] text-sm'>
                    Urban Food Park, Vesu, Surat, Gujarat 395007
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='bg-primary/10 p-3 rounded-full text-primary font-bold'>
                  📞
                </div>
                <div>
                  <h4 className='font-semibold text-[#5C3A21]'>Contact Numbers</h4>
                  <p className='text-[#725B48] text-sm'>
                    <a href='tel:7203977452' className='hover:text-primary transition-colors'>+91 7203977452</a> / <a href='tel:9979377452' className='hover:text-primary transition-colors'>+91 9979377452</a>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='bg-primary/10 p-3 rounded-full text-primary font-bold'>
                  ✉️
                </div>
                <div>
                  <h4 className='font-semibold text-[#5C3A21]'>Email</h4>
                  <p className='text-[#725B48] text-sm'>
                    <a href='mailto:Dyksmulticusion@gmail.com' className='hover:text-primary transition-colors'>Dyksmulticusion@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7 w-full overflow-hidden rounded-2xl shadow-md h-[400px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.122668377893!2d72.76347679999999!3d21.147516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da197b6520b%3A0xcdf7edf47d876cae!2sDyk%27s%20Multicusion!5e0!3m2!1sen!2sin!4v1788619076940!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
              title="Dyk's Multicusion Location Map"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
