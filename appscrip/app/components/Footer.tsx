import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [isMettMuseOpen, setIsMettMuseOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const [isFollowUsOpen, setIsFollowUsOpen] = useState(false);

    return (
        <footer className="bg-black text-white py-8">
            <div className="container w-full md:w-[95%] lg:w-[90%] mx-auto mt-5">
                {/* Main Flex Container */}
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Subscribe Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h2 className="text-lg font-semibold mb-4">BE THE FIRST TO KNOW</h2>
                        <p>Sign up for updates from mettā muse.</p>
                        <form className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Enter your e-mail..."
                                className="w-full px-4 py-2 rounded-l-md text-black"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black px-4 py-2 rounded-r-md"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>

                    {/* Contact & Currency Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <h2 className="text-lg font-semibold mb-4 mt-8">CURRENCY</h2>
                        <p>USD</p>
                        <p className="text-gray-400">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>

                <hr className="my-8 border-gray-300" />

                {/* Sections */}
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h2
                            className="text-lg font-semibold mb-4 cursor-pointer"
                            onClick={() => setIsMettMuseOpen(!isMettMuseOpen)}
                        >
                            mettā muse
                        </h2>
                        {(isMettMuseOpen || window.innerWidth >= 1024) && (
                            <ul className="space-y-2">
                                <li>About Us</li>
                                <li>Stories</li>
                                <li>Artisans</li>
                                <li>Boutiques</li>
                                <li>Contact Us</li>
                                <li>EU Compliances Docs</li>
                            </ul>
                        )}
                    </div>

                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h2
                            className="text-lg font-semibold mb-4 cursor-pointer"
                            onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                        >
                            QUICK LINKS
                        </h2>
                        {(isQuickLinksOpen || window.innerWidth >= 1024) && (
                            <ul className="space-y-2">
                                <li>Orders & Shipping</li>
                                <li>Join/Login as a Seller</li>
                                <li>Payment & Pricing</li>
                                <li>Return & Refunds</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        )}
                    </div>

                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h2
                            className="text-lg font-semibold mb-4 cursor-pointer"
                            onClick={() => setIsFollowUsOpen(!isFollowUsOpen)}
                        >
                            FOLLOW US
                        </h2>
                        {(isFollowUsOpen || window.innerWidth >= 1024) && (
                            <>
                                <div className="flex space-x-4">
                                    <a href="#"><img src="path/to/instagram.png" alt="Instagram" className="h-8" /></a>
                                    <a href="#"><img src="path/to/linkedin.png" alt="LinkedIn" className="h-8" /></a>
                                </div>
                                <h2 className="text-lg font-semibold mb-4 mt-8">mettā muse ACCEPTS</h2>
                                <div className="flex space-x-4">
                                    <img src="path/to/visa.png" alt="Visa" className="h-8" />
                                    <img src="path/to/mastercard.png" alt="Mastercard" className="h-8" />
                                    <img src="path/to/amex.png" alt="Amex" className="h-8" />
                                    <img src="path/to/applepay.png" alt="Apple Pay" className="h-8" />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 flex flex-col lg:flex-row justify-between items-center">
                    <p>&copy; 2023 mettamuse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
