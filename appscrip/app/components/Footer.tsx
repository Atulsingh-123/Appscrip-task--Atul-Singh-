import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subscribe Section */}
          <div>
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

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-4">mettā muse</h2>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">&nbsp;</h2> {/* Empty heading to align with the left section */}
              <ul className="space-y-2">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          {/* Contact & Currency Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h2 className="text-lg font-semibold mb-4 mt-8">CURRENCY</h2>
            <p>USD</p>
            <p className="text-gray-400">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center">
          <p>&copy; 2023 mettamuse. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <img src="path/to/visa.png" alt="Visa" className="h-8" />
            <img src="path/to/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="path/to/amex.png" alt="Amex" className="h-8" />
            <img src="path/to/applepay.png" alt="Apple Pay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
