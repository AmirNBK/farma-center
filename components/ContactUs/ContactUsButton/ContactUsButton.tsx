import React from 'react';
import arrow from '../../../assets/Icons/arrow.svg'
import Image from 'next/image';

const ContactUsButton = (props: {
    text: string
}) => {
    const text = props.text
    return (
        <button className='ContactUsButton flex text-white items-center py-2.5 px-4 rounded-full gap-3'
            style={{ backgroundColor: '#008299' }}
        >
            <h4 className='text-2xl'> {text} </h4>
            <Image src={arrow} alt='arrow' />
        </button>
    );
};

export default ContactUsButton;