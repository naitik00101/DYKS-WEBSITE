'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  console.log(path)

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href}
        className={`font-heading font-normal uppercase text-xs sm:text-sm tracking-[0.5px] py-1.5 flex items-center gap-1 duration-300 ${
          path === item.href
            ? 'text-primary '
            : ' text-[#725B48]  hover:text-primary'
        }`}>
        {item.label}
        {item.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 w-60 bg-[#FAF6F0] shadow-lg rounded-lg `}
          data-aos='fade-up'
          data-aos-duration='500'>
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 font-heading font-normal uppercase text-xs tracking-[0.5px] ${
                path === subItem.href
                  ? 'bg-primary text-white'
                  : 'text-[#2B1B10] hover:bg-primary hover:text-white'
              }`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
