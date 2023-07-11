import React from 'react';
import Button from '../CommonComponents/Button/Button';
import Image from 'next/image';
import polygon from '../../assets/Icons/Polygon.svg'
import cube from '../../assets/Icons/Cube.svg'
import more from '../../assets/Icons/More.svg'
import smallPolygon from '../../assets/Icons/SmallPolygon.svg'
import style from "./HeroSection.module.scss";

const HeroSection = () => {
    return (
        <div className='HeroSection pr-8 pl-20 flex flex-row-reverse text-white skew-y-6'>
            <div className='HeroSection__rightSide flex flex-col text-right flex-1 gap-y-5 '
                style={{ direction: 'rtl' }}
            >
                <h3 className='text-4xl'>
                    به فروشگاه داروخانه‌ فارماسنتر خوش آمدید!
                </h3>
                <p className='text-lg w-4/5 font-light' style={{ lineHeight: '30px' }}>
                    تجربه مشاوره در فروشگاه آنلاین ما بسیار آسان و راحت است. شما می‌توانید از طریق سیستم جستجو، دسته‌بندی‌ها و فیلترهای مختلف به راحتی داروخانه مورد نظر خود را پیدا کنید. همچنین، با دیدن اطلاعات و جزئیات هر فروشگاه، اعتماد نسبت به محصولات و خدمات آن را کسب کنید.
                </p>
                <Button text='جستجو کنید' />
            </div>
            <div className='HeroSection__leftSide relative mr-11' style={{ flex: '1.5' }}>
                <video src={require('../../assets/Videos/mock.mp4')} className='mx-auto my-0'
                    style={{ transform: 'translateY(-100px)' }}
                    autoPlay loop muted />
                <Image src={polygon} className={`absolute right-0 top-10 ${style.shape}`} alt='polygon' />
                <Image src={cube} className={`absolute right-0 shape ${style.cube}`} style={{ top: '-50px' }} alt='cube' />
                <Image src={more} className={`absolute bottom-0 ${style.cube}`} alt='more' style={{ top: '50%' }} />
                <Image src={smallPolygon} alt='smallPolygon' className={`absolute top-20 left-5 ${style.cube}`} />
                <Image src={smallPolygon} alt='smallPolygon' className={`absolute top-0 ${style.shape}`} />
            </div>
        </div>
    );
};

export default HeroSection;