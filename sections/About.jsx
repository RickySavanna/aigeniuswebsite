"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title=" About AI Genius" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">AI Genius</span> is a leading provider of AI services for businesses of all sizes and industries. 
        Our team of experienced professionals specializes in developing customized solutions that meet the unique needs of our clients. {" "}
        <span className="font-extrabold text-white">
          {" "}
          Our Services{" "}
        </span>{" "}
        include{" "}
        <span className="font-extrabold text-white">  AI-powered </span> content creation, automated social media marketing, and predictive analysis. We believe in transparency, innovation, and community involvement, which is why we donate a portion of our sales to non-profits. 
        Our goal is to help businesses unlock the full potential of {" "}
        <span className="font-extrabold text-white">AI Technology</span>and drive growth and success.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
