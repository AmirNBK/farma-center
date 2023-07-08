import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      style={{ fontFamily: 'Inter' }}
      className={`flex min-h-screen flex-col items-center ${inter.className}`
      }
    >
      <div style={{ backgroundColor: '#313232', transform: 'skewY(-6deg)', margin: '-80px 0px', padding: '80px 0px 110px 0px' }}>
        <Header />
        <HeroSection />
      </div>
    </main>
  )
}
