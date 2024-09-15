"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPython,
  SiDocker,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiInsomnia,
  SiLinux,
  SiMongoosedotws,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "",
  info: [
    { fieldName: "Name", fieldValue: "U.Rajkumar" },
    { fieldName: "Phone", fieldValue: "(+91) 9360550686" },
    { fieldName: "Experience", fieldValue: "0 year" },
    { fieldName: "MsTeams", fieldValue: "u.rajkumar2001@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "u.rajkumar2001@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Tamil" },
  ],
};

// experience data
const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "These are my experiences and journey in the tech industry:",
  items: [
    // {
    //   company: "Tech solution",
    //   position: "Fullstack Developer",
    //   duration: "2024 - Present",
    // },
    // {
    //   company: "Web Design Studio",
    //   position: "Front-End Developer Intern",
    //   duration: "Summer 2025",
    // },
    // {
    //   company: "E-commerce Startup",
    //   position: "Freelance Web Developer",
    //   duration: "2031-2034",
    // },
    // {
    //   company: "Tech Academy",
    //   position: "Teaching Assistant",
    //   duration: "2035-2039",
    // },
    // {
    //   company: "Digital Agency",
    //   position: "UI/UX Designer",
    //   duration: "2018-2019",
    // },
    {
      company: "Global solution groups",
      position: "Junior Software developer",
      duration: "2024-2026",
    },
  ],
};

// Education data
const Education = {
  icons: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am a full-stack developer with a solid foundation in mechanical engineering. My engineering background equips me with strong problem-solving skills and analytical thinking, which I now apply to creating robust and scalable software solutions. Transitioning from mechanical engineering to full-stack development, I've developed expertise in both front-end and back-end technologies, driving innovative projects with a detail-oriented approach.",
  items: [
    // {
    //   institution: "Online Course Platform",
    //   Degree: "Fullstack Web Development Bootcamp",
    //   duration: "2023",
    // },
    // {
    //   institution: "Online Course Platform",
    //   Degree: "Fullstack Web Development Bootcamp",
    //   duration: "2023",
    // },
    // {
    //   institution: "Code Academy",
    //   Degree: "Front-End Track",
    //   duration: "2022",
    // },
    // {
    //   institution: "Online Course",
    //   Degree: "Programming Course",
    //   duration: "2020-2021",
    // },
    // {
    //   institution: "Tech Institute",
    //   Degree: "Certified Web Developer",
    //   duration: "2019",
    // },
    {
      institution: "Online course",
      Degree: "Fullstack web development course",
      duration: "2023-2024",
    },
    {
      institution: "Anna university",
      Degree: "Mechanical engineering",
      duration: "2019-2023",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "I have experience in the following below mention skills",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMongoosedotws />, name: "Mongoose" },
    { icon: <SiRedux />, name: "Redux toolkit" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiInsomnia />, name: "Insomnia" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiLinux />, name: "Linux" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-auto">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items && experience.items.length > 0 ? (
                      experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-yellow-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="text-white/60 text-center">
                        No experience data available.
                      </li>
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-auto">
                  {Education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2  xl:gap-[30px]">
                    {Education.items && Education.items.length > 0 ? (
                      Education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-yellow-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="text-white/60 text-center">
                        No education data available.
                      </li>
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-4xl group-hover:text-yellow-500 transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize font-bold">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}  className="flex items-center justify-center xl:justify-start gap-6">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl"  >{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
