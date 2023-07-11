import Image from 'next/image';
import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg'
import twitter from '../../assets/Icons/twitter.svg'
import linkedin from '../../assets/Icons/linkedin.svg'

const Footer = () => {
    const leftSections = [
        {
            title: 'سرویس ها',
            items: ['داروخانه', 'داروخانه آنلاین']
        },
        {
            title: 'راه حل ها',
            items: ['داروخانه مجازی', 'سلامتی در برابر کووید-۱۹', 'مستندات API', 'سلامت جمعیت']
        }
    ];

    const midSections = [
        {
            title: 'بازار ها',
            items: ['برندهای سلامت', 'تولیدکنندگان دارویی']
        },
        {
            title: 'شرکت',
            items: ['فرصت های شغلی', 'درباره شرکت']
        },
        {
            title: 'شبکه های اجتماعی',
            items: ['لینکدین', 'توییتر']
        }
    ];

    return (
        <div className='footer flex flex-row py-8 justify-around' style={{ background: '#062C48' }}>
            <div className='footer__leftSection flex flex-col text-right gap-y-10' style={{ direction: 'rtl' }}>
                {leftSections.map((section, index) => (
                    <div key={index}>
                        <h4 className='footer__leftSection__title font-bold text-lg' style={{ color: '#EBDAB2' }}>
                            {section.title}
                        </h4>
                        {section.items.map((item, itemIndex) => (
                            <h4 key={itemIndex} className='footer__leftSection__items text-base text-white'>
                                {item}
                            </h4>
                        ))}
                    </div>
                ))}
            </div>

            <div className='footer__midSection text-right flex flex-col gap-y-10'>
                {midSections.map((section, index) => (
                    <div key={index}>
                        <h4 className='footer__leftSection__title font-bold text-lg' style={{ color: '#EBDAB2' }}>
                            {section.title}
                        </h4>
                        {section.items.map((item, itemIndex) => (
                            <h4 key={itemIndex} className='footer__leftSection__items gap-x-2.5 flex flex-row-reverse justify-right text-base text-white'>
                                {item === 'توییتر' ? <Image src={twitter} alt='twitter' /> : item === 'لینکدین' ? <Image src={linkedin} alt='linkedin' /> : ''}
                                {item}
                            </h4>
                        ))}
                    </div>
                ))}
            </div>

            <div className='footer__rightSection flex flex-col items-center'>
                <Image src={logo} alt='logo' />
                <h2 className='text-white text-4xl font-bold w-8/12 text-right'> تحول دهنده سلامت مصرف کننده </h2>
            </div>
        </div>
    );
};

export default Footer;
