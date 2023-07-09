import React from 'react';
import polygon from '../../../assets/Images/PolygonContainer.svg';
import Image from 'next/image';
import Button from '../Button/Button';

const PolygonContainer = (props: {
    title: string;
    description: string;
}) => {
    const title = props.title;
    const description = props.description;

    return (
        <div className="PolygonContainer">
            <div className="image-container">
                <Image src={polygon} alt="polygonContainer" />
                <div className="text-container">
                    <h4 className='text-2xl'>{title}</h4>
                    <p>{description}</p>
                    <Button text='بیشتر بدانید' />
                </div>
            </div>
            <style jsx>{`
        .PolygonContainer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-container {
          position: relative;
        }

        .text-container {
          position: absolute;
          align-items: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
      `}</style>
        </div>
    );
};

export default PolygonContainer;
