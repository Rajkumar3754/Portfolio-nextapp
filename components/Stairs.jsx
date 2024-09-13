import { animate, motion } from "framer-motion";

// Variants for the stair animation
const stairAnimation = {
  initial: {
    top:"0%"
  },
  animate: {
  top:"100%",
   
  },
  exit: {
   top:["100%","0%"]
    
  },
};

// Function to reverse the index for staggered animation
const reverseIndex = (index) => {
  const totalSteps = 6; // Number of steps
  return totalSteps - index - 1;
};

// Stairs component
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h- w-full bg-white relative" // Set a fixed height to see the effect
        />
      ))}
    </>
  );
};

export default Stairs;
