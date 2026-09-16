import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Location', href: '/#location' },
  { label: 'Docs', href: '/documentation' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Elegant Dining Atmosphere',
    subheading:
      'Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Signature Chef Creations',
    subheading:
      'Taste one-of-a-kind dishes crafted with passion by our top culinary team.',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Fresh, Local Ingredients',
    subheading:
      'We use locally sourced goods daily for unmatched taste and quality.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Hassle-Free Reservations',
    subheading:
      'Reserve online in seconds or walk in anytime — we’re ready when you are.',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/03_dish.webp',
    name: 'Special Masala Dosa',
    price: 220,
  },
  {
    src: '/images/Gallery/02_dish.webp',
    name: 'Aloo Paneer Bird Nest',
    price: 250,
  },
  {
    src: '/images/Gallery/04_dish.webp',
    name: 'Veg. Dry Manchurian',
    price: 170,
  },
  {
    src: '/images/Gallery/01_dish.webp',
    name: 'Paneer Tikka Dry',
    price: 260,
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Paneer Tikka Dry',
    price: '₹260.00',
    description: 'Fresh cottage cheese marinated in aromatic spices and char-grilled to perfection.',
  },
  {
    name: 'Veg. Dry Manchurian',
    price: '₹170.00',
    description: 'Crispy vegetable dumplings tossed in tangy Indo-Chinese Manchurian sauce and fresh greens.',
  },
  {
    name: 'Special Masala Dosa',
    price: '₹220.00',
    description: 'Crispy golden crepe filled with spiced potato masala, served with sambar and fresh chutney.',
  },
  {
    name: 'Tava Pulav',
    price: '₹170.00',
    description: 'Fragrant basmati rice stir-fried on a flat tawa with vegetables, signature spices, and fresh herbs.',
  },
  {
    name: 'Cheese Conti Tikki',
    price: '₹260.00',
    description: 'Crispy continental style patties loaded with melted cheese, served with creamy dip and slaw.',
  },
  {
    name: 'Paneer Sizzler',
    price: '₹500.00',
    description: 'Sizzling platter loaded with grilled paneer, stir-fried vegetables, and smoky house sauce.',
  },
  {
    name: 'Hakka Noodles',
    price: '₹160.00',
    description: 'Wok-tossed noodles with crunchy seasonal vegetables and classic Asian seasonings.',
  },
  {
    name: 'Cheese Bhaji Pav',
    price: '₹200.00',
    description: 'Slow-cooked spiced vegetable mash topped with melted cheese, served with buttery toasted pav.',
  },
  {
    name: 'Veg. Manchow Soup',
    price: '₹150.00',
    description: 'Spicy, tangy dark broth loaded with diced vegetables and topped with crispy fried noodles.',
  },
  {
    name: 'Exotic Pesto Pizza',
    price: '₹280.00',
    description: 'Hand-stretched pizza topped with rich basil pesto, mozzarella, and garden-fresh toppings.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Location', href: '/#location' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
