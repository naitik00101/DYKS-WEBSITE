import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  textColor?: string
  isDarkBg?: boolean
}

const Logo: React.FC<LogoProps> = ({ textColor = 'text-[#5C3A21]', isDarkBg = false }) => {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <div className={isDarkBg ? 'bg-[#FAF6F0] p-1.5 rounded-full flex items-center justify-center shadow-md' : 'flex items-center justify-center'}>
        <Image
          src='/images/Logo/dyks-logo-official.png'
          alt="Dyk's Multicusion Logo"
          width={48}
          height={48}
          className='w-12 h-12 object-contain'
          quality={100}
        />
      </div>
      <p className={`${textColor} font-heading font-normal text-lg sm:text-xl tracking-[0.5px]`}>Dyk's Multicusion</p>
    </Link>
  )
}

export default Logo
