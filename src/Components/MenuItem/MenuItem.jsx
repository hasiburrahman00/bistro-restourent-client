import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;

    return (
        <div className='flex items-center justify-between gap-4'>
            <div>
                <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-[118px]  h-[104px] ' src={image} alt="" />
            </div>
            <div>
                <h2 className='uppercase text-[#151515] text-left'>{name}------------------ </h2>
                <p className='text-[#737373] text-justify'>{recipe}</p>
            </div>
            <div>
                <h5 className='text-[#BB8506] '>{price}</h5>
            </div>
        </div>
    );
};

export default MenuItem;