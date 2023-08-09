import React, { useEffect, useRef, useState } from 'react';
import Title from '../CommonComponents/Title/Title';
import PolygonContainer from '../CommonComponents/PolygonContainer/PolygonContainer';
import styles from './Services.module.scss'

const Services = (props: {
    data: {
        title: string;
        description: string;
    }[];
}) => {
    const services = props.data
    const servicesRef = useRef<HTMLDivElement>(null);
    const [isReached, setIsReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (servicesRef.current) {
                const aboutUsCoordinates = servicesRef.current.getBoundingClientRect();
                const aboutUsY = aboutUsCoordinates.top;

                if (aboutUsY <= 700) {
                    setIsReached(true)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='Services mb-20' ref={servicesRef}>
            <div className='Services__title w-4/5 mx-auto my-0'>
                <Title title='خدمات' />
            </div>
            <div className='flex flex-row flex-wrap justify-evenly my-6 gap-12 px-7 sm:p-0 sm:text-base text-sm'>
                {services?.map((service, index) => (
                    <div key={index} className={`${isReached && styles.polygon}`}>
                        <PolygonContainer
                            isResponsive={false}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
