import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection'
import { PrimeReactProvider } from 'primereact/context';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";    


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      style={{ fontFamily: 'Inter' }}
      className={`flex min-h-screen flex-col items-center ${inter.className}`
      }
    >
      <PrimeReactProvider>
        <div style={{ backgroundColor: '#313232', transform: 'skewY(-6deg)', margin: '-80px 0px', padding: '80px 0px 130px 0px' }}>
          <Header />
          <HeroSection />
        </div>
        <FeaturesSection />
      </PrimeReactProvider>
    </main>
  )
}
