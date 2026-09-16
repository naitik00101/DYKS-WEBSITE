import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Gallery from '@/app/components/Home/Gallery'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: "Dyk's Multicusion | Urban Food Park, Vesu, Surat",
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Gallery />
      <ContactForm />
    </main>
  )
}
