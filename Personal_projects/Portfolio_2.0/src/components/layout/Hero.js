"use client";
import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react";
import { easeInOut, motion } from "framer-motion"

// Image animation
const img = {
    hidden: {
        opacity: 0,
        scale: 2,
        x: "50%",
        y: "-50%",
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: "57%",
        y: "0%",
        transition: {
            duration: 2.5,
            delay: 0.23,
        },
    },
}

// Letter animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
}
const letterAnimation = {
    initial: {
        y: 400,
        scale: 0,
    },
    animate: {
        y: 0,
        scale: 1,
        delay: 5,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2,
        },
    },
}

export default function Hero() {
    return (
        <section id="hero" className="px-[2rem] pb-[55px] rounded-2xl max-md:pt-64 max-md:py-36">

            <motion.div
                variants={banner}
                initial="initial"
                animate="animate"
            >
                <motion.h1 className="name uppercase text-[13vw] max-md:text-[11.5vw] text-justify text-[#262626] font-semibold"
                    variants={letterAnimation}
                >
                    NhatTruong
                </motion.h1>
                <div className="flex items-center justify-between">
                    <p className=" flex flex-col text-[1.5rem] font-medium text-[#6b645c]">
                        <ArrowDownRight size={44} color="#675b5b" className="mb-[4rem]" />
                        As a software engineer,<br></br>
                        I blend creativity and <br></br>
                        precision to craft
                        solutions <br></br>
                        that shape the future.
                        <a href="#contact" id="lets-talk" className="flex items-center relative mt-[1rem] px-8 py-5 bg-[#393633] text-white rounded-full">
                            Let's Talk <ArrowUpRight size={20} color="#ffffff" weight="bold" />
                        </a>
                    </p>
                    <img src="/poster.JPG" className="w-[280px] h-[350px] object-cover rounded-lg" ></img>
                    <div className="flex flex-col items-end mt-[200px]">
                        <span className="text-[1.3rem] font-medium">
                            Available for full-time work
                        </span>
                        <h2 className="text-[3rem] leading-[3rem] font-semibold text-[#6b645c]">
                            Software <br></br>
                            Engineer
                        </h2>
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-20 right-[25%] rotate-90">
                <span className="font-medium">scroll</span>
                <span className="absolute -bottom-[0.5rem] left-16 bg-black px-[0.7px] py-5 bounce"></span>
            </div>
        </section>
    )
}