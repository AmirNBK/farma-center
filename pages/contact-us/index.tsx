import React, { useRef, useState } from 'react';
import Header from "@/components/Header/Header";
import { Vazirmatn } from 'next/font/google'
import support from '../../assets/Images/support.jpg'
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { InputTextarea } from 'primereact/inputtextarea';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import { Button } from 'primereact/button';
import loc from '../../assets/Icons/location.svg'
import telephone from '../../assets/Icons/contact.svg'
import { getQueryContactUs, getQueryFooter, getQueryHeader, getQueryPolicies } from '@/lib/service';
import { GetStaticProps } from "next";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const vazir = Vazirmatn({ subsets: ['latin'] })

export default function ContactUs({ data, headerData, footerData, policiesData }: { data: any, headerData: any, footerData: any, policiesData: any }) {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: '',
    });

    const form = useRef<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

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

    const validation = (e) => {
        e.preventDefault();
        const { user_name, user_email, user_phone } = formData;
        
        if (user_name.trim().length < 3) {
          WarningToast('نام و نام خانوادگی باید حداقل شامل 3 حرف باشد');
          return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
          WarningToast('ایمیل وارد شده معتبر نیست');
          return;
        }
      
        if (user_phone.replace(/[^0-9]/g, '').length < 7) {
          WarningToast('شماره تماس باید حداقل 7 رقم باشد');
          return;
        }
        sendEmail();
      };
      
      
      const sendEmail = () => {
        emailjs
          .sendForm('service_yqx7wnr', 'template_hjxmxkm', form.current, 'Xei6xsGOfGj_36PRv')
          .then((result) => {
            successfulToast('پیام شما با موفقیت ارسال شد');
          })
          .catch((error) => {
            WarningToast(error.text)
          });
      };
      




    return (
        <PrimeReactProvider>
            <div className={`flex min-h-screen flex-col items-center ${vazir.className}`} style={{ background: '#313232' }}>
                <div className='w-full' style={{ backgroundColor: '#313232', zIndex: '1' }}>
                    <Header HomePageHeader={false} headerItems={headerData?.HeaderItems?.items} />
                </div>

                <form ref={form} className="w-auto mt-20 h-full rounded-md mx-10" style={{ background: '#313232', boxShadow: '2px 1px 5px 3px rgba(0,0,0,0.31)' }}>
                    <div className="flex flex-row">
                        <div className="flex-1 hidden xl:block">
                            <Image src={support} alt="support" className="object-cover rounded-md rounded-tr-none rounded-br-none h-full" />
                        </div>
                        <div className="text-white flex-1 flex flex-col items-end gap-y-5 px-9 py-6">
                            <h2 className="text-2xl xl:text-3xl mx-auto my-0 xl:m-0"> با ما در تماس باشید </h2>
                            <h3 className="text-xl xl:text-2xl mx-auto my-0 xl:m-0 text-center"> با بخش پشتیبانی ما در تماس باشید </h3>

                            <div className='w-full'>
                                <div className='flex flex-col xl:flex-row-reverse w-full justify-between gap-8'>
                                    <span className="p-float-label rtl" style={{ direction: 'rtl' }}>
                                        <InputText name="user_name" id="username" className='w-full' value={formData.user_name} onChange={handleChange} />
                                        <label htmlFor="username">نام و نام خانوادگی</label>
                                    </span>
                                    <span className="p-float-label rtl" style={{ direction: 'rtl' }}>
                                        <InputText name="user_email" id="username" className='w-full' value={formData.user_email} onChange={handleChange} />
                                        <label htmlFor="username"> ایمیل </label>
                                    </span>
                                    <span className="p-float-label rtl" style={{ direction: 'rtl' }}>
                                        <InputText name="user_phone" id="username" placeholder='' className='w-full' value={formData.user_phone} onChange={handleChange} />
                                        <label htmlFor="username"> شماره تماس </label>
                                    </span>
                                </div>

                                <div className='mx-auto my-0 w-full mt-8'>
                                    <span className="p-float-label w-full">
                                        <InputTextarea className='w-full rtl' name="message" value={formData.message} onChange={handleChange} rows={5} cols={30} />
                                        <label>متن پیام</label>
                                    </span>
                                </div>

                                <div className={`text-center mt-5  ${vazir.className}`}>
                                    <Button label="ارسال" className='text-black' style={{ background: '#EBDAB2', color: 'black', border: 'none', width: '150px', fontWeight: 'normal' }} onClick={validation} />
                                </div>

                                <div className='flex flex-row items-center flex-row-reverse gap-3 mt-12'>
                                    <Image src={loc} alt='location' className='w-8' />
                                    <p className='text-right'>
                                        {data?.contactUsData?.info[0].address}
                                    </p>
                                </div>

                                <div className='flex flex-row items-center flex-row-reverse gap-3 mt-5'>
                                    <Image src={telephone} alt='location' className='w-8' />
                                    <p>
                                        {data?.contactUsData?.info[0].phone}
                                    </p>
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
                        </div>
                    </div>
                </form>

                <div className='w-full mt-20'>
                    <Footer data={footerData?.FooterData?.footer[0]} />
                    <PoliciesSection data={policiesData?.policiesSectionData?.policiesSection[0]} />
                </div>
            </div>
        </PrimeReactProvider>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getQueryContactUs();
    const headerData = await getQueryHeader();
    const footerData = await getQueryFooter();
    const policiesData = await getQueryPolicies();

    return {
        props: {
            data,
            headerData,
            footerData,
            policiesData
        },
        revalidate: 3600,
    };
};


