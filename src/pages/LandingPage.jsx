import { motion } from "framer-motion";

import Accordion from "../components/Accordion";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import StoryCard from "../components/StoryCard";
import StoryCard2 from "../components/StoryCard2";
import StoryCard3 from "../components/StoryCard3";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full"
    >
      <HeroSection />

      <Bar />

      <StoryCard />

      <Bar />

      <StoryCard2 />

      <Bar />

      <StoryCard3 />

      <Bar />

      <Accordion />

      <Bar />

      <Footer />
    </motion.div>
  );
};

export default LandingPage;
