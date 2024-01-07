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
import { getPosts, getQueryFooter, getQueryHeader, getQueryHomepage, getQueryPolicies } from "@/lib/service";


const vazir = Vazirmatn({ subsets: ['latin'] })
export default function Home({ data, headerData, footerData , policiesData }: { data: any, headerData: any, footerData: any , policiesData : any }) {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${vazir.className}`
      }
    >
      <title> Pharma center </title>
      <PrimeReactProvider>
        <div
          className={`${style.HeroSection}`}
          style={{ backgroundColor: '#313232', zIndex: '1', transform: 'skewY(-6deg)' }}>
          <Header HomePageHeader headerItems={headerData?.HeaderItems?.items} />
          <HeroSection data={data?.HomepageData?.heroSection[0]} />
        </div>
        <FeaturesSection data={data?.HomepageData?.featuresSection} />
        <div style={{ background: '#313232' }} className='w-full z-0'>
          <AboutUs text={data?.HomepageData?.aboutUsSection} />
          <Services data={data?.HomepageData?.servicesSection} />
          <ProvidedServices data={data?.HomepageData?.locationservices[0]} />
          <Blogs data={data?.HomepageData?.blogs} />
          <ContactUs data={data?.HomepageData?.contactUsSection[0]} />
          <Footer data={footerData?.FooterData?.footer[0]} />
          <PoliciesSection data={policiesData?.policiesSectionData?.policiesSection[0]} />
        </div>
      </PrimeReactProvider>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getQueryHomepage();
  const headerData = await getQueryHeader();
  const footerData = await getQueryFooter();
  const policiesData = await getQueryPolicies();

  return {
    props: {
      data,
      headerData,
      footerData,
      policiesData
    },
    revalidate: 3600,
  };
};
