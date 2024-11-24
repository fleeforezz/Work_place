"use client"
import { GithubLogo, LinkedinLogo, InstagramLogo, GitlabLogoSimple } from "@phosphor-icons/react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

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
        delay: 3,
        transition: {
            duration: 0.3,
        },
    },
}

const listAnimation = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        delay: 3,
        transition: {
            duration: 0.3,
        }
    }
}

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
    })
    return (
        <motion.section id="contact" className="relative z-[1] px-[2rem] bg-[#e8e8e3]"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <div className="bg-[#090908] py-[140px] rounded-lg">
                <p className="text-[#a09e9a] uppercase pb-[2rem] font-medium text-[1.2rem] text-center">
                    (Have an awesome idea ?)
                </p>
                <p className="font-medium uppercase leading-[8.5rem] text-center text-[#d1d1c7] text-[8vw]">
                    Let's Make
                    <br></br>
                    It Happen
                </p>
                <p className="font-medium text-center pt-[5rem] text-[#d1d1c7] text-[1vw]">
                    nhattruong.tmn@gmail.com
                </p>
            </div>
        </motion.section>
    )
}