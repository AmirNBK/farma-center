import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Card from '../CommonComponents/Card/Card';
import { Carousel } from 'primereact/carousel';
import styles from './blogs.module.scss'
import medicine from '../../assets/Images/medicine.png'


interface Blog {
    title: string;
    description: string;
}

interface BlogsProps {
    data: Blog[];
}
const Blogs = (props: BlogsProps) => {
    const data = props.data;

    const responsiveOptions = [
        {
            breakpoint: '2300px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1200px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const blogRef = useRef<HTMLDivElement>(null);
    const [isReached, setIsReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (blogRef.current) {
                const blogCoordinates = blogRef.current.getBoundingClientRect();
                const blogY = blogCoordinates.top;

                if (blogY <= 600) {
                    setIsReached(true)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const blogsTemplate = (blogs: Blog) => {
        return (
            <div className={`CardsContainer flex flex-row w-full my-12 justify-center`}>
                <Card title={blogs.title} description={blogs.description} footerText='بیشتر بخوانید' playAnimation={isReached}
                    equalSize image={medicine}
                />
            </div>
        );
    };

    return (
        <div className='Blogs my-10' ref={blogRef}>
            <h3 className='text-white w-fit mx-auto my-0 text-3xl md:text-5xl'> آخرین مقالات </h3>
            <div className='Blogs__cardContainer mt-6 card'>
                <Carousel
                    value={data}
                    numVisible={2}
                    numScroll={2}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                    itemTemplate={blogsTemplate}
                    responsiveOptions={responsiveOptions}
                />
            </div>

        </div>
    );
};

export default Blogs;