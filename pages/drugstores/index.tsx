import React from 'react';
import { Vazirmatn } from 'next/font/google';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import { Button } from 'primereact/button';
import DrugstoresSearch from '@/components/DrugstoresSearch/DrugstoresSearch';
import Card from '@/components/CommonComponents/Card/Card';
import drugstorePic from '../../assets/Images/drugstore2.jpg';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';

const vazir = Vazirmatn({ subsets: ['latin'] });

export default function AboutUs() {
    const cardData = [
        {
            title: 'داروخانه زنجان',
            description: `واگذاري "ارزش عرفي" داروخانه زنجان ، اطراف ابهر
        کد : DF1261
        نوع سند : 60 متر تجاري
        وديعه : 30 ميليون
        اجاره : 3 ميليون
        مکان تقريبي : اطراف ابهر
        دپو دارو : در حد عرف
        ميزان فروش روزانه : 30 ميليون
        ميزان بيمه ماهانه : 70-60 ميليون
        نکات : دو پزشک عمومي در نزديکي -پتانسيل به دليل امکان قرارداد با اقمار
        ارزش عرفي داروخانه : 3 ميليارد`,
            footerText: 'اطلاعات بیشتر',
            playAnimation: false,
            image: drugstorePic,
        },
        {
            title: 'داروخانه مشهد',
            description: `واگذاري "ارزش عرفي" داروخانه تهران ، نياوران (با/بدون ملکيت)
            کد: DF1258
            نوع سند: 120 متر مسکوني
            ارزش ملک: زير قيمت کارشناسي منطقه
            ارزش اجاره: زير قيمت کارشناسي منطقه
            مکان تقريبي: نياوران
            دپو دارو: در حد عرف
            ميزان فروش روزانه: 10 ميليون
            ميزان بيمه ماهانه: 10 ميليون
            ارزش عرفي داروخانه: 2 ميليارد
             `,
            footerText: 'اطلاعات بیشتر',
            playAnimation: false,
            image: drugstorePic,
        },
        {
            title: 'داروخانه تهران',
            description: `واگذاري "ارزش عرفي" داروخانه تهران ، نياوران (با/بدون ملکيت)
            کد: DF1258
            نوع سند: 120 متر مسکوني
            ارزش ملک: زير قيمت کارشناسي منطقه
            ارزش اجاره: زير قيمت کارشناسي منطقه
            مکان تقريبي: نياوران
            دپو دارو: در حد عرف
            ميزان فروش روزانه: 10 ميليون
            ميزان بيمه ماهانه: 10 ميليون
            ارزش عرفي داروخانه: 2 ميليارد
             `,
            footerText: 'اطلاعات بیشتر',
            playAnimation: false,
            image: drugstorePic,
        }, {
            title: 'داروخانه تهران',
            description: `واگذاري "ارزش عرفي" داروخانه تهران ، نياوران (با/بدون ملکيت)
            کد: DF1258
            نوع سند: 120 متر مسکوني
            ارزش ملک: زير قيمت کارشناسي منطقه
            ارزش اجاره: زير قيمت کارشناسي منطقه
            مکان تقريبي: نياوران
            دپو دارو: در حد عرف
            ميزان فروش روزانه: 10 ميليون
            ميزان بيمه ماهانه: 10 ميليون
            ارزش عرفي داروخانه: 2 ميليارد
             `,
            footerText: 'اطلاعات بیشتر',
            playAnimation: false,
            image: drugstorePic,
        }, {
            title: 'داروخانه مشهد',
            description: `واگذاري "ارزش عرفي" داروخانه تهران ، نياوران (با/بدون ملکيت)
            کد: DF1258
            نوع سند: 120 متر مسکوني
            ارزش ملک: زير قيمت کارشناسي منطقه
            ارزش اجاره: زير قيمت کارشناسي منطقه
            مکان تقريبي: نياوران
            دپو دارو: در حد عرف
            ميزان فروش روزانه: 10 ميليون
            ميزان بيمه ماهانه: 10 ميليون
            ارزش عرفي داروخانه: 2 ميليارد
             `,
            footerText: 'اطلاعات بیشتر',
            playAnimation: false,
            image: drugstorePic,
        }, {
            title: 'داروخانه مشهد',
            description: `واگذاري "ارزش عرفي" داروخانه تهران ، نياوران (با/بدون ملکيت)
            کد: DF1258
            نوع سند: 120 متر مسکوني
            ارزش ملک: زير قيمت کارشناسي منطقه
            ارزش اجاره: زير قيمت کارشناسي منطقه
            مکان تقريبي: نياوران
            دپو دارو: در حد عرف
            ميزان فروش روزانه: 10 ميليون
            ميزان بيمه ماهانه: 10 ميليون
            ارزش عرفي داروخانه: 2 ميليارد
             `,
            footerText: 'اطلاعات بیشتر',
            playAnimation: false,
            image: drugstorePic,
        },
    ];

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} />
            <div className='mt-10 sm:m-0 w-full'>
                <DrugstoresSearch />
            </div>
            <div className="card flex searchResults w-96 justify-content-center my-16 flex-row w-full gap-24 flex-wrap justify-center">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        footerText={card.footerText}
                        playAnimation={card.playAnimation}
                        image={card.image}
                    />
                ))}
            </div>

            <div className='w-full'>
                <Footer />
                <PoliciesSection />
            </div>
        </div>
    );
}
