"use client"
import { Dot } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
import StickyCursor from "../stickyCursor/StickyCursor";

// Projects heading animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.4,
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
        delay: 5,
        transition: {
            duration: 0.3,
        },
    },
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
    })

    return (
        <motion.section ref={ref} id="projects" className="pt-10"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            {/* <StickyCursor isActive={isActive} /> */}

            <div className="px-[2rem] max-md:px-5 max-xl:px-16">
                <motion.h1 className="flex justify-start gap-10 font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] max-sm:pb-0"
                    variants={letterAnimation}
                >
                    PROJECTS
                    <span className="max-md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#8c8c73" viewBox="0 0 256 256">
                            <path d="M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </span>
                </motion.h1>

                {/* Homelab */}
                <div>
                    <div
                        className="flex flex-col justify-center"
                        onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    >

                        <div className="flex max-w-[1750px] max-h-[1000px] overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/HomeLab.png" className="w-[100%] object-cover transition-all hover:scale-[1.05]" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            <h4>
                                2021
                            </h4>
                        </div>
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw] whitespace-nowrap">
                            <h4>
                                Cloud
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                CI/CD
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                Docker
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                K8s
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw]  font-medium text-white mt-3 mb-3">
                            HomeLab
                        </h2>
                        <div className="flex items-center text-[1.575vw] whitespace-nowrap">
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                Self-Host Server
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                Virtual Machine
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                File Server
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                Automation
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Espresso */}
            <div className="flex max-md:flex-wrap max-lg:flex-wrap gap-16 max-md:gap-0 max-xl:gap-7 px-[2rem] max-md:px-0 max-xl:px-16">
                <div className="max-md:px-5">
                    <div
                        className="pt-10 max-md:pt-7"
                        onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    >
                        <div className="flex w-[100%] max-w-[952px] max-h-[1192px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/Espresso.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-[1.5vw] max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 py-1 max-md:py-[0vw]">
                            <h4>
                                2023
                            </h4>
                        </div>
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 py-1 max-md:py-[0vw]">
                            <h4>
                                Java
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                MSSQL
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                Docker
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                CI/CD
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                K8s
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            Espresso
                        </h2>
                        <div className="flex items-center text-[1.575vw] whitespace-nowrap">
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                Coffee Shop
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                School Project
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="max-md:text-[4vw] opacity-[70%]">
                                Full-Stack Development
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Bookery */}
                <div className="flex flex-col justify-center max-md:ml-0">
                    <div className="max-md:px-5 max-md:mt-7">
                        <div
                            onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                        >
                            <div className="flex w-[100%] max-w-[662px] max-h-[662px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                                <img src="/Bookery.png" className="w-[100%] transition-all hover:scale-[1.05]" />
                            </div>
                        </div>
                        <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    2024
                                </h4>
                            </div>
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    Java
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    MSSQL
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    Docker
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    CI/CD
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    K8s
                                </h4>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                                Bookery
                            </h2>
                            <div className="flex items-center text-[1.575vw] whitespace-nowrap">
                                <h3 className="max-md:text-[4vw] opacity-[70%]">
                                    Online book reader
                                </h3>
                                <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                                <h3 className="max-md:text-[4vw] opacity-[70%]">
                                    Full-Stack Development
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cafi */}
            <div className="flex max-md:flex-wrap gap-16 max-md:gap-0 max-xl:gap-7 px-[2rem] max-md:px-0 max-xl:px-16">
                <div className="max-md:px-5">
                    <div
                        className=" pt-20 max-md:pt-7"
                        onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    >
                        <a href="https://cafi.vercel.app" target="_blank" className="flex w-[100%] max-w-[1099px] max-h-[751px] mt-10 overflow-hidden transition-all hover:rounded-3xl">
                            <img src="/Cafi.png" className="w-[100%] max-md:w-[100%] transition-all hover:scale-[1.05]" />
                        </a>
                    </div>
                    <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            <h4>
                                2023
                            </h4>
                        </div>
                        <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                            <h4>
                                HTML
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                CSS
                            </h4>
                            <Dot size={40} color="#8c8c73" />
                            <h4>
                                Vite
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                            Cafi
                        </h2>
                        <div className="flex items-center whitespace-nowrap">
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                Front-End Development
                            </h3>
                            <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                            <h3 className="text-[1.875vw] max-md:text-[4vw] opacity-[70%]">
                                School Project
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Clinic Booking App */}
                <div className="flex flex-col max-md:ml-0">
                    <div className="max-md:px-5 max-md:pt-7">
                        <div
                            onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                        >
                            <div className="flex w-[100%] max-w-[660px] max-h-[560px] mt-5 overflow-hidden transition-all hover:rounded-3xl">
                                <img src="/Clinic_Booking.png" className="w-[100%] max-md:w-[1000px] transition-all hover:scale-[1.05]" />
                            </div>
                        </div>
                        <div className="flex gap-4 text-[#8c8c73] text-2xl max-md:text-[3.4vw] max-sm:gap-2 mt-8">
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    2023
                                </h4>
                            </div>
                            <div className="flex items-center border-2 border-[#8c8c73] rounded-full px-5 max-md:px-[5vw] py-1 max-md:py-[0vw]">
                                <h4>
                                    C#
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    LinQ
                                </h4>
                                <Dot size={40} color="#8c8c73" />
                                <h4>
                                    MSSQL
                                </h4>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl max-md:[2vw] font-medium text-white mt-3 mb-3">
                                Clinic Booking App
                            </h2>
                            <div className="flex items-center text-[1.575vw] whitespace-nowrap">
                                <h3 className="max-md:text-[4vw] opacity-[70%]">
                                    Front-End Development
                                </h3>
                                <Dot size={40} color="#ffffff" className="opacity-[60%]" />
                                <h3 className="max-md:text-[4vw] opacity-[70%]">
                                    School Project
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}
