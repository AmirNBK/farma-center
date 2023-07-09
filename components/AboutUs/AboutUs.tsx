import React from 'react';
import PolygonContainer from '../CommonComponents/PolygonContainer/PolygonContainer';
import polygon from '../../assets/Images/farmaPolygon.png'
import Image from 'next/image';
import doctorMockup from '../../assets/Images/doctorTabletMockup.png'
import dots from '../../assets/Images/dots.svg'
import multiPolygon from '../../assets/Images/multiPolygon.svg'

const AboutUs = () => {
    return (
        <div className='AboutUs w-full pt-24 overflow-hidden'
        >
            <div className='flex flex-col w-fit mx-auto my-0' style={{ transform: 'translateX(-400px)' }}>
                <Image src={multiPolygon} alt='polygon' className='absolute' style={{top : '15%' , right : '-130%'}}/>
                <Image src={dots} alt='dots' className='absolute ' style={{left : '-5%' , top : '15%'}} />
                <div>
                    <PolygonContainer title='درباره‌ی ما' description='فروشگاه فارماسنتر، مقصد شما برای تهیه داروخانه ها است. با تیم ما، تجربه خرید آسان و مطمئن را تجربه کنید. ما با فروشگاه‌های داروخانه معتبر همکاری می‌کنیم و بهترین خدمات را ارائه می‌دهیم. اعتماد شما ارزشمند است و ما تلاش می‌کنیم تا رضایت شما را بهبود بخشیم.' />
                </div>
                <div style={{ transform: 'translate(390px,-163px)' }}>
                    <Image src={polygon} alt='polygonPic' />
                </div>
                <div>
                    <Image src={doctorMockup} alt='doctorMockup' style={{ transform: 'translate(665px,-315px)' }} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;