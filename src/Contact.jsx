import React from 'react';
import "./assets/component.css"
// import react mail icon 
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaAddressCard, } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-gray-900 py-16 ">
      <div className="container mx-auto">
        <div className="mb-6 p-8">
          <h1 className="text-3xl font-bold mb-4 text-white flex items-center justify-center md:justify-start">Contact Us</h1>
        </div>
        <div className="mb-6 p-8">-
          <iframe className='h-64 rounded w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14749.137289057617!2d88.2966528!3d22.455947449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1692102788670!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <div className="p-4 bg-gray rounded shadow-md ">
          <h3 className="font-semibold mb-2 p-2 text-3xl border-b-2 border-white text-white bg-gray-900
          flex items-center justify-center md:justify-start">
          Address
        </h3>
            <div className="mb-2">
              <p className="flex items-center w-full  p-6 text-xl  text-white">
                <FaPhoneAlt className="m-1 mr-8" />
                +91 86172-12710
              </p>
              <p className="flex items-centerw-full p-6 text-xl  text-white">
                <FaAddressCard className="m-1 mr-8" />                
                Gabberia, Kolkata, India
              </p>
              <p className="flex items-center w-full p-6 text-xl  text-white">
                <AiOutlineMail className='m-1 mr-8'  />
                supriyoss2003@email.com
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray rounded shadow-md">
            <h3 className="font-semibold mb-2 p-2 text-3xl border-b-2 border-white text-white bg-gray-900
            flex items-center justify-center md:justify-start">
              How Can I Help You
            </h3>

            <form>
              <div className="mb-4 p-2">
              <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800 placeholder-gray-400 focus:outline-none shadow-myshadow hover:shadow-lg focus:shadow-xl"
            />
            
            
                     
              </div>
              <div className="mb-4 p-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="mb-4 p-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="mb-4 p-2">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800 placeholder-gray-400 focus:outline-none resize-none"
                ></textarea>
              </div>
            </form>

            </div>

          <div className="p-4 bg-gray rounded shadow-md">
          <h3 className="font-semibold mb-2 p-2 text-3xl border-b-2 border-white text-white bg-gray-900
          flex items-center justify-center md:justify-start">
          Message
        </h3>
            <textarea
              rows="8"
              placeholder="Your need"
              className="mt-4 border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800 placeholder-gray-400 focus:outline-none"
            ></textarea>
            <div className='mb-4  items-center'>
              <button
                type="submit "
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
