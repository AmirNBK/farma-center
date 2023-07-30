import React from 'react'
import { Vazirmatn } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import InfoContainer from '@/components/CommonComponents/InfoContainer/InfoContainer';
import icon from '../../assets/Icons/sellers.png'
import { GetStaticProps } from 'next';
import { getQueryFooter, getQueryHeader, getQueryPolicies } from '@/lib/service';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import medicalBanner from '../../assets/Images/medicalBanner.jpg'
import Image from 'next/image';
import Select from 'react-select'

const vazir = Vazirmatn({ subsets: ['latin'] })
export default function Sell({ headerData, footerData, policiesData }: { headerData: any, footerData: any, policiesData: any }) {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} headerItems={headerData?.HeaderItems?.items} />


            <div className='mainContainer flex flex-row-reverse gap-6'>
                <div className='InfosForm flex-1 px-8'>
                    <InfoContainer info='خوش آمدید! در این صفحه اطلاعات مربوط به داروخانه خود را میتوانید وارد کنید و به فروش بگذارید تا توسط خریداران مشاهده شود. اگر سوالی داشتید میتوانید با مشاوران ما در ارتباط باشید.' icon={icon} />
                    <h3 className='text-white text-3xl font-semibold my-10 text-right gap-6'>
                        اطلاعات داروخانه خود را وارد نمایید
                    </h3>
                    <div className='flex flex-col gap-6'>
                        <Select options={options} placeholder="شهر موردنظر را انتخاب کنید" className='rtl' minMenuHeight={50} />
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row w-full justify-between gap-6'>
                                <InputText placeholder='فروش روزانه' className='text-right w-full' />
                                <InputText placeholder='مبلغ بیمه ماهانه' className='text-right w-full' />
                            </div>
                            <div className=''>
                                <InputText placeholder='نام داروخانه' className='text-right w-full' />
                            </div>
                            <div className='flex flex-row w-full justify-between gap-6'>
                                <InputText placeholder='متراژ داروخانه' className='text-right w-full' />
                                <InputText placeholder='رهن و اجاره ملک' className='text-right w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full text-center my-10'>
                        <Button style={{ padding: '7px 50px' }} >
                            ثبت
                        </Button>
                    </div>
                </div>
                <div className='SellImage flex-1'>
                    <Image src={medicalBanner} alt='banner' className='h-full object-cover' style={{borderTopRightRadius : '6px' , borderBottomRightRadius : '6px'}} />
                </div>
            </div>

            <div className='w-full'>
                <Footer data={footerData?.FooterData?.footer[0]} />
                <PoliciesSection data={policiesData?.policiesSectionData?.policiesSection[0]} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const headerData = await getQueryHeader();
    const footerData = await getQueryFooter();
    const policiesData = await getQueryPolicies();

    return {
        props: {
            headerData,
            footerData,
            policiesData
        },
        revalidate: 3600,
    };
};
