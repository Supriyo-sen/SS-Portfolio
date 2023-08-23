import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t-4 mt-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-6 items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © 2023 Your Name. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
