import React from 'react';
import tick from '../../assets/Icons/tick.svg';
import location from '../../assets/Icons/map.svg';
import Image from 'next/image';

const ProvidedServices = () => {
    const features = [
        {
            icon: tick,
            text: 'دسترسی آسان',
        },
        {
            icon: location,
            text: 'پوشش جغرافیایی',
        },
        {
            icon: tick,
            text: 'دسترسی آسان',
        },
        {
            icon: location,
            text: 'پوشش جغرافیایی',
        },
    ];

    return (
        <div className='ProvidedServices my-16 px-8'>
            <div className='flex flex-col items-center'>
                <h3 className='text-white text-5xl'> ارائه خدمات در سراسر ایران </h3>
                <p
                    className='text-white text-3xl mt-6 text-center'
                    style={{ direction: 'rtl' }}
                >
                    با داشتن شبکه‌ی گسترده‌ای از همکاران و همراهان ما در سرتاسر کشور، ما به
                    شما امکان می‌دهیم تا خدمات موردنیاز خود را با اعتماد کامل دریافت کنید.
                </p>
            </div>

            <video src={require('../../assets/Videos/country.webm')} autoPlay loop muted style={{ marginTop: '-110px' }} />

            <div className='ProvidedServices__features flex flex-row-reverse'>
                {features.map((feature, index) => (
                    <div className='ProvidedServices__features__item flex flex-col items-center' key={index}>
                        <Image src={feature.icon} alt='tick' />
                        <p className='text-white'>{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProvidedServices;
