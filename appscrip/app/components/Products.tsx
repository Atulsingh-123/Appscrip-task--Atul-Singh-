import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface ProductCardProps {
    title: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl }) => {
    const [liked, setLiked] = useState(false);

    const handleLiked = () => {
        setLiked(!liked);
    };

    const wordCount = title.trim().split(/\s+/).length;
    const isTitleVisible = wordCount <= 3;

    return (
        <div className="bg-white overflow-hidden flex flex-col p-2 sm:p-4 md:p-6 lg:p-8">
            <div className="relative w-full h-[224px] sm:w-full sm:h-[224px] md:w-full md:h-[266px] lg:w-full lg:h-[332px] xl:w-full xl:h-[399px]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <h2 className='bg-white truncate'>
                {title}
            </h2>
            <div className="flex items-center mt-2">
                <div className="text-gray-700 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm mr-2 sm:mr-4">
                    <a href="#" className="text-blue-500 inline">Sign in</a> or <span className="inline">Create an account to see pricing</span>
                </div>
                <div className="ml-auto">
                    <button
                        onClick={handleLiked}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 flex items-center justify-center rounded-full"
                    >
                        {liked ? (
                            <FaHeart className="text-red-500 w-full h-full" />
                        ) : (
                            <FaRegHeart className="text-gray-500 w-full h-full" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
