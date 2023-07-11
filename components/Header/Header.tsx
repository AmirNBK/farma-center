import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg'
import Image from 'next/image';

const Header = () => {
    const headerItems = ['سرویس ها', 'راه حل ها', 'بازار ها', 'شرکت', 'تماس با ما']
    return (
        <div className='HeaderSection flex w-full justify-between items-center px-8 mt-3.5 mb-16 text-white skew-y-6'>
            <Image src={logo} alt='MainLogo' />
            <div className='flex gap-x-6 flex-row-reverse'>
                {headerItems.map((item) => {
                    return (
                        <div className='cursor-pointer'>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Header;