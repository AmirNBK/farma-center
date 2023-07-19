import Image from 'next/image';
import React from 'react';
import logo from '../../assets/Icons/MainLogo.svg';
import twitter from '../../assets/Icons/twitter.svg';
import linkedin from '../../assets/Icons/linkedin.svg';

interface Section {
    title: string;
    subItems: { item: string }[];
}

interface FooterProps {
    data: {
        content: Section[];
        sloganSide: { slogan: string }[];
    };
}

const Footer: React.FC<FooterProps> = (props) => {
    const { data } = props;
    

    return (
        <div className="footer flex flex-col-reverse py-8 justify-center gap-10"
        style={{ background: '#062C48' }}>
            <div className="footer__midSection flex flex-row flex-wrap gap-24 justify-evenly text-right gap-y-10">
                {data?.content.map((section: Section, index: number) => (
                    <div key={index}>
                        <h4 className="footer__leftSection__title font-bold text-lg" style={{ color: '#EBDAB2' }}>
                            {section.title}
                        </h4>
                        {section.subItems?.map((item, itemIndex) => (
                            <h4 key={itemIndex} className="footer__leftSection__items gap-x-2.5 flex flex-row-reverse justify-right text-base text-white">
                                {item.item === 'توییتر' ? <Image src={twitter} alt="twitter" /> : item.item === 'لینکدین' ? <Image src={linkedin} alt="linkedin" /> : ''}
                                {item.item}
                            </h4>
                        ))}
                    </div>
                ))}
            </div>

            <div className="footer__rightSection flex flex-col items-center">
                <Image src={logo} alt="logo" />
                <h2 className="text-white text-2xl md:text-4xl font-bold w-8/12 text-center">{data?.sloganSide[0]?.slogan}</h2>
            </div>
        </div>
    );
};

export default Footer;
