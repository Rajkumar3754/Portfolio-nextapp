"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

// Example service data with non-empty fields
const services = [
  {
    num: "01",
    title: "FullStack Web Development",
    Description: "Building complete web solutions from front-end to back-end.",
    href: "/fullstack-web-development",
  },
  {
    num: "02",
    title: "Data Analytics",
    Description: "Transforming data into actionable insights to drive business decisions.",
    href: "/data-analytics",
  },
  {
    num: "03",
    title: "UI/UX Designing",
    Description: "Crafting intuitive and visually appealing user interfaces and experiences.",
    href: "/ui-ux-designing",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: easeIn },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* Top section */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-yellow-500 transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-yellow-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <BsArrowDownRight className="text-primary text-4xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-500 transition-all duration-500">{service.title}</h2>

              {/* Description */}
              <p className="text-base">{service.Description}</p>

              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
