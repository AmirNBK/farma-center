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
import { Card } from 'primereact/card';

const vazir = Vazirmatn({ subsets: ['latin'] })
export default function AboutUs() {

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );
    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} />
            <DrugstoresSearch />
            <div className="card flex searchResults w-96 justify-content-center my-16">
                <Card title="داروخانه زنجان" subTitle="فروش داروخانه زنجان" footer={footer} header={header} className="text-right">
                    <p className="m-0">
                        واگذاري "ارزش عرفي" داروخانه زنجان ، اطراف ابهر
                        کد : DF1261
                        نوع سند : 60 متر تجاري
                        وديعه : 30 ميليون
                        اجاره : 3 ميليون
                        مکان تقريبي : اطراف ابهر
                        دپو دارو : در حد عرف
                        ميزان فروش روزانه : 30 ميليون
                        ميزان بيمه ماهانه : 70-60 ميليون
                        نکات : دو پزشک عمومي در نزديکي -پتانسيل به دليل امکان قرارداد با اقمار
                        ارزش عرفي داروخانه : 3 ميليارد
                    </p>
                </Card>
            </div>
        </div>
    )
}
