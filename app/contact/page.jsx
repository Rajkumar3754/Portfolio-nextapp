"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91)9360550686",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "u.rajkumar2001@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Sankarnagar Town 627-357, Tirunelveli District, Tamil Nadu",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Form Section */}
          <div className="xl:w-1/2 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-yellow-500">Let's Work Together</h3>
              <p className="text-white/60">
               I’m excited to collaborate with you! Let’s connect and turn your ideas into reality through online tools and creative teamwork.
              </p>
              
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" aria-label="First Name" />
                <Input type="text" placeholder="Lastname" aria-label="Last Name" />
                <Input type="email" placeholder="Email address" aria-label="Email" />
                <Input type="tel" placeholder="Phone number" aria-label="Phone" />
              </div>

              {/* Select Field */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="data">Data Analytics</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Text Area */}
              <Textarea
                className="h-48"
                placeholder="Type your message here."
                aria-label="Message"
              />

              {/* Submit Button */}
              <Button size="md" className="max-w-xs">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#27272c] text-yellow-500 rounded-md flex items-center justify-center">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-2xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
