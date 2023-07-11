import React, { useEffect, useState } from 'react';
import MultiPolygon from '../../assets/Icons/MultiPolygon.svg';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import drugstore from '../../assets/Icons/drugstore.svg'
import support from '../../assets/Icons/support.svg'
import doctor from '../../assets/Icons/doctor.svg'
import { Vazirmatn } from 'next/font/google'


interface Product {
    title: string;
    description: string;
    icon: any
}
const vazir = Vazirmatn({ subsets: ['latin'] })

const FeaturesSection = () => {
    const features: Product[] = [
        {
            icon: drugstore,
            title: 'تجربه مشاوره بی نظیر از ما',
            description:
                'با تنوع داروخانه ها، قیمت‌های رقابتی، و خدمات مطمئن و سریع، ما شما را به یک تجربه منحصر به فرد دعوت می‌کنیم.',
        },
        {
            icon: doctor,
            title: 'ساخت آینده با اعتماد به ما',
            description: 'با اعتماد به ما و تجربه مشاوره ما به عنوان واسطه میتواند مسیر شما را هموار تر کند',
        },
        {
            icon: support,
            title: 'پشتیبانی 24 ساعت',
            description: 'در هر ساعت از شبانه روز در هفته پاسخگوی سوالات و نیازهای شما هستیم',
        },
    ];

    const productTemplate = (product: Product) => {
        return (
            <div className={`flex flex-col text-center items-center gap-3 py-6 ${vazir.className}`}>
                <Image src={product.icon} alt='drugstoreICon' className='w-16' />
                <h3 className='text-2xl'>{product.title}</h3>
                <p className='text-xl' style={{ direction: 'rtl' }}>{product.description}</p>
            </div>
        );
    };

    return (
        <div className={`FeaturesSection ${vazir.className} bg-white relative`}>
            <div className="absolute left-0 z-0" style={{top : '-55px'}}>
                <Image src={MultiPolygon} alt="polygon" />
            </div>
            <div style={{ marginTop: '150px' }} className='card'>
                <Carousel
                    showNavigators={false}
                    value={features}
                    numVisible={1}
                    numScroll={1}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                    itemTemplate={productTemplate}
                />
            </div>
        </div>
    );
};

export default FeaturesSection;
