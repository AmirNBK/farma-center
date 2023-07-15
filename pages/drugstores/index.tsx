import React from 'react'
import { Vazirmatn } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import companyPic from '../../assets/Images/companyPic.jpeg'
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import companyPic2 from '../../assets/Images/companyPic2.jpeg'
import { Button } from 'primereact/button';
import DrugstoresSearch from '@/components/DrugstoresSearch/DrugstoresSearch';

const vazir = Vazirmatn({ subsets: ['latin'] })
export default function AboutUs() {

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} />
            <DrugstoresSearch />
        </div>
    )
}
