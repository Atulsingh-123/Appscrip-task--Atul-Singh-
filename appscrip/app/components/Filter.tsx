"use client";

import React, { useState } from 'react';
import { useSidebar } from '../context/Context';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from 'react-icons/io';

const Filter: React.FC = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const selectOption = (option: string) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    return (
        <div>
            <div className='w-full md:w-[95%] lg:w-[90%] mx-auto border-y-2 border-gray-200 mt-10'>
                {/* Desktop View */}
                <div className="hidden md:flex justify-between items-center py-4" style={{ height: '88px' }}>
                    <div className="flex items-center">
                        <span className="text-gray-500 font-simplon-norm text-lg font-bold leading-[40px] text-left">3425 ITEMS</span>
                        <button
                            className="ml-4 text-gray-700 font-adobe-caslon-pro text-base font-normal leading-[40px] text-left flex items-center"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? (
                                <>
                                    <MdKeyboardArrowLeft className="mr-2" />
                                    HIDE FILTER
                                </>
                            ) : (
                                <>
                                    <MdKeyboardArrowRight className="mr-2" />
                                    SHOW FILTER
                                </>
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <button
                            className="text-gray-700 font-adobe-caslon-pro text-base font-normal leading-[40px] text-right flex items-center"
                            onClick={toggleDropdown}
                        >
                            <h3 className='text-gray-500 font-simplon-norm text-lg font-bold leading-[40px] text-right'>
                                {selectedOption}
                            </h3>
                             <span className="ml-2">
                                <IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} />
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute text-right right-0 mt-2 w-60 bg-white border border-gray-200 shadow-lg z-10">
                                <button
                                    className="block w-full text-right px-4 py-2  text-gray-700 hover:bg-gray-100 text-sm"
                                    onClick={() => selectOption('RECOMMENDED')}
                                >
                                    {selectedOption === 'RECOMMENDED' && '✔ '}RECOMMENDED
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 text-sm"
                                    onClick={() => selectOption('NEWEST FIRST')}
                                >
                                    {selectedOption === 'NEWEST FIRST' && '✔ '}NEWEST FIRST
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 text-sm"
                                    onClick={() => selectOption('POPULAR')}
                                >
                                    {selectedOption === 'POPULAR' && '✔ '}POPULAR
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 text-sm"
                                    onClick={() => selectOption('PRICE : HIGH TO LOW')}
                                >
                                    {selectedOption === 'PRICE : HIGH TO LOW' && '✔ '}PRICE : HIGH TO LOW
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 text-sm"
                                    onClick={() => selectOption('PRICE : LOW TO HIGH')}
                                >
                                    {selectedOption === 'PRICE : LOW TO HIGH' && '✔ '}PRICE : LOW TO HIGH
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex md:hidden justify-between items-center py-4 border-y-2 border-gray-200">
                <button className="text-gray-700">FILTER</button>
                <div className="border-r border-gray-300 h-6 mx-4"></div>
                <div className="relative">
                    <button
                        className="text-gray-700 flex items-center"
                        onClick={toggleDropdown}
                    >
                        {selectedOption} <span className="ml-2">▼</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-[235px] h-[324px] bg-white border border-gray-200 shadow-lg z-10">
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 text-sm"
                                onClick={() => selectOption('RECOMMENDED')}
                            >
                                {selectedOption === 'RECOMMENDED' && '✔ '}RECOMMENDED
                            </button>
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 text-sm"
                                onClick={() => selectOption('NEWEST FIRST')}
                            >
                                {selectedOption === 'NEWEST FIRST' && '✔ '}NEWEST FIRST
                            </button>
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 text-sm"
                                onClick={() => selectOption('POPULAR')}
                            >
                                {selectedOption === 'POPULAR' && '✔ '}POPULAR
                            </button>
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 text-sm"
                                onClick={() => selectOption('PRICE : HIGH TO LOW')}
                            >
                                {selectedOption === 'PRICE : HIGH TO LOW' && '✔ '}PRICE : HIGH TO LOW
                            </button>
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 text-sm"
                                onClick={() => selectOption('PRICE : LOW TO HIGH')}
                            >
                                {selectedOption === 'PRICE : LOW TO HIGH' && '✔ '}PRICE : LOW TO HIGH
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filter;
