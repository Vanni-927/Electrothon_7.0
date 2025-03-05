import { motion } from "framer-motion";
import { fadeIn } from "./motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: -50 }, // Start above
  visible: (index) => ({
    opacity: 1,
    y: 0, // Move to normal position
    transition: { duration: 0.7, delay: index * 0.1, ease: "easeOut" },
  }),
};

const ExploreCard = ({ id, heading, img1, content, index, active, handleClick }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
    className={`relative overflow-hidden ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[150px] h-[700px] lg:h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={img1}
      alt="theme"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    
    {active !== id ? (
      <>
        {/* Semi-transparent overlay */}
        <div className="absolute w-full h-full bg-black opacity-30 rounded-[24px]"></div>
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-10 lg:bottom-10 text-center lg:origin-[0,0]">
          {heading}
        </h3>
      </>
    ) : (
      <div className="absolute bottom-0 p-4 md:p-6 3xl:p-10 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] h-full">
        <p className="font-normal text-sm md:text-base 3xl:text-xl leading-[20.16px] text-white">
          {content}
        </p>
        <h2 className="mt-4 font-semibold text-lg md:text-2xl text-white absolute bottom-10">
          {heading}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
