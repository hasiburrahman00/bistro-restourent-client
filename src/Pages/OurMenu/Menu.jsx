import React from 'react';
import Cover from '../../Components/Cover/Cover';
import bgImage from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet';
import useMenu from '../../Hooks/useMenu';
import MenuCategory from '../../Components/MenuCategory/MenuCategory';
import SectionTitle from '../../Components/SectionTitle';
import coverImg from '../../assets/home/featured.jpg'

const Menu = () => {

    const [menu] = useMenu()
    console.log(menu);
    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | OurMenu</title>
            </Helmet>

            {/* Banner section for Menu page  */}
            <Cover
                bgImg={bgImage}
                heading={"OUR MENU"}
                subHeading={"Would you like to try a dish?"}
            />

            {/* Offered item  */}
            <div className='py-16'>
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                />
                <MenuCategory
                    items={offered}
                    btnText={"Order your favourite food"}
                />
            </div>

            {/* DESSERTS Item Cover  */}
            <div>
                <Cover
                    bgImg={coverImg}
                    title={"DESSERTS"}
                    content={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
            </div>
            <div className='py-16'>
                <MenuCategory
                    items={dessert}
                    btnText={"Order your favourite food"}
                />
            </div>

            {/* Salad Item Cover  */}
            <div>
                <Cover
                    bgImg={coverImg}
                    title={"Salads"}
                    content={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
            </div>
            <div className='py-16'>
                <MenuCategory
                    items={salad}
                    btnText={"Order your favourite food"}
                />
            </div>

            {/* Pizza Item Cover  */}
            <div>
                <Cover
                    bgImg={coverImg}
                    title={"Pizza"}
                    content={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
            </div>
            <div className='py-16'>
                <MenuCategory
                    items={pizza}
                    btnText={"Order your favourite food"}
                />
            </div>

            {/* Soups Item Cover  */}
            <div>
                <Cover
                    bgImg={coverImg}
                    title={"Soups"}
                    content={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
            </div>
            <div className='py-16'>
                <MenuCategory
                    items={soup}
                    btnText={"Order your favourite food"}
                />
            </div>



        </div>
    );
};

export default Menu;