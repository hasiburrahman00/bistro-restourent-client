import React from 'react';
import { Parallax, Background } from 'react-parallax';



const Cover = ({ bgImg, heading, subHeading, content, title }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className='my-32'>
                    <div className="hero-content text-center bg-opacity-60 bg-black text-white w-2/3 mx-auto py-24">
                        <div className="md:px-20">
                            <h1 className="mb-2 text-5xl font-bold">{heading}</h1>
                            <h3 className='text-l font-semibold'>{subHeading}</h3>
                            <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>



    );
};

export default Cover;