import React from 'react';
import drugstore from '../../assets/Images/drugstore.jpg'
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';


const DrugstoresSearch = () => {
    return (
        <div className='DrugstoresSearch w-full relative'>
            <Image src={drugstore} alt='pic' className='w-full object-cover relative' style={{ height: '400px', opacity: '0.69' }} />
            <h3 className='text-white absolute left-2/4 text-3xl top-2/4'
                style={{ transform: 'translate(-50%, -50%)' }}
            > جستجو کنید. پیدا کنید . اقدام کنید </h3>
            <div className="p-input-icon-right top-3/4 w-2/5 left-2/4 py-20" style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}>
                <i className="pi pi-search" />
                <InputText placeholder="اسم داروخانه موردنظر خود را وارد نمایید" className='w-full text-right'
                style={{padding : '20px 2.5rem'}}
                />
            </div>
        </div>
    );
};

export default DrugstoresSearch;