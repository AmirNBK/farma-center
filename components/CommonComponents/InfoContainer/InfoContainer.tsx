import Image, { StaticImageData } from 'next/image';
import React from 'react';

const InfoContainer = (props: {
    info: string
    icon: StaticImageData
}) => {
    const icon = props.icon
    const info = props.info
    return (
        <div className='InfoContainer flex items-center rounded-md flex-row-reverse gap-x-4'
            style={{ background: '#eeee' , direction : 'rtl' , width : '620px', padding : '18px 24px' }}
        >
            <p className='font-light'>
                {info}
            </p>
            <Image src={icon} alt='infoIcon' />
        </div>
    );
};

export default InfoContainer;