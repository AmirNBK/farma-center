import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../../Blogs/blogs.module.scss'

const Card = (props: {
    title: string
    description: string
    footerText: string
    playAnimation: boolean
    equalSize?: boolean
    image: StaticImageData
}) => {
    const title = props.title
    const description = props.description
    const footerText = props.footerText
    const playAnimation = props.playAnimation
    const equalSize = props.equalSize
    const image = props.image

    console.log(description[0].item);


    return (
        <div className={`CardContainer ${playAnimation && styles.card}`}>
            <div className="overflow-hidden shadow-lg bg-white text-right flex flex-col justify-between h-fit"
                style={{ borderRadius: '16px', maxWidth: '22rem', height: equalSize ? '457px' : '' }}
            >
                <Image className="w-full" src={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2" style={{ color: '#034D83' }}>{title}</div>
                    <div className='flex flex-wrap justify-end gap-3'>
                        {description[0]?.item.map((item: any) => {
                            return (
                                <p className="text-gray-700 text-base rtl">
                                    {item.title} : {item.description}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div className="px-6 pb-6 pt-4 text-xl" style={{ color: '#A017B7' }}>
                    {footerText}
                </div>
            </div>
        </div>
    );
};

export default Card;