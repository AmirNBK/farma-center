import { Vazirmatn } from 'next/font/google';
import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

const vazir = Vazirmatn({ subsets: ['latin'] });

interface HeaderItem {
    label: {
        url: string;
        title: string;
    };
    key: string;
}

const Header = (props: {
    HomePageHeader: boolean;
    headerItems: HeaderItem[];
}) => {
    const HomePageHeader = props.HomePageHeader;
    const headerItems = props.headerItems;

    return (
        <div
            className={`HeaderSection flex sm:flex-row flex-col w-full justify-between items-center px-0 sm:px-8 text-white
            text-sm sm:text-base
            ${vazir.className}
            ${HomePageHeader && 'skew-y-6 mb-8 sm:mb-16'
                } `}
        >
            <Link href={'./'}>
                <Image src={logo} alt='MainLogo' onClick={() => { }} />
            </Link>
            <div className='flex gap-x-6 flex-row-reverse'>
                {headerItems?.map((item) => (
                    <Link href={item.label.url} key={item.key}>
                        {item.label.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
