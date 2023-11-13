import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../../Blogs/blogs.module.scss'

const Card = (props: {
    title: string
    description: any
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

    return (
        <div className={`CardContainer ${playAnimation && styles.card}`}>
            <div className="overflow-hidden shadow-lg bg-white text-right flex flex-col justify-between h-fit"
                style={{ borderRadius: '16px', maxWidth: '22rem', height: equalSize ? '457px' : '' }}
            >
                <Image className="w-full" src={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2" style={{ color: '#034D83' }}>{title}</div>
                    <div className='flex flex-wrap justify-end gap-3'>
                        {description.item && description[0]?.item?.map((item: any, index: number) => {
                            return (
                                <p className="text-gray-700 text-base rtl" key={index}>
                                    {item.title} : {item.description}
                                </p>
                            );
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