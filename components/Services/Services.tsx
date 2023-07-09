import React from 'react';
import Title from '../CommonComponents/Title/Title';
import PolygonContainer from '../CommonComponents/PolygonContainer/PolygonContainer';

const Services = () => {
    const services = [
        {
            title: 'تجربه مشاوره آسان',
            description: 'تجربه مشاوره آسان و موثر برای مشتریان',
        },
        {
            title: 'اعتماد و رضایت',
            description: 'اعتماد و رضایت مشتریان اولویت ما است',
        },
        {
            title: 'اکتشاف کنید',
            description: 'تجمع فروشگاه‌های داروخانه در یک مکان آنلاین مرکزی',
        },
        {
            title: 'جستجوی پیشرفته',
            description: 'جستجوی پیشرفته برای پیدا کردن داروخانه موردنظر',
        },
        {
            title: 'داروخانه ‌های معتبر',
            description: 'همکاری با داروخانه ‌های معتبر و با سابقه',
        },
        {
            title: 'خدمات پشتیبانی',
            description: 'خدمات پشتیبانی قوی و ارسال سریع سفارشات',
        },
    ];

    return (
        <div className='Services my-20'>
            <div className='Services__title w-4/5 mx-auto my-0'>
                <Title title='خدمات' />
            </div>
            <div className='flex flex-row flex-wrap justify-evenly my-6 gap-12'>
                {services.map((service, index) => (
                    <PolygonContainer
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
