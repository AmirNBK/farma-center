import React from 'react';

const PoliciesSection = () => {
    const rightItems = ['شرایط و قوانین ', 'مقررات سایت و شرکت', 'مقررات سایت و شرکت']
    const leftItems = ['نام شرکت ©', ' تمامی حق و حقوق محفوظ است']
    return (
        <div className='PoliciesSection text-white flex flex-row-reverse justify-around py-6' style={{ backgroundColor: '#034D83' }}>
            <div className='PoliciesSection__rightSection flex gap-12' style={{direction : 'rtl'}}>
                {rightItems.map((item) => {
                    return (
                        <h4> {item} </h4>
                    )
                })}
            </div>
            <div className='PoliciesSection__leftSection flex gap-12' style={{direction : 'rtl'}}>
                {leftItems.map((item) => {
                    return (
                        <h4> {item} </h4>
                    )
                })}
            </div>
        </div>
    );
};

export default PoliciesSection;