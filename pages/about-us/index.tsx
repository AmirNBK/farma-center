import React from 'react'
import { Vazirmatn } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import companyPic from '../../assets/Images/companyPic.jpeg'
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import companyPic2 from '../../assets/Images/companyPic2.jpeg'
import { Button } from 'primereact/button';

const vazir = Vazirmatn({ subsets: ['latin'] })
export default function AboutUs() {

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} />
            <h1 className='text-3xl font-semibold text-white'> درباره ما </h1>
            <div className='flex xl:flex-row flex-col items-center gap-10 sm:gap-20 mt-10 px-8'>
                <Image src={companyPic} alt='pic' className='rounded-md' style={{ flex: '1', width: '700px' }} />

                <div className='AboutUs__descriptions text-white flex items-center xl:items-start flex-col justify-between' style={{ direction: 'rtl', flex: '2' }} >
                    <p className='text-lg'>
                        مجموعه فارماسنترمتشکل از موسسه حقوقی صمیم آرمان دادگستر (شماره ثبت 48429 )  و مشاوران مجرب از جمله دکتر داروساز،وکیل پایه یک دادگستری و همچنین افراد متخصص در زمینه داروخانه داری ،آماده مشاوره و راهنمایی در کلیه زمینه های مربوط به داروخانه از جمله موارد زیر به همکاران گرامی می باشد: <br />
                        ←	تاسیس و راه اندازی داروخانه
                        <br />
                        ←	انتقال سرمایه
                        <br />
                        ←	ارزش گذاری میزان ارزش افزوده  داروخانه
                        <br />
                        ←	حل اختلاف و داوری
                        <br />
                        ←	مشاوره در زمینه حقوق و قوانین مربوط به وزرات کار
                        <br />
                        ←	مشاوره در زمینه قوانین و ارسال لیست بیمه تامین اجتماعی پرسنل
                        <br />
                        ←	مدیریت اجرایی داروخانه
                        <br />
                        ←	معرفی کروکی و مکان مناسب جهت تاسیس داروخانه
                        <br />
                        ←	تنظیم انواع قرارداد فی مابین کارفرما و پرسنل، موسس و مسِول فنی ، مشارکت مدنی و ...
                        <br />
                        ←	تجهیز و دکوراسیون ، تجهیز سیستم های امنیتی
                        <br />
                    </p>
                    <button className='w-fit'
                        style={{ border: '1px solid #ebdab2', color: '#ebdab2', padding: '8px 35px', margin: '20px 0px', borderRadius: '6px' }}>
                        تماس با ما
                    </button>
                </div>
            </div>

            <div className='w-10/12 mt-14 flex flex-col xl:flex-row-reverse pt-16 gap-10 sm:gap-20 2xl:gap-0 items-center'
                style={{ borderTop: "1px solid #fff" }}
            >
                <div className='flex-1 flex flex-col justify-between xl:items-end items-center'>
                    <h2 className='text-5xl font-medium text-right text-white'> وجه تمایز ما </h2>
                    <div>
                        <Image src={companyPic2} alt='pic' className='rounded-md mt-10 ml-auto' style={{ width: '500px' }} />
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='text-white text-center sm:text-right text-xl' style={{ direction: 'rtl' }}>
                        یکی از نکاتی که باعث گردیده مجموعه فارماسنتر نسبت به سایر همکارانی که در این زمینه فعالیت می کنند متمایز گردد، این است که تیم مدیریتی فارماسنتر خود داروساز، موسس مسئول فنی و داروخانه دار بوده و همواره از نزدیک با مسائل و چالش های جاری داروخانه از جمله وزارت بهداشت ، سازمان غذا و دارو، سازمان های بیمه گر،اداره دارایی و مالیات، شرکت های پخش و ... در ارتباط بوده و لذا جامع ترین نکات تاسیس،راه اندازی و مدیریت داروخانه را جهت مشاوره صحیح تر به شما همکاران عزیز به کار می برد.
                        همچنین کلیه قراردادهایی که در این مجموعه منعقد می گردد شامل مهمترین، به روز ترین و جامع ترین مسائل روز جامعه داروسازی بوده و حتی الامکان از هرگونه زیاده گویی و استفاده از کلمات نامفهوم پرهیز شده است. وجود وکیل پایه یک دادگستری در این موسسه که مشرف به نکات ریز و ظریف داروخانه و رشته داروسازی است باعث گردیده موارد حقوقی و ضمانت های اجرایی لازم جهت انجام تعهدات طرفین در قرارداد به درستی لحاظ گردد.
                        از دیگر مواردی که مجموعه فارماسنتر خود را موظف به انجام آن می داند،حضور در کنار شما تا پایان مدت قرارداد است که همواره و هر لحظه پیگیر روند فرایند قراردادهستیم.
                        همچنین در طول مدت راه اندازی داروخانه ، با ارائه راهکارهای مناسب جهت سرمایه گذاری اصولی تر،زمینه افزایش فروش داروخانه و ارزش افزوده داروخانه را برای شما همکاران عزیز فراهم خواهیم کرد.
                    </p>
                </div>

            </div>

            <div className='w-full mt-12'>
                <Footer />
                <PoliciesSection />
            </div>
        </div>
    )
}
