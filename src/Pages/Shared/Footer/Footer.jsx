import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="md:flex">
                <div className='bg-[#1F2937] md:w-1/2 text-white text-center p-10 px-auto'>
                    <h2 className='text-2xl font-semibold mb-4'>CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='md:w-1/2 bg-[#111827] text-white p-10 px-auto text-center'>
                    <h4 className="text-xl mb-2">Follow Us </h4>
                    <p className="">with Social Media </p>
                    <div className="flex gap-4 mt-4 items-center justify-center">
                        <Link><FaFacebookF className='h-6 w-6 ' /></Link>
                        <Link><FiInstagram className='h-6 w-6 ' /></Link>
                        <Link><FiTwitter className='h-6 w-6 ' /></Link>
                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-black text-white">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;