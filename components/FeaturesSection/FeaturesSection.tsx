import React, { useEffect, useState } from 'react';
import MultiPolygon from '../../assets/Icons/MultiPolygon.svg';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import drugstore from '../../assets/Icons/drugstore.svg'

interface Product {
    title: string;
    description: string;
}

const FeaturesSection = () => {
    const features: Product[] = [
        {
            title: 'تجربه مشاوره بی نظیر از ما',
            description:
                'با تنوع داروخانه ها، قیمت‌های رقابتی، و خدمات مطمئن و سریع، ما شما را به یک تجربه منحصر به فرد دعوت می‌کنیم.',
        },
        {
            title: 'عنوان محصول 2',
            description: 'توضیحات محصول 2',
        },
        {
            title: 'عنوان محصول 3',
            description: 'توضیحات محصول 3',
        },
    ];

    const productTemplate = (product: Product) => {
        return (
            <div className="flex flex-col text-center items-center gap-3 py-6">
                <Image src={drugstore} alt='drugstoreICon' />
                <h3 className='text-2xl'>{product.title}</h3>
                <p className='text-lg' style={{ direction: 'rtl' }}>{product.description}</p>
            </div>
        );
    };

    return (
        <div className="FeaturesSection">
            <div className="absolute left-0" style={{ zIndex: '-1' }}>
                <Image src={MultiPolygon} alt="polygon" />
            </div>
            <div style={{ marginTop: '150px' }} className='card'>
                <Carousel
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
