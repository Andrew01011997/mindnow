import React from "react";
import MainBanner from "./subScreens/mainBanner/mainBanner";
import About from "./subScreens/about/about";
import Cases from "./subScreens/cases/cases";
import OurSkills from "./subScreens/ourSkills/ourSkills";
import ModalElements from './subScreens/modalElements/modalElements'
import Partners from "./subScreens/partners/partners";
import Footer from './subScreens/footer/footer'

const HomeScreen = () => {
  return (
    <>
      <ModalElements />

      <MainBanner />
      <About />
      <Cases />
      <OurSkills />
      <Partners />
      <Footer />
    </>
  );
};
export default HomeScreen;
