import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import React from 'react';
import { FaBars, FaSearch, FaHeart, FaShoppingBag, FaUser, FaCaretDown } from 'react-icons/fa';


const Navbar: React.FC = () => {
    return (
        <div className="border-b-2 border-gray-300">
            {/* Top Bar */}
            <div className="bg-black w-full flex justify-center items-center px-4 py-2">
                <div className="text-red-600 custom-font text-[12px] font-normal leading-[14.4px] tracking-[1px] flex items-center space-x-32">
                    <span className="block md:hidden flex items-center space-x-2">
                        <img src="/element.png" alt="Element Icon" className="w-[14px] h-[14px]" />
                        <span>Lorem ipsum dolor</span>
                    </span>
                    <span className="hidden md:block lg:hidden flex items-center space-x-2">
                        <img src="/element.png" alt="Element Icon" className="w-[14px] h-[14px]" />
                        <span>Lorem ipsum dolor</span>
                    </span>
                    <span className="hidden lg:flex space-x-4 items-center">
                        <img src="/element.png" alt="Element Icon" className="w-[14px] h-[14px]" />
                        <span>Lorem ipsum dolor</span>
                        <img src="/element.png" alt="Element Icon" className="w-[14px] h-[14px]" />
                        <span>Lorem ipsum dolor</span>
                        <img src="/element.png" alt="Element Icon" className="w-[14px] h-[14px]" />
                        <span>Lorem ipsum dolor</span>
                    </span>
                </div>
            </div>


            {/* Main Navbar */}
            <div className="bg-white">
                <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Mobile Menu Icon and Logo */}
                    <div className="flex items-center space-x-4">
                        <button className="text-xl md:hidden">
                            <FaBars />
                        </button>
                        <img src="/logo.png" alt="Logo" className="w-6 h-6 md:w-9 md:h-9 mr-[10px]" />
                    </div>

                    {/* Logo Text */}
                    <div className="flex-grow flex justify-center md:justify-center relative">
                        <span
                            className="text-[20px] font-extrabold leading-[24.2px] tracking-[1px] text-left"
                            style={{ fontFamily: 'Inter' }}
                        >
                            LOGO
                        </span>
                    </div>

                    {/* Icons and Language Selector */}
                    <div className="flex items-center space-x-4">
                        {/* Icons for Mobile View */}
                        <button className="text-xl md:hidden">
                            <CiSearch className="w-6 h-6" />
                        </button>
                        <button className="text-xl md:hidden">
                            <CiHeart className="w-6 h-6" />
                        </button>
                        <button className="text-xl md:hidden">
                            <LuShoppingBag className="w-6 h-6" />
                        </button>

                        {/* Icons for Desktop View */}
                        <button className="text-xl hidden md:inline-block">
                            <CiSearch className="w-8 h-8" />
                        </button>
                        <button className="text-xl hidden md:inline-block">
                            <CiHeart className="w-8 h-8" />
                        </button>
                        <button className="text-xl hidden md:inline-block">
                            <LuShoppingBag className="w-8 h-8" strokeWidth="1" />
                        </button>
                        <button className="text-xl hidden md:inline-block">
                            <CiUser className="w-8 h-8" />
                        </button>

                        {/* Language Selector */}
                        <div className="font-medium hidden md:inline-block">
                            ENG <FaCaretDown />
                        </div>
                    </div>
                </div>
            </div>


            {/* Navigation Links */}
            <div className="bg-white text-black py-2">
                <div className="container mx-auto px-4 flex justify-center space-x-4 md:space-x-8 lg:space-x-16 md:flex hidden">
                    <a href="#" className="font-bold text-lg leading-6 tracking-wider" style={{ fontFamily: 'Simplon Norm' }}>SHOP</a>
                    <a href="#" className="font-bold text-lg leading-6 tracking-wider" style={{ fontFamily: 'Simplon Norm' }}>SKILLS</a>
                    <a href="#" className="font-bold text-lg leading-6 tracking-wider" style={{ fontFamily: 'Simplon Norm' }}>STORIES</a>
                    <a href="#" className="font-bold text-lg leading-6 tracking-wider" style={{ fontFamily: 'Simplon Norm' }}>ABOUT</a>
                    <a href="#" className="font-bold text-lg leading-6 tracking-wider" style={{ fontFamily: 'Simplon Norm' }}>CONTACT US</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
