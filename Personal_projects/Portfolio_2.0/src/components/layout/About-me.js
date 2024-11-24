"use client"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";

// Services paragragh animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.2,
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
        delay: 4,
        transition: {
            duration: 0.3,
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
    })

    return (
        <motion.section id="about" className="relative z-[1] px-[2rem] bg-[#0e0e0c] max-md:px-5"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <div className="grid grid-cols-12">
                <span className="max-md:hidden col-start-1">
                    <ArrowDownRight size={92} weight="light" color="#d1d1c7" />
                </span>
                <h1 className="font-medium uppercase leading-[8.5rem] text-center text-[#d1d1c7] text-[8vw] col-span-4 col-start-6 max-sm:text-[10vw] pt-24 max-sm:pt-10">
                    Developer,
                    Designer,
                    DevOps/
                </h1>
            </div>


            <div className="grid grid-cols-12 grid-rows-2 mt-[140px]">
                <img src="/profile-image.JPG" className="h-[800px] object-cover col-span-4 row-span-2 rounded-lg" />
                <div className="grid col-span-5 col-start-6">
                    <p className="text-[1.6vw] text-[#d1d1c7] font-medium">
                        As a software engineer, I bring creativity and precision
                        together. It's not just about building code, but crafting
                        solutions that shape the future.
                    </p>
                    <div className="grid grid-cols-12 mt-[80px]">
                        <p className="text-[#787169] uppercase text-[1.2rem] col-span-2">
                            (About Me)
                        </p>
                        <p className="text-[#9e9c98] text-[1.4rem] font-medium col-span-8 col-start-4">
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
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-subgrid col-span-5 col-start-6">

                </div>
            </div>
        </motion.section>
    )
}