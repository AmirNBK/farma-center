import { Vazirmatn } from 'next/font/google'
import React, { useEffect } from 'react';
import logo from '../../assets/Icons/MainLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

const vazir = Vazirmatn({ subsets: ['latin'] })

const Header = (props: {
    HomePageHeader: boolean;
    headerItems: [];
}) => {
    const HomePageHeader = props.HomePageHeader;
    const headerItems = props.headerItems;
    

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
                {headerItems?.map((item) => (
                    <Link href={`${item?.label?.url}`} key={item.key}>{item?.label?.title}</Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
