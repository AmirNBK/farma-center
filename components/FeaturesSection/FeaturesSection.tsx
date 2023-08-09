import React from 'react';
import MultiPolygon from '../../assets/Icons/MultiPolygon.svg';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import drugstore from '../../assets/Icons/drugstore.svg';
import { Vazirmatn } from 'next/font/google';

interface Slide {
  slideImage: {
    mediaItemUrl: string;
  };
  slideTitle: string;
  slideDescription: string;
}

interface Product {
  title: string;
  description: string;
  icon: any;
  slide: Slide;
}

const vazir = Vazirmatn({ subsets: ['latin'] });

const FeaturesSection = (props: {
  data: Product[];
}) => {
  const data = props.data;

  const productTemplate = (product: Product) => {
    return (
      <div className={`flex flex-col text-center items-center gap-3 py-6 ${vazir.className}`}>
        <Image src={product?.slide?.slideImage?.mediaItemUrl || drugstore} alt='drugstoreICon' className='w-16' width={16} height={16} />
        <h3 className='text-2xl'>{product?.slide?.slideTitle}</h3>
        <p className='text-xl' style={{ direction: 'rtl' }}>{product?.slide?.slideDescription}</p>
      </div>
    );
  };

  return (
    <div className={`FeaturesSection ${vazir.className} bg-white relative`}>
      <div className="absolute left-0 z-0" style={{ top: '-55px' }}>
        <Image src={MultiPolygon} alt="polygon" />
      </div>
      <div style={{ marginTop: '150px' }} className='card'>
        <Carousel
          showNavigators={false}
          value={data}
          numVisible={1}
          numScroll={1}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
