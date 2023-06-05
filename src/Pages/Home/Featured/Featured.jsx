import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured my-16 bg-fixed'>
            <div className='bg-black bg-opacity-70 py-16 '>
                <SectionTitle
                    textColor={'text-white'}
                    subHeading={"---Check It Out ---"}
                    heading={"From Out menu"}
                />
                <div className='w-3/5 mx-auto md:flex gap-12 py-12 items-center'>
                    <img className='md:w-1/2 ' src={featuredImg} alt="" />
                    <div className='text-white space-y-4 mt-12 md:mt-0 text-justify md:text-left'>
                        <h4 className='text-xl'>March 20, 2023</h4>
                        <h4 className='text-xl'>WHERE CAN I GET SOME?</h4>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className=' btn btn-outline btn-warning w-40 mx-auto border-0 border-b-4 hover:border-b-4'>View Full Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;