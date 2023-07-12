import React, { useEffect, useRef, useState } from 'react';
import PolygonContainer from '../CommonComponents/PolygonContainer/PolygonContainer';
import polygon from '../../assets/Images/farmaPolygon.png';
import Image from 'next/image';
import doctorMockup from '../../assets/Images/doctorTabletMockup.png';
import dots from '../../assets/Images/dots.svg';
import multiPolygon from '../../assets/Images/multiPolygon.svg';
import style from './AboutUs.module.scss';

const AboutUs = () => {
    const aboutUsRef = useRef(null);
    const polygonRef = useRef(null);
    const doctorMockupRef = useRef(null);
    const [isReached, setIsReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (aboutUsRef.current) {
                const aboutUsCoordinates = aboutUsRef.current.getBoundingClientRect();
                const aboutUsY = aboutUsCoordinates.top;

                if (aboutUsY <= 750) {
                    setIsReached(true)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className='AboutUs w-full pt-24 overflow-hidden'
            ref={aboutUsRef}
        >
            <div className={`flex flex-col w-fit mx-auto my-0 px-8 xl:p-0 ${style.aboutusContainer}`}>
                <Image src={multiPolygon} alt='polygon' className='absolute hidden xl:block' style={{ top: '15%', right: '-130%' }} />
                <Image src={dots} alt='dots' className='absolute hidden xl:block' style={{ left: '-5%', top: '15%' }} />
                <div className={`${isReached && style.polygon}`} ref={polygonRef}>
                    <PolygonContainer isResponsive title='درباره‌ی ما' description='فروشگاه فارماسنتر، مقصد شما برای تهیه داروخانه ها است. با تیم ما، تجربه خرید آسان و مطمئن را تجربه کنید. ما با فروشگاه‌های داروخانه معتبر همکاری می‌کنیم و بهترین خدمات را ارائه می‌دهیم. اعتماد شما ارزشمند است و ما تلاش می‌کنیم تا رضایت شما را بهبود بخشیم.' />
                </div>
                <div className={`${style.polygonPic}`}>
                    <Image src={polygon} alt='polygonPic' className={`${isReached && style.polygon}`} />
                </div>
                <div className={`${isReached && style.polygon}`} ref={doctorMockupRef}>
                    <Image src={doctorMockup} alt='doctorMockup'
                        className={`${style.doctorMockup}`} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
