import React from 'react';
import ContactUsButton from './ContactUsButton/ContactUsButton';

const ContactUs = () => {
    return (
        <div className='ContactUs my-12 flex flex-row items-center justify-around	'>
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