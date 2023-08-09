import React from 'react';
import drugstore from '../../assets/Images/drugstore.jpg'
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';

interface DrugstoresSearchProps {
    onSearch: (term: string) => void;
}

const DrugstoresSearch: React.FC<DrugstoresSearchProps> = ({ onSearch }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };
    return (
        <div className='DrugstoresSearch w-full relative'>
            <Image src={drugstore} alt='pic' className='w-full object-cover relative' style={{ height: '400px', opacity: '0.69' }} />
            <h3 className='text-white absolute left-2/4 text-2xl sm:text-3xl w-full top-2/4 text-center'
                style={{ transform: 'translate(-50%, -50%)' }}
            > جستجو کنید. پیدا کنید . اقدام کنید </h3>
            <div className="p-input-icon-right top-3/4 w-4/5 sm:w-3/5 lg:w-2/5 left-2/4 py-20" style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}>
                <i className="pi pi-search" />
                <InputText
                    placeholder="اسم شهر موردنظر خود را وارد نمایید"
                    className='w-full text-right'
                    style={{ padding: '20px 2.5rem' }}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default DrugstoresSearch;