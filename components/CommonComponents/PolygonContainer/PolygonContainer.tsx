import React from 'react';
import polygon from '../../../assets/Images/PolygonContainer.svg';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './PolygonContainer.module.scss'
import Link from 'next/link';

const PolygonContainer = (props: {
    title: string;
    description: string;
    isResponsive: boolean
    link?: string
}) => {
    const title = props.title;
    const description = props.description;
    const isResponsive = props.isResponsive
    const link = props.link

    return (
        <div className={`PolygonContainer flex justify-center items-center cursor-pointer ${styles.PolygonContainer}`}>
            <div className="image-container relative">
                <Image src={polygon} alt="polygonContainer" />
                <div className={`text-container ${isResponsive ? 'gap-y-3.5 xl:gap-y-6' : 'gap-y-6'}`}>
                    <h4 className={`${isResponsive ? "text-lg xl:text-2xl" : 'text-2xl'}`}>{title}</h4>
                    <p className={`${isResponsive && 'text-xs xl:text-sm'}`}>{description}</p>
                    <Link href={`${link}`}>
                        <Button text='بیشتر بدانید' />
                    </Link>
                </div>
            </div>
            <style jsx>{`
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
        }
      `}</style>
        </div>
    );
};

export default PolygonContainer;
