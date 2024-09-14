"use client"


import Image from 'next/image';
import { FaAward } from "react-icons/fa"; // Import the new icon
import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: "Frontend",
    image: "/assets/frontend.jpg",
    link: "" // This can be removed if you don't need it
  },
  // Uncomment and add more certifications as needed
  // {
  //   id: 2,
  //   title: "Certification 2",
  //   image: "/images/certification2.jpg",
  //   link: "https://example.com/certification2"
  // },
];

const Certifications = () => {
  return (
    <motion.div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-primary"  
    initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}, 
    
    }}
    
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 hover:text-yellow-500">
          Certifications 
          <FaAward className='inline-block ml-2 text-yellow-500' /> {/* Use the new icon */}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map(cert => (
            <div key={cert.id} className="relative group">
              <div className="relative w-full h-64">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  layout="fill"
                  objectFit="fill"
                  className="rounded-md shadow-lg"
                  priority
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-white text-lg font-bold hover:text-yellow-500">{cert.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
