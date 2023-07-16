import { Vazirmatn } from 'next/font/google'
import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

const vazir = Vazirmatn({ subsets: ['latin'] })

const Header = (props: {
    HomePageHeader: boolean;
}) => {
    const HomePageHeader = props.HomePageHeader;
    const headerItems = [
        { label: 'سرویس ها', link: '/' },
        { label: 'راه حل ها', link: '/' },
        { label: 'بازار ها', link: '/' },
        { label: 'درباره ما', link: '/about-us' },
        { label: 'تماس با ما', link: '/contact-us' },
    ];

    return (
        <div
            className={`HeaderSection flex sm:flex-row flex-col w-full justify-between items-center px-8 text-white
            ${vazir.className}
            ${HomePageHeader && 'skew-y-6 mb-8 sm:mb-16'
                } `}
        >
            <Link href={'./'}>
                <Image src={logo} alt='MainLogo' onClick={() => { }} />
            </Link>
            <div className='flex gap-x-6 flex-row-reverse'>
                {headerItems.map((item, index) => (
                    <div className='cursor-pointer sm:text-base text-xs' key={index}>
                        <Link href={item.link}>{item.label}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
