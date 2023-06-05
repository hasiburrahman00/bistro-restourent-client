import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItem = <>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/ourMenu`}>All Menu</Link></li>
        <li><a>Item 3</a></li>
    </>


    return (
        <div>
            <div className="navbar bg-black text-white py-4 bg-opacity-30 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-black text-white opacity-30 menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS <br /> Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-warning btn-outline ">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;