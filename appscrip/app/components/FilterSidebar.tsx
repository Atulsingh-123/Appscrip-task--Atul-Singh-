"use client";

import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FilterSidebar: React.FC = () => {
    return (
        <div className="w-70 p-4">
            {/* Customizable Checkbox */}
            <div className="flex items-center mb-6">
                <input type="checkbox" id="customizable" className="mr-2" />
                <label htmlFor="customizable" className="text-gray-800 font-bold">
                    CUSTOMIZABLE
                </label>
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Ideal For Dropdown */}
            <div className="mb-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>IDEAL FOR</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>OCCASSION</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>WORK</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>fABRIC</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>SEGMENT</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>SUITABLE FOR</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>RAW MATERIALS</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
            <div className="mb-4 mt-4">
                <div className="flex justify-between items-center text-gray-800 font-bold">
                    <span>PATTERN</span>
                    <span><IoIosArrowDown className="text-[#292D32]" style={{ fontSize: '1rem', strokeWidth: 0 }} /></span>
                </div>
                <div className="text-gray-700 mt-2">All</div>
            </div>
            <hr className="border-gray-200" />
        </div>
    );
};

export default FilterSidebar;
