import React from 'react';
import tick from '../../assets/Icons/tick.svg';
import location from '../../assets/Icons/map.svg';
import Image from 'next/image';

const ProvidedServices = (props: {
    data: {
        title: string;
        description: string;
    };
}) => {
    const data = props.data

    return (
        <div className='ProvidedServices my-16 px-8 pt-28 pb-12 sm:pt-60 sm:pb-28'
            style={{ background: '#2C2929', transform: 'skewY(-6deg)', margin: '140px 0px' }}
        >
            <div className='flex flex-col items-center skew-y-6 px-12 2xl:p-0 rtl text-center'>
                <h3 className='text-white text-2xl sm:text-3xl lg:text-5xl lg:mb-12 mb-0'> {data.title}  </h3>
                <p
                    className='text-white text-base sm:text-xl lg:text-3xl mt-6 text-center'
                    style={{ direction: 'rtl' }}
                >
                    {data.description}
                </p>
            </div>

            <video src={require('../../assets/Videos/country.webm')}
                className='skew-y-6 m-0 lg:m-t-minus80'
                autoPlay loop muted />

            <div className='ProvidedServices__features mt-10 md:m-0 flex-wrap gap-12 px-5 flex flex-row-reverse justify-around items-baseline skew-y-6'>
                {data?.features?.map((feature, index) => (                    
                    <div className='ProvidedServices__features__item flex flex-col items-center' key={index}>
                        <Image src={index === 0 ? tick : index === 2 ? tick : location} width={30} height={30} alt='featuresPics' />
                        <p style={{ color: '#EBDAB2' }} className='mt-2 sm:text-base text-xs'>{feature.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProvidedServices;
