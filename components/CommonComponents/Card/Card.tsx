import Image from 'next/image';
import React from 'react';
import medicine from '../../../assets/Images/medicine.png'

const Card = (props: {
    title: string
    description: string
    footerText: string
}) => {
    const title = props.title
    const description = props.description
    const footerText = props.footerText
    return (
        <div className='CardContainer'>
            <div className="overflow-hidden shadow-lg bg-white text-right flex flex-col justify-between"
                style={{ borderRadius: '16px', maxWidth: '22rem' , height : '457px' }}
            >
                <Image className="w-full" src={medicine} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2" style={{ color: '#034D83' }}>{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pb-6 pt-4 text-xl" style={{ color: '#A017B7' }}>
                    {footerText}
                </div>
            </div>
        </div>
    );
};

export default Card;