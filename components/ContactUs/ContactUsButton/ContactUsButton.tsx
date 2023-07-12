import React from 'react';
import arrow from '../../../assets/Icons/arrow.svg'
import Image from 'next/image';

const ContactUsButton = (props: {
    text: string
}) => {
    const text = props.text
    return (
        <button className='ContactUsButton flex text-white items-center py-1.5 px-3 md:py-2.5 md:px-4 rounded-full gap-3'
            style={{ backgroundColor: '#008299' }}
        >
            <h4 className='text-lg md:text-2xl'> {text} </h4>
            <Image src={arrow} alt='arrow' className='w-4 md:w-auto' />
        </button>
    );
};

export default ContactUsButton;