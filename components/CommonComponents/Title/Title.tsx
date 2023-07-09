import React from 'react';

const Title = (props: {
    title: string;
}) => {
    const title = props.title;
    return (
        <div className='Title text-center'>
            <div className='line-container items-center flex gap-x-5'>
                <div className='left-line grow h-px' style={{ backgroundColor: '#EBDAB2' }}></div>
                <h4 className='text-white text-4xl my-2.5'>{title}</h4>
                <div className='right-line grow h-px' style={{ backgroundColor: '#EBDAB2' }}></div>
            </div>
        </div>
    );
};

export default Title;
