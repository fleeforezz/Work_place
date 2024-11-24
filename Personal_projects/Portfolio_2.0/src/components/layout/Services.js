"use client"
import { motion, useAnimation, useInView } from "framer-motion"
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

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
    })

    return (
        <motion.section id="services" className="px-[2rem] max-md:px-5"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <motion.h1 className="flex gap-10 justify-start font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] pt-24 max-sm:pt-10"
                variants={letterAnimation}
            >
                {/* <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none" className="rotate-180">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div> */}
                SERVICES
                <span className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#8c8c73" viewBox="0 0 256 256">
                        <path d="M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                </span>
            </motion.h1>

            <div ref={ref} className="grid grid-cols-2 gap-16 max-md:gap-5 max-md:grid-cols-1">
                <div>
                    <motion.h2 className="font-bold text-[#d1d1c7] text-[4.5vw] max-md:text-[7vw]"
                        variants={letterAnimation}
                    >
                        My expertises.
                    </motion.h2>
                    <motion.p className="text-[1.6vw] text-[#d1d1c7] max-md:text-[4vw] mt-5 max-md:mt-5"
                        variants={letterAnimation}
                    >
                        Optimizing software delivery, 
                        improving infrastructure scalability 
                        and reliability, fostering collaboration, 
                        and driving innovation to deliver value. 
                        I am eager to tackle the evolving challenges 
                        in this field.
                    </motion.p>
                </div>

                <span className="hidden max-md:block bg-[#aeae9d] w-[100%] h-1"></span>

                <motion.div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] leading-[6rem] max-md:leading-9"
                    variants={letterAnimation}
                >
                    <h3>Back-End-development</h3>
                    <h3>Web development</h3>
                    <h3>Create pipeline</h3>
                    <h3>Interact with-server</h3>
                </motion.div>

                <div>
                    <motion.h2 className="font-bold text-[#d1d1c7] text-[4.5vw] max-md:text-[7vw]"
                        variants={letterAnimation}
                    >
                        My digital tool box.
                    </motion.h2>
                    <motion.p className="text-[1.6vw] text-[#d1d1c7] max-md:text-[4vw] mt-5 max-md:mt-5"
                        variants={letterAnimation}
                    >
                        These are my go to tech stack to make any projects happen.
                        I am always eager of learning more about my current stack,
                        and new technologies that could expand my horizons.
                    </motion.p>
                </div>

                <span className="hidden max-md:block bg-[#aeae9d] w-[100%] h-1"></span>

                <motion.div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] leading-[6rem] max-md:leading-9"
                    variants={letterAnimation}
                >
                    <h3>Java</h3>
                    <h3>C# / .NET</h3>
                    <h3>MySQL</h3>
                    <h3>AWS</h3>
                    <h3>Docker</h3>
                    <h3>Kubernetes</h3>
                    <h3>GitLab</h3>
                    <h3>Jenkins / GitLab CI</h3>
                    <h3>Ansible</h3>
                </motion.div>
            </div>
        </motion.section>
    )
}