import React from 'react';

interface PoliciesSectionProps {
    data: {
        rightSide: { item: string }[];
        leftSide: { item: string }[];
    };
}

const PoliciesSection: React.FC<PoliciesSectionProps> = (props) => {
    const { data } = props;

    return (
        <div className="PoliciesSection text-white flex flex-row-reverse sm:text-base text-xs flex-wrap gap-5 justify-around py-6" style={{ backgroundColor: '#034D83' }}>
            <div className="PoliciesSection__rightSection flex gap-12" style={{ direction: 'rtl' }}>
                {data?.rightSide.map((item, index) => (
                    <h4 key={index}> {item.item} </h4>
                ))}
            </div>
            <div className="PoliciesSection__leftSection flex gap-12" style={{ direction: 'rtl' }}>
                {data?.leftSide.map((item, index) => (
                    <h4 key={index}> {item.item} </h4>
                ))}
            </div>
        </div>
    );
};

export default PoliciesSection;
