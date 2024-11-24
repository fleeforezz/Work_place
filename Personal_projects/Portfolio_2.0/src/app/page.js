"use client"
import Aboutme from '@/components/layout/About-me'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Projects from '@/components/layout/Projects'
import Services from '@/components/layout/Services'
import StickyCursor from '@/components/stickyCursor/StickyCursor'

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import Preloader from '@/components/PreloaderPage/Preloader'

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
    <>
      {/* <StickyCursor /> */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Aboutme />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
