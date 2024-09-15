"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: "",
    stack: [{ name: "HTML 5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/thumb1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "backend",
    title: "Project 2",
    description: "",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/assets/thumb2.png",
    live: "#",
    github: "#",
  },
  // Add more projects as needed
];

const Work = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}, 
    
    }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {currentProject.num}
              </div>

              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-500 transition-all duration-500 capitalize">
                {currentProject.category}
              </h2>

              {/* Project description */}
              <p className="text-white">{currentProject.description}</p>

              {/* Stack */}
              <ul className="flex gap-4">
                {currentProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-yellow-500">
                    {item.name}
                    {index !== currentProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={currentProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-yellow-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub project button */}
                <Link href={currentProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-yellow-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all duration-300"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill alt={project.title} className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}

              <WorkSliderBtns  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none " btnStyles="bg-yellow-500 hover:bg-yellow-500 text-primary text-[22px] w-[44px] h-[44px] flex justify-center rounded-md items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
