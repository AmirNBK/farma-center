import React from 'react';
import ContactUsButton from './ContactUsButton/ContactUsButton';
import pseudo from '../../assets/Images/pseudo.png'
import Image from 'next/image';

interface ContactUsData {
    title: string;
    description: string;
    buttonLabel: string;
}

const ContactUs = (props: {
    data: ContactUsData
}) => {
    const data = props.data
    return (
        <div className='ContactUs flex flex-col gap-y-10 md:flex-row z-0 relative items-center justify-around py-10 mt-32'
            style={{ background: '#2C2929' }}
        >
            <Image src={pseudo} alt='pseudo' className='absolute'
                style={{ zIndex: '-1', width: '1500px', height: '260px', bottom: '3px' }} />
            <div className='text-white text-center md:text-right px-5'>
                <h3 className='mb-6 text-2xl sm:text-3xl md:text-4xl'> {data.title} </h3>
                <h4 className='text-sm sm:text-base md:text-lg'> {data.description} </h4>
            </div>
            <div>
                <ContactUsButton text={`${data.buttonLabel}`} />
            </div>
        </div>
    );
};

export default ContactUs;