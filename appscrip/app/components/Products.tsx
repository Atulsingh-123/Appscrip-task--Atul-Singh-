import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface ProductCardProps {
    title: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl }) => {
    // State to track if the heart is liked or not
    const [liked, setLiked] = useState(false);


    // Toggle the state when the button is clicked
    const handleLiked = () => {
       if(!liked){
        setLiked(true)
       }else{
        setLiked(false)
       }
    };

    const wordCount = title.trim().split(/\s+/).length;
    const isTitleVisible = wordCount <= 3;

    return (
        <div>
            <div className="bg-white   overflow-hidden flex flex-col">
                <div className="relative w-[300px] h-[399px]">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <h3 className="p-4 bg-white truncate">
                {title}
            </h3>
            <div className="p-4 flex items-center">
                <div className="text-gray-700 text-sm mr-4">
                    <a href="#" className="text-blue-500 inline">Sign in</a> or <span className="inline">Create an account to see pricing</span>
                </div>
                <div className="ml-auto">
                    <button
                        onClick={handleLiked}
                        className={`w-8 h-8 flex items-center justify-center rounded-full `}
                    >
                       {liked ? (
                            <FaHeart size={24} className="text-red-500" />
                        ) : (
                            <FaRegHeart size={24} className="text-gray-500" />
                        )}
                        {/* <CiHeart
                            className="w-full h-full"
                            style={{ color: isLiked ? 'red' : 'gray', backgroundColor:isLiked ? 'red' : 'white' }}
                        /> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
