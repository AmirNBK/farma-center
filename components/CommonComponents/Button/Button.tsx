import React from 'react';

const Button = (props: {
    text: string
}) => {
    const text = props.text
    return (
        <button className='Button w-fit	py-1 px-14 text-black'
            style={{ borderRadius: '30px', backgroundColor: '#EBDAB2', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);' }}>
            {text}
        </button>
    );
};

export default Button;