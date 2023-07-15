import React, { useState } from 'react'
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

const vazir = Vazirmatn({ subsets: ['latin'] })
export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    return (
        <PrimeReactProvider>
            <div className={`flex min-h-screen flex-col items-center ${vazir.className}`}
                style={{ background: '#313232' }}
            >
                <div
                    className='w-full'
                    style={{ backgroundColor: '#313232', zIndex: '1' }}>

                    <Header HomePageHeader={false} />
                </div>

                <div className="w-auto	mt-20 h-full rounded-md mx-10"
                    style={{
                        background: '#313232', boxShadow: '2px 1px 5px 3px rgba(0,0,0,0.31)'
                    }}>
                    <div className="flex flex-row">
                        < div className="flex-1 hidden xl:block">
                            <Image src={support} alt="support"
                                className="object-cover rounded-md rounded-tr-none rounded-br-none h-full" />
                        </div>
                        <div className="text-white flex-1 flex flex-col items-end gap-y-5	px-9 py-6">
                            <h2 className="text-2xl xl:text-3xl mx-auto my-0 xl:m-0"> با ما در تماس باشید </h2>
                            <h3 className="text-xl xl:text-2xl mx-auto my-0 xl:m-0 text-center"> با بخش پشتیبانی ما در تماس باشید </h3>

                            <div className='w-full'>
                                <div className='flex flex-col xl:flex-row-reverse w-full justify-between gap-8'>
                                    <span className="p-float-label rtl" style={{ direction: 'rtl' }}>
                                        <InputText id="username" className='w-full' value={name} onChange={(e) => setName(e.target.value)} />
                                        <label htmlFor="username">نام و نام خانوادگی</label>
                                    </span>
                                    <span className="p-float-label rtl" style={{ direction: 'rtl' }}>
                                        <InputText id="username" className='w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="username"> ایمیل </label>
                                    </span>
                                    <span className="p-float-label rtl" style={{ direction: 'rtl' }}>
                                        <InputText id="username" placeholder='' className='w-full' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        <label htmlFor="username"> شماره تماس </label>
                                    </span>
                                </div>

                                <div className='mx-auto my-0 w-full mt-8'>
                                    <span className="p-float-label w-full">
                                        <InputTextarea className='w-full rtl' className='w-full' id="username" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} cols={30} />
                                        <label htmlFor="username">متن پیام</label>
                                    </span>
                                </div>

                                <div className={`text-center mt-5  ${vazir.className}`}>
                                    <Button label="ارسال" className='text-black	' style={{ background: '#EBDAB2', color: 'black', border: 'none', width: '150px', fontWeight: 'normal' }} />
                                </div>


                                <div className='flex flex-row items-center flex-row-reverse gap-3 mt-12'>
                                    <Image src={loc} alt='location' className='w-8' />
                                    <p className='text-right'>
                                        آدرس : تهران ، پاسداران ، نبش بوستان دهم ، مجتمع بوستان ، موسسه حقوقی صمیم آرمان دادگستر
                                    </p>
                                </div>

                                <div className='flex flex-row items-center flex-row-reverse gap-3 mt-5'>
                                    <Image src={telephone} alt='location' className='w-8' />
                                    <p>
                                        ۲۲۵۸۱۷۱۵ - ۲۲۵۸۲۶۴۶
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                <div className='w-full mt-20'>
                    <Footer />
                    <PoliciesSection />
                </div>
            </div >
        </PrimeReactProvider>
    )
}
