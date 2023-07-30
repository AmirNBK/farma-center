import React from 'react'
import { Vazirmatn } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import InfoContainer from '@/components/CommonComponents/InfoContainer/InfoContainer';
import icon from '../../assets/Icons/sellers.png'
import { GetStaticProps } from 'next';
import { getQueryFooter, getQueryHeader, getQueryPolicies } from '@/lib/service';

const vazir = Vazirmatn({ subsets: ['latin'] })
export default function Sell({ headerData, footerData, policiesData }: { headerData: any, footerData: any, policiesData: any }) {

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} headerItems={headerData?.HeaderItems?.items} />

            <InfoContainer info='خوش آمدید! در این صفحه اطلاعات مربوط به داروخانه خود را میتوانید وارد کنید و به فروش بگذارید تا توسط خریداران مشاهده شود. اگر سوالی داشتید میتوانید با مشاوران ما در ارتباط باشید.' icon={icon} />
            <h3 className='text-white text-3xl font-semibold my-10'>
                اطلاعات داروخانه خود را وارد نمایید
            </h3>

            

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
