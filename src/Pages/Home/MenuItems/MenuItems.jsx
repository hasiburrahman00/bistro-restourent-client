import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Components/MenuItem/MenuItem';

const MenuItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setItems(popularItems);
                console.log(popularItems)
            })
    }, [])

    return (
        <div className='py-16  w-10/12 mx-auto text-center'>
            <SectionTitle
                subHeading={"--- Check It Out ---"}
                heading={"From Our menu"}
            />

            <div className='md:grid grid-cols-2 gap-8 my-12 px-4 space-y-7 md:space-y-0'>
                {
                    items?.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        />)
                }
            </div>
            <button className='btn btn-outline btn-warning w-40 mx-auto border-0 border-b-4 hover:border-b-4 '>View Full Menu</button>
            
        </div>
    );
};

export default MenuItems;