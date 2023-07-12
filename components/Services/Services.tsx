import React, { useEffect, useRef, useState } from 'react';
import Title from '../CommonComponents/Title/Title';
import PolygonContainer from '../CommonComponents/PolygonContainer/PolygonContainer';
import styles from './Services.module.scss'

const Services = () => {
    const servicesRef = useRef(null);
    const [isReached, setIsReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (servicesRef.current) {
                const aboutUsCoordinates = servicesRef.current.getBoundingClientRect();
                const aboutUsY = aboutUsCoordinates.top;

                if (aboutUsY <= 700) {
                    setIsReached(true)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
        <div className='Services mb-20' ref={servicesRef}>
            <div className='Services__title w-4/5 mx-auto my-0'>
                <Title title='خدمات' />
            </div>
            <div className='flex flex-row flex-wrap justify-evenly my-6 gap-12 px-7 sm:p-0 sm:text-base text-sm'>
                {services.map((service, index) => (
                    <div className={`${isReached && styles.polygon}`}>
                        <PolygonContainer
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
