import React from 'react';

interface DiscoverProductsProps { }

const FrontPage: React.FC<DiscoverProductsProps> = () => {
    return (
        <div>
            <div className="flex flex-col bg-[#FFFFFF] items-center text-center px-4 md:px-0 mt-10">
                {/* Breadcrumb for mobile view */}
                <div className="flex justify-start text-sm text-gray-500 mb-2 w-full md:hidden">
                    <span className="mr-2 text-gray-300">HOME</span> | <span className="ml-2">SHOP</span>
                </div>

               {/* Title */}
               <h1 className="font-simplon-norm font-normal text-1xl md:text-2xl lg:text-3xl xl:text-3xl leading-tight tracking-wide text-black mb-2"
                    style={{ 
                       
                        lineHeight: '72px', 
                        letterSpacing: '1px',
                        opacity: '1',
                        margin: '0 auto'
                    }}
                >
                    DISCOVER OUR PRODUCTS
                </h1>
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-lg max-w-xl mb-4">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
                    Dolor integer scelerisque nibh amet mi ut elementum.
                </p>

            </div>
           
        </div>
    );
};

export default FrontPage;
