'use client'
import { Pirata_One } from "next/font/google";
import ComingSoon from "../ComingSoon/ComingSoon";
import "./style.css";
import React, { useState } from "react";
import Gallery from "./Gallary";
import Tabs from "./Tab";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const pirataOne = Pirata_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});



function ThemeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto mt-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      </motion.div>
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <Gallery activeTab={activeTab} />
    </div>
  );
}

export default ThemeSection;

