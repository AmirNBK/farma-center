import React from 'react';
import Button from '../../CommonComponents/Button/Button';
import Image from 'next/image';
import polygon from '../../../assets/Icons/Polygon.svg'
import cube from '../../../assets/Icons/Cube.svg'
import more from '../../../assets/Icons/More.svg'
import smallPolygon from '../../../assets/Icons/SmallPolygon.svg'
import style from "./HeroSection.module.scss";
import Link from 'next/link';

const HeroSection = (props: {
    title: string
    description: string
}) => {
    const title = props.title
    const description = props.description

    return (
        <div className='HeroSection pr-8 pl-8 md:pl-20 flex flex-row-reverse text-white skew-y-6'>
            <div className={`HeroSection__rightSide flex flex-col text-right flex-1 gap-y-5 ${style.HeroSection__rightSide}`}
                style={{ direction: 'rtl' }}
            >
                <h3 className='text-2xl sm:text-3xl lg:text-4xl text-center md:text-start'>
                    {title}
                </h3>
                <p className=' md:w-4/5 w-full font-light text-sm sm:text-base lg:text-lg text-center md:text-start' style={{ lineHeight: '30px' }}>
                    {description}
                </p>
                <div className='md:text-right text-center'>
                    <Link href={'/drugstores'}>
                        <Button text='جستجو کنید' />
                    </Link>
                </div>
            </div>
            <div className='HeroSection__leftSide md:block hidden  relative mr-11' style={{ flex: '1.5' }}>
                <video src={require('../../../assets/Videos/mock.mp4')} className={`mx-auto my-0 w-52 xl:w-auto ${style.HeroSection__video}`}
                    autoPlay loop muted />
                <Image src={polygon} className={`absolute right-0 top-10 z-minus ${style.shape}`} alt='polygon' />
                <Image src={cube} className={`absolute right-0 shape z-minus ${style.cube}`} style={{ top: '-50px' }} alt='cube' />
                <Image src={more} className={`absolute bottom-0 z-minus ${style.cube}`} alt='more' style={{ top: '50%' }} />
                <Image src={smallPolygon} alt='smallPolygon' className={`absolute top-20 left-5 z-minus ${style.cube}`} />
                <Image src={smallPolygon} alt='smallPolygon' className={`absolute top-0 z-minus ${style.shape}`} />
            </div>
        </div>
    );
};

export default HeroSection;