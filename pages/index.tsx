import { Vazirmatn } from 'next/font/google'
import Header from '../components/Header/Header'
import HeroSection from '@/components/Header/HeroSection/HeroSection'
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import AboutUs from '@/components/AboutUs/AboutUs'
import Services from '@/components/Services/Services'
import ProvidedServices from '@/components/ProvidedServices/ProvidedServices'
import Blogs from '@/components/Blogs/Blogs'
import ContactUs from '@/components/ContactUs/ContactUs'
import Footer from '@/components/Footer/Footer'
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection'
import style from './index.module.scss'
import 'primeicons/primeicons.css';
import { GetStaticProps } from "next";
import { getPosts, getQueryHomepage } from "@/lib/service";


const vazir = Vazirmatn({ subsets: ['latin'] })
export default function Home({ data }: { data: any }) {

  console.log(data);


  return (
    <main
      className={`flex min-h-screen flex-col items-center ${vazir.className}`
      }
    >
      <title> Farma center </title>
      <PrimeReactProvider>
        <div
          className={`${style.HeroSection}`}
          style={{ backgroundColor: '#313232', zIndex: '1', transform: 'skewY(-6deg)' }}>
          <Header HomePageHeader headerItems={data?.HomepageData?.header} />
          <HeroSection title={data?.HomepageData?.welcomeTitle} description={data?.HomepageData?.welcomeDescription} />
        </div>
        <FeaturesSection />
        <div style={{ background: '#313232' }} className='w-full z-0'>
          <AboutUs text={data?.HomepageData?.aboutUsText} />
          <Services />
          <ProvidedServices title={data?.HomepageData?.locationservices?.title} description={data?.HomepageData?.locationservices?.description} />
          <Blogs />
          <ContactUs />
          <Footer />
          <PoliciesSection />
        </div>
      </PrimeReactProvider>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getQueryHomepage();

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
