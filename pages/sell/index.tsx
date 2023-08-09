import React, { useRef, useState } from 'react'
import { Vazirmatn } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import InfoContainer from '@/components/CommonComponents/InfoContainer/InfoContainer';
import icon from '../../assets/Icons/sellers.png'
import { GetStaticProps } from 'next';
import { getQueryFooter, getQueryHeader, getQueryPolicies } from '@/lib/service';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import medicalBanner from '../../assets/Images/medicalBanner.jpg'
import Image from 'next/image';
import Select from 'react-select'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const vazir = Vazirmatn({ subsets: ['latin'] })
export default function Sell({ headerData, footerData, policiesData }: { headerData: any, footerData: any, policiesData: any }) {

    const { shahr } = require("iran-cities-json");

    const shahrOptions = shahr.map((city: { name: string }) => ({
        value: city.name,
        label: city.name,
    }));



    const [formData, setFormData] = useState({
        city: '',
        daily_sales: '',
        insurance: '',
        name: '',
        metre: '',
        rent: '',
        email: '',
        phone: ''
    });

    const successfulToast = (text: string) => {
        toast.success(text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const WarningToast = (text: string) => {
        toast.warning(text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const [selectedCity, setSelectedCity] = useState('');

    const form = useRef<any>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCityChange = (selectedOption: { value: string; label: string } | null) => {
        setSelectedCity(selectedOption?.value || '');
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isAllFieldsEmpty = Object.values(formData).every((value) => value === '');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(formData.email);
        const phoneRegex = /^[0-9]{11}$/;
        const isPhoneValid = phoneRegex.test(formData.phone);

        if (isAllFieldsEmpty) {
            WarningToast('لطفاً اطلاعات داروخانه را وارد کنید.');
        } else if (!isEmailValid) {
            WarningToast('لطفاً ایمیل معتبر وارد کنید.');
        } else if (!isPhoneValid) {
            WarningToast('لطفاً شماره تلفن معتبر وارد کنید (شامل 11 عدد).');
        } else {
            emailjs
                .sendForm('service_yqx7wnr', 'template_qsbiqhv', form.current, 'Xei6xsGOfGj_36PRv')
                .then((result) => {
                    successfulToast('درخواست شما با موفقیت ثبت شد');
                })
                .catch((error) => {
                    WarningToast(error.text)
                });
        }
    };



    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} headerItems={headerData?.HeaderItems?.items} />


            <div className='mainContainer flex flex-row-reverse gap-6'>
                <form ref={form} className='InfosForm flex-1 px-8' onSubmit={handleSubmit}>
                    <InfoContainer info='خوش آمدید! در این صفحه اطلاعات مربوط به داروخانه خود را میتوانید وارد کنید و به فروش بگذارید تا توسط خریداران مشاهده شود. اگر سوالی داشتید میتوانید با مشاوران ما در ارتباط باشید.' icon={icon} />
                    <h3 className='text-white text-3xl font-semibold my-10 text-right gap-6'>
                        اطلاعات داروخانه خود را وارد نمایید
                    </h3>
                    <div className='flex flex-col gap-6'>
                        <Select
                            options={shahrOptions}
                            placeholder="شهر موردنظر را انتخاب کنید"
                            className='rtl'
                            minMenuHeight={50}
                            value={shahrOptions.find((option: { value: string; }) => option.value === selectedCity)}
                            onChange={handleCityChange}
                            name='city'
                        />
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row w-full justify-between gap-6'>
                                <InputText
                                    name='insurance'
                                    value={formData.insurance}
                                    onChange={handleChange}
                                    placeholder='مبلغ بیمه ماهانه'
                                    className='text-right w-full rtl'
                                />
                                <InputText
                                    name='daily_sales'
                                    value={formData.daily_sales}
                                    onChange={handleChange}
                                    placeholder='فروش روزانه'
                                    className='text-right w-full rtl'
                                />
                            </div>
                            <div className=''>
                                <InputText
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='نام داروخانه'
                                    className='text-right w-full rtl'
                                />
                            </div>
                            <div className='flex flex-row w-full justify-between gap-6'>
                                <InputText
                                    name='metre'
                                    value={formData.metre}
                                    onChange={handleChange}
                                    placeholder='متراژ داروخانه'
                                    className='text-right w-full rtl'
                                />
                                <InputText
                                    name='rent'
                                    value={formData.rent}
                                    onChange={handleChange}
                                    placeholder='رهن ملک'
                                    className='text-right w-full rtl'
                                />
                            </div>

                            <div className='flex flex-row w-full justify-between gap-6'>
                                <InputText
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='ایمیل'
                                    className='text-right w-full rtl'
                                />
                                <InputText
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='شماره تلفن'
                                    className='text-right w-full rtl'
                                />
                            </div>
                        </div>

                        <div className='flex flex-row w-full justify-between gap-6'>
                            <InputText
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='اجاره ملک'
                                className='text-right w-full rtl'
                            />

                            <InputText
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='دپو'
                                className='text-right w-full rtl'
                            />
                        </div>

                        <div className='flex flex-row w-full justify-between gap-6'>
                            <InputText
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='قیمت پیشنهادی'
                                className='text-right w-full rtl'
                            />
                            <InputText
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='سابقه فعالیت'
                                className='text-right w-full rtl'
                            />
                        </div>
                    </div>
                    <div className='w-full text-center my-10'>
                        <Button
                            style={{ padding: '7px 65px', background: '#EBDAB2', color: 'black', border: 'none' }}
                            type="submit"
                        >
                            ثبت
                        </Button>
                    </div>
                </form>
                <div className='SellImage flex-1 xl:block hidden'>
                    <Image src={medicalBanner} alt='banner'
                        className='h-full object-cover' unoptimized
                        style={{ borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }} />
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className='w-full'>
                <Footer data={footerData?.FooterData?.footer[0]} />
                <PoliciesSection data={policiesData?.policiesSectionData?.policiesSection[0]} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const headerData = await getQueryHeader();
    const footerData = await getQueryFooter();
    const policiesData = await getQueryPolicies();

    return {
        props: {
            headerData,
            footerData,
            policiesData
        },
        revalidate: 3600,
    };
};
