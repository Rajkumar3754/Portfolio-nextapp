import { icons } from "lucide-react";
import Link from "next/link"

import {FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

const socials = [

    {icon: <FaGithub />,path:'https://github.com/Rajkumar3754'},
    {icon: <FaLinkedinIn />,path:'https://www.linkedin.com/in/rajkumar002/'},
    {icon: <FaTwitter />,path:'https://x.com/Rajkumar6055006'}
]

const Socials = ( {containerStyles,iconStyles}  ) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{

        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        
    


      })}
    </div>
  )
}

export default Socials
