import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./assets/component.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

const About = () => {
  const skill1 = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 75 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Bootstarp', percentage: 80 },
    { name: 'Tailwind.CSS', percentage: 80 },
  ];
  const skill2 = [
    { name: 'React.Js', percentage: 90 },
    { name: 'Node.Js', percentage: 85 },
    { name: 'Express.js', percentage: 80 },
    { name: 'Mongo.db', percentage: 95 },
  ];

  const certificates = [
    { title: 'Web Development', imageSrc: 'https://plus.unsplash.com/premium_photo-1682765673139-40958c79e647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'java Script', imageSrc: 'https://plus.unsplash.com/premium_photo-1682765673139-40958c79e647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'Mern Stack', imageSrc: 'https://plus.unsplash.com/premium_photo-1682765673139-40958c79e647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { title: 'java', imageSrc: 'https://plus.unsplash.com/premium_photo-1682765673139-40958c79e647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    // Add more certificates
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <div className="bg-gray-900 py-16 min-h-screen p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center justify-center md:justify-start">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/*Education*/}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start">Education</h3>
            <div className='p-4 m-auto'>
              <h4 className='mb-2 text-white'>2019</h4>
              <p className="text-white border-l-2 p-2 rounded">
                Madhyamik : West Bengal Board of Secondary Education (WBBSE)<br />
                Udairampur Pallisree Shikhayatan, percentage - 75%
              </p>
            </div>
            <div className='p-4 m-auto'>
              <h4 className='mb-2 text-white'>2021</h4>
              <p className="text-white border-l-2 p-2 rounded">
                Higher Secondary : West Bengal Council of Higher Secondary Education (WBCHSE)<br />
                Udairampur Pallisree Shikhayatan, Background - Science, percentage - 75%
              </p>
            </div>
            <div className='p-4 m-auto'>
              <h4 className='mb-2 text-white'>Pursuing</h4>
              <p className="text-white border-l-2 p-2 rounded">
                B-Tech: Computer science Engineering<br />
                Gargi Memorial Institute of Technology, 2021 - 2025
              </p>
            </div>
          </div>
          {/*Certificates*/}
          <div className='bg-gray-900'>
            <h3 className="text-xl font-semibold text-white mb-10 flex items-center justify-center">Certificates</h3>
            {/*<ul className="list-disc list-inside text-gray-700">
              {
                certificates.map((certificate, index) => (
                  <li
                    key={index}
                    className="text-white text-base cursor-pointer"
                  >{certificate.title}</li>))
              }
            </ul>*/}
            <div className="flex items-start">
              <Swiper
                modules={[EffectCards]}
                effect="cards"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={50}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {certificates.map((certificate, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-gray-900 p-2 rounded shadow-2xl border-4 flex flex-col items-center justify-center"
                    onClick={() => handleCertificateClick(certificate)}
                  >
                    <img src={certificate.imageSrc} alt={certificate.title} className="max-h-60 w-auto" />
                    <p className="mt-2 text-white text-center">{certificate.title}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
              {selectedCertificate && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <div className="max-w-3xl mx-auto p-4">
                    <img
                      src={selectedCertificate.imageSrc}
                      alt={selectedCertificate.title}
                      className="w-full h-auto"
                    />
                    <button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => setSelectedCertificate(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-8">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className='p-4 bg-gray-900 '>
              <h3 className='text-2xl font-semibold mb-6 text-white p-2 rounded'>FRONTEND Skill</h3>
              {skill1.map((skill, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-96 px-2 mb-4 ">
                  <div className="bg-gray-900 p-2 rounded shadow-2xl border-l-2">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <p className="text-white text-sm md:text-xl mb-2 md:mb-0">{skill.name}</p>
                      <p className="text-white text-sm md:text-base">{skill.percentage}%</p>
                    </div>
                    <div className="relative w-full bg-gray-300 rounded-lg mt-2">
                      <div className={`h-2 rounded-lg bg-cyan-600`} style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>


                </div>
              ))}
            </div>
            <div className='p-4 bg-gray-900 '>
              <h3 className='text-2xl font-semibold mb-6 text-white p-2 rounded'>MERN Skill</h3>
              {skill2.map((skill, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-96 px-2 mb-4 ">
                  <div className="bg-gray-900 p-2 rounded shadow-2xl border-l-2">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <p className="text-white text-sm md:text-xl mb-2 md:mb-0">{skill.name}</p>
                      <p className="text-white text-sm md:text-base">{skill.percentage}%</p>
                    </div>
                    <div className="relative w-full bg-gray-300 rounded-lg mt-2">
                      <div className={`h-2 rounded-lg bg-cyan-600`} style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>


                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
