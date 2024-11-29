"use client"
import About from "./components/layout/About";
import Hero from "./components/layout/Hero";
import NavigationBar from "./components/layout/NavigationBar";
import Projects from "./components/layout/Projects";
import Services from "./components/layout/Services";

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import Preloader from "./components/PreloaderPage/Preloader";
import DigitalBox from "./components/layout/DigitalBox";
import ChangeBackground from "./components/ChangeBgColor/ChangeBackground";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {

          setIsLoading(false);

          document.body.style.cursor = 'default'

          window.scrollTo(0, 0);

        }, 1000)

      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <ChangeBackground />
      <NavigationBar />
      <Hero />
      <Services />
      <DigitalBox />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
