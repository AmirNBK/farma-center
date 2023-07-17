import { Vazirmatn } from 'next/font/google'
import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

const vazir = Vazirmatn({ subsets: ['latin'] })

const Header = (props: {
    HomePageHeader: boolean;
    headerItems: Record<string, string>;
}) => {
    const HomePageHeader = props.HomePageHeader;
    const headerItems = props.headerItems;

    const dataArray = Object.entries(headerItems).map(([key, value]) => ({ key, value }));

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
                {dataArray.map((item) => (
                    <div key={item.key}>{item.value}</div>
                ))}
            </div>
        </div>
    );
};

export default Header;
