import React from 'react';
import ContactUsButton from './ContactUsButton/ContactUsButton';
import pseudo from '../../assets/Images/pseudo.png'
import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className='ContactUs flex flex-row z-0 relative items-center justify-around py-10 mt-32'
            style={{ background: '#2C2929' }}
        >
            <Image src={pseudo} alt='pseudo' className='absolute'
                style={{ zIndex: '-1', width: '1500px', height: '260px' , bottom : '3px' }} />
            <div className='text-white text-right'>
                <h3 className='text-4xl mb-6'> با ما برای کسب و کار خود در ارتباط باشید </h3>
                <h4 className='text-lg'> با ما در ارتباط باشید تا از بهترین مشاوره ها بهره مند شوید </h4>
            </div>
            <div>
                <ContactUsButton text='ارتباط با ما' />
            </div>
        </div>
    );
};

export default ContactUs;