import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg'
import Image from 'next/image';
import Link from 'next/link';

const Header = (props: {
    HomePageHeader: boolean
}) => {
    const HomePageHeader = props.HomePageHeader
    const headerItems = ['سرویس ها', 'راه حل ها', 'بازار ها', 'شرکت', 'تماس با ما']
    return (
        <div className={`HeaderSection flex sm:flex-row flex-col w-full justify-between items-center px-8 mb-8 sm:mb-16 text-white ${HomePageHeader && 'skew-y-6'} `}>
            <Link href={'./'}>
                <Image src={logo} alt='MainLogo' onClick={() => { }} />
            </Link>
            <div className='flex gap-x-6 flex-row-reverse'>
                {headerItems.map((item) => {
                    return (
                        <div className='cursor-pointer sm:text-base text-xs'>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Header;