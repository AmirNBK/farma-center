import React, { useState } from 'react';
import { Vazirmatn } from 'next/font/google';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from '@/components/Header/Header';
import { Button } from 'primereact/button';
import DrugstoresSearch from '@/components/DrugstoresSearch/DrugstoresSearch';
import Card from '@/components/CommonComponents/Card/Card';
import drugstorePic from '../../assets/Images/drugstore2.jpg';
import Footer from '@/components/Footer/Footer';
import PoliciesSection from '@/components/PoliciesSection/PoliciesSection';
import { GetStaticProps } from 'next';
import { getQueryDrugstores, getQueryFooter, getQueryHeader, getQueryPolicies } from '@/lib/service';

const vazir = Vazirmatn({ subsets: ['latin'] });

type DrugstoreType = {
    drugstoreName: string;
    description: string;
};

export default function AboutUs({ data, headerData, footerData, policiesData }: { data: any, headerData: any, footerData: any, policiesData: any }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredDrugstores: DrugstoreType[] = data.drugstores.drugstoresList?.filter((drugstore: DrugstoreType) =>
        drugstore.drugstoreName.includes(searchTerm)
    );

    return (
        <div className={`flex min-h-screen flex-col items-center AboutUs mt-15 ${vazir.className}`}
            style={{ background: '#313232' }}
        >
            <Header HomePageHeader={false} headerItems={headerData?.HeaderItems?.items} />
            <div className='mt-10 sm:m-0 w-full'>
                <DrugstoresSearch onSearch={handleSearch} />
            </div>
            <div className="card flex searchResults w-96 justify-content-center my-16 flex-row w-full gap-24 flex-wrap justify-center">
                {filteredDrugstores?.map((card, index) => (
                    <Card
                        key={index}
                        title={card.drugstoreName}
                        description={card.description}
                        footerText={'بیشتر بخوانید'}
                        playAnimation={false}
                        image={drugstorePic}
                    />
                ))}
            </div>

            <div className='w-full'>
                <Footer data={footerData?.FooterData?.footer[0]} />
                <PoliciesSection data={policiesData?.policiesSectionData?.policiesSection[0]} />
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getQueryDrugstores();
    const headerData = await getQueryHeader();
    const footerData = await getQueryFooter();
    const policiesData = await getQueryPolicies();

    return {
        props: {
            data,
            headerData,
            footerData,
            policiesData
        },
        revalidate: 3600,
    };
};