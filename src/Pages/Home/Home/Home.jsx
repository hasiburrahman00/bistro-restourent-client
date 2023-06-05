import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../CherServiece/ChefService';
import MenuItems from '../MenuItems/MenuItems';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <MenuItems></MenuItems>
            <Contact></Contact>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;