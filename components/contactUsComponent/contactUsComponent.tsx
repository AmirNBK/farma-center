import Image from 'next/image';
import React from 'react';

const contactUsComponent = (props: {
    title: string
    description: string
    icon: any
}) => {
    const title = props.title
    const description = props.description
    const icon = props.icon
    return (
        <div className='contactUsComponent'
            style={{ background: '#3D3D3D' }}
        >
            <Image src={icon} alt='icon' />
            <h3> {title} </h3>
            <p> {description} </p>

            <h4> تماس با ما </h4>
        </div>
    );
};

export default contactUsComponent;