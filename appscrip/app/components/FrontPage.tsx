import React from 'react';

interface DiscoverProductsProps { }

const FrontPage: React.FC<DiscoverProductsProps> = () => {
    return (
        <div>
            <div className="flex flex-col bg-[#FFFFFF] items-center text-center px-4 md:px-0 mt-10">
                {/* Breadcrumb for mobile view */}
                <div className="flex text-sm text-gray-500 mb-2 md:hidden">
                    <span className="mr-2">HOME</span> | <span className="ml-2">SHOP</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold text-black mb-2">
                    DISCOVER OUR PRODUCTS
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-lg max-w-xl mb-4">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
                    Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>

            </div>
           
        </div>
    );
};

export default FrontPage;
