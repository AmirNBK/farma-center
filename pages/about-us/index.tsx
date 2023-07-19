import React from 'react';
import { Vazirmatn } from 'next/font/google';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import companyPic from '../../assets/Images/companyPic.jpeg';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import companyPic2 from '../../assets/Images/companyPic2.jpeg';
import { Button } from 'primereact/button';
import { getQueryAboutUs, getQueryFooter, getQueryHeader, getQueryPolicies } from '@/lib/service';
import { GetStaticProps } from "next";

const vazir = Vazirmatn({ subsets: ['latin'] });

function renderWithLineBreaks(text: string) {
    const lines = text.split('←');
    return lines.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
        </React.Fragment>
    ));
}

export default function AboutUs({ data, headerData, footerData, policiesData }: { data: any, headerData: any, footerData: any, policiesData: any }) {

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`} style={{ background: '#313232' }}>
            <Header HomePageHeader={false} headerItems={headerData?.HeaderItems?.items} />
            <h1 className='text-3xl font-semibold text-white'> درباره ما </h1>
            <div className='flex xl:flex-row flex-col items-center gap-10 sm:gap-20 mt-10 px-8'>
                <Image src={companyPic} alt='pic' className='rounded-md' style={{ flex: '1', width: '700px' }} />
                <div className='AboutUs__descriptions text-white flex items-center xl:items-start flex-col justify-between' style={{ direction: 'rtl', flex: '2' }}>
                    <p className='text-lg'>
                        {renderWithLineBreaks(data?.AboutUsData?.aboutUs)}
                    </p>
                    <button className='w-fit' style={{ border: '1px solid #ebdab2', color: '#ebdab2', padding: '8px 35px', margin: '20px 0px', borderRadius: '6px' }}>
                        تماس با ما
                    </button>
                </div>
            </div>

            <div className='w-10/12 mt-14 flex flex-col xl:flex-row-reverse pt-16 gap-10 sm:gap-20 2xl:gap-0 items-center' style={{ borderTop: "1px solid #fff" }}>
                <div className='flex-1 flex flex-col justify-between xl:items-end items-center'>
                    <h2 className='text-5xl font-medium text-right text-white'> {data?.AboutUsData?.extraInfos[0].title} </h2>
                    <div>
                        <Image src={companyPic2} alt='pic' className='rounded-md mt-10 ml-auto' style={{ width: '500px' }} />
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='text-white text-center sm:text-right text-xl' style={{ direction: 'rtl' }}>
                        {data?.AboutUsData?.extraInfos[0].description}
                    </p>
                </div>
            </div>

            <div className='w-full mt-12'>
                <Footer data={footerData?.FooterData?.footer[0]} />
                <PoliciesSection data={policiesData?.policiesSectionData?.policiesSection[0]} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getQueryAboutUs();
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
