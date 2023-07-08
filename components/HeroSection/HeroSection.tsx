import React from 'react';
import Button from '../CommonComponents/Button/Button';

const HeroSection = () => {
    return (
        <div className='HeroSection px-8 flex flex-row-reverse text-white skew-y-6'>
            <div className='HeroSection__rightSide flex flex-col text-right flex-1 gap-y-3.5 '
             style={{direction : 'rtl'}}
            >
                <h3 className='text-4xl'>
                    به فروشگاه داروخانه‌ فارماسنتر خوش آمدید!
                </h3>
                <p className='text-lg'>
                    تجربه مشاوره در فروشگاه آنلاین ما بسیار آسان و راحت است. شما می‌توانید از طریق سیستم جستجو، دسته‌بندی‌ها و فیلترهای مختلف به راحتی داروخانه مورد نظر خود را پیدا کنید. همچنین، با دیدن اطلاعات و جزئیات هر فروشگاه، اعتماد نسبت به محصولات و خدمات آن را کسب کنید.
                </p>
                <Button text='جستجو کنید' />
            </div>
            <div className='HeroSection__leftSide flex-1'>

            </div>
        </div>
    );
};

export default HeroSection;