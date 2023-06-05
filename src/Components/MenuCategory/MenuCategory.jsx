import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const MenuCategory = ({ items, btnText }) => {

    return (
        <div className='w-10/12 mx-auto text-center'>
            <div className='md:grid grid-cols-2 gap-8 my-12 px-4 space-y-7 md:space-y-0'>
                {
                    items?.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        />)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 hover:border-b-4 '>{btnText}</button>
        </div>
    );
};

export default MenuCategory;