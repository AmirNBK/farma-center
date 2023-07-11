import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Card from '../CommonComponents/Card/Card';
import { Carousel } from 'primereact/carousel';
import styles from './blogs.module.scss'

interface Product {
    title: string;
    description: string;
}

const Blogs = () => {

    const blogRef = useRef(null);
    const [isReached, setIsReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (blogRef.current) {
                const blogCoordinates = blogRef.current.getBoundingClientRect();
                const blogY = blogCoordinates.top;

                if (blogY <= 600) {
                    setIsReached(true)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const features: Product[] = [
        {
            title: 'FDA داروی جدیدی برای مدیریت میگرن مزمن تایید کرد',
            description:
                'این داروی نوآورانه هدفمند به کاهش فراوانی و شدت حملات میگرن مزمن می‌پردازد و برای مبتلایان به این بیماری تسکین قابل توجهی ارائه می‌دهد',
        },
        {
            title: 'یافته‌های نوین نشان می‌دهد درمان جدید سرطان نتایج امیدبخشی دارد',
            description:
                'محققان به تازگی یک مطالعه پیشرفته انجام داده‌اند که نتایجی پتانسیلی بسیار خوب در درمان سرطان را نشان می‌دهد',
        },
        {
            title: 'FDA داروی جدیدی برای مدیریت میگرن مزمن تایید کرد',
            description:
                'این داروی نوآورانه هدفمند به کاهش فراوانی و شدت حملات میگرن مزمن می‌پردازد و برای مبتلایان به این بیماری تسکین قابل توجهی ارائه می‌دهد',
        },
        {
            title: 'FDA داروی جدیدی برای مدیریت میگرن مزمن تایید کرد',
            description:
                'این داروی نوآورانه هدفمند به کاهش فراوانی و شدت حملات میگرن مزمن می‌پردازد و برای مبتلایان به این بیماری تسکین قابل توجهی ارائه می‌دهد',
        },

    ];

    const blogsTemplate = (blogs) => {
        return (
            <div className={`CardsContainer flex flex-row w-full my-12 justify-center`}>
                <Card title={blogs.title} description={blogs.description} footerText='بیشتر بخوانید' playAnimation={isReached} />
            </div>
        );
    };

    return (
        <div className='Blogs my-10' ref={blogRef}>
            <h3 className='text-white w-fit mx-auto my-0 text-5xl'> آخرین مقالات </h3>
            <div className='Blogs__cardContainer mt-6 card'>
                <Carousel
                    value={features}
                    numVisible={2}
                    numScroll={2}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                    itemTemplate={blogsTemplate}
                />
            </div>

        </div>
    );
};

export default Blogs;