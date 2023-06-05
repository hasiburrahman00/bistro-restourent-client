import React from 'react';
import Cover from '../../Components/Cover/Cover';
import bgImage from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet';

const OutMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | OurMenu</title>
            </Helmet>

            <Cover
                bgImg={bgImage}
                heading={"OUR MENU"}
                subHeading={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default OutMenu;