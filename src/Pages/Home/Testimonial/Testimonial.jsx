import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])

    return (
        <div className='my-16'>
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}
            />
            <div className='md:w-3/5 mx-auto'>
                <Swiper

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className='w-9/12 mx-auto text-center space-y-2'>
                                    <Rating
                                        className='mx-auto my-8'
                                        style={{ maxWidth: 180 }}
                                        value={review?.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className='h-8 w-8 mx-auto mb-8'/>
                                    <p className='text-[#444444] mt-8'>{review?.details}</p>
                                    <h2 className='text-[#CD9003] text-3xl uppercase'>{review?.name}</h2>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;