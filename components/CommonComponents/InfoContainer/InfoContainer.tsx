import Image, { StaticImageData } from 'next/image';
import React from 'react';

const InfoContainer = (props: {
    info: string
    icon: StaticImageData
}) => {
    const icon = props.icon
    const info = props.info
    return (
        <div className='InfoContainer flex items-center mt-12 sm:m-0 rounded-md flex-col-reverse sm:flex-row-reverse gap-4 ml-auto w-fit'
            style={{ background: '#eeee' , direction : 'rtl' , padding : '18px 24px' }}
        >
            <p className='font-light'>
                {info}
            </p>
            <Image src={icon} alt='infoIcon' />
        </div>
    );
};

export default InfoContainer;