"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// About me paragragh animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3,
        },
    },
}
const letterAnimation = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        delay: 3,
        transition: {
            duration: 0.5,
        },
    },
}

export default function Aboutme() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const body = document.querySelector('body');

            // if (body) {
            //     // Change color when scroll to About Me section
            //     if (scrollY > totalHeight * 0.07 && scrollY < totalHeight * 0.65) {
            //         body.style.backgroundColor = '#0e0e0c';
            //         body.style.color = '#FAFAF9';
            //     } else {
            //         body.style.backgroundColor = '#e8e8e3';
            //         body.style.color = 'black';
            //     }

            //     if (scrollY > totalHeight * 0.50 && scrollY < totalHeight * 0.938) {
            //         body.style.backgroundColor = '#0e0e0c';
            //         body.style.color = '#FAFAF9';
            //     }
            // }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <motion.section id="about" className="px-[2rem] max-md:px-5 pt-[50px] pb-[10px] bg-[#0e0e0c]"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <h1 className="font-semibold text-[#d1d1c7] text-[6vw] max-md:text-[7vw] max-sm:text-5xl leading-[6vw] pt-24 max-md:pt-0 pb-24 max-md:pb-14">
                {/* Me as a DevOps engineer transforms ideas
            into reality, driving efficiency and 
            excellence in every deployment. */}
                {/* As a software engineer, I bring <br></br> 
            creativity and precision together. It's not just <br></br>
            about building code, <br></br>
            but crafting solutions <br></br>
            that shape the future. */}
                {/* As a software engineer, <br></br>
                I blend creativity and <br></br>
                precision to craft <br></br>
                solutions that <br></br>
                shape the future. */}
                How Can I Help You
            </h1>

            <motion.div className="flex justify-start gap-10 pt-[45px]"
                variants={letterAnimation}
            >
                <h2 className="font-medium text-[#8c8c73] text-[8vw] max-sm:text-[10vw] max-md:pt-20">
                    ABOUT ME
                </h2>
                <span className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#8c8c73" viewBox="0 0 256 256">
                        <path d="M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                </span>
            </motion.div>

            <div ref={ref} className="flex max-md:flex-wrap">
                <img src="/profile-image.JPG" className="w-[47%] max-md:w-[100%] max-md:h-[500px] max-md:object-cover max-sm:w-[100%] max-sm:h-[50vh] max-sm:object-cover rounded-lg" />
                <div className="px-10 max-md:px-0">
                    <motion.span className="about-me-para">
                        <motion.h3 className="font-bold text-6xl text-[#d1d1c7] max-md:text-[7vw] max-md:mt-10"
                            variants={letterAnimation}
                        >
                            A brief intro, who am I 🧐 ?
                        </motion.h3>
                        <motion.p className="text-[1.6vw] text-[#d1d1c7] max-md:text-[4vw] mt-10 max-md:mt-5"
                            variants={letterAnimation}
                        >
                            {/* I am a seasoned DevOps engineer with
                            a passion for streamlining and optimizing 
                            software development processes.
                            <br></br>
                            <br></br>
                            With a background in both development 
                            and operations, I specialize in creating 
                            seamless workflows, implementing continuous 
                            integration and deployment pipelines, and 
                            ensuring the reliability and scalability 
                            of infrastructure. */}
                            I am a seasoned software engineer with a passion
                            for streamlining and optimizing software development processes.
                            <br></br>
                            <br></br>
                            With a strong background in development, I specialize in creating
                            seamless workflows, implementing efficient solutions, and ensuring
                            the reliability and scalability of software systems.
                            <br></br>
                            <br></br>
                            When I'm not engaged in development,
                            I enjoy working on
                            &nbsp;
                            <a href="https://hiishi.fleeforezz.me" target="_blank" className=" underline">
                                Hi Is Hi 🐈
                            </a>
                            &nbsp;
                            website.
                        </motion.p>
                    </motion.span>
                </div>
            </div>
        </motion.section>
    )
}
