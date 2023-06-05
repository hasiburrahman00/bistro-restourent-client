import React, { useEffect, useState } from 'react';

const SectionTitle = ({ subHeading, heading, textColor }) => {

    

    return (
        <div className='text-center'>
            <h5 className='text-[#D99904] text-lg '>{subHeading}</h5>
            <h2 className={`text-4xl border-y-4 inline-block py-4 mt-4 border-[#E8E8E8] uppercase ${textColor}`}>{heading}</h2>
        </div>
    );
};

export default SectionTitle;