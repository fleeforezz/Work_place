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

export default function Services() {
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
            const hero = document.getElementById('hero');

            if (hero) {
                // Change opacity when scroll to About Me section
                if (scrollY > totalHeight * 0.2) {
                    hero.style.opacity = '0';
                } else {
                    hero.style.opacity = '1';
                }
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <motion.section id="service" className="relative min-h-[340vh] z-[1] px-[2rem] mt-[900px] max-md:px-5 bg-[#0e0e0c]"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <h1 className="font-semibold uppercase text-[#d1d1c7] text-[7vw] max-md:text-[7vw] max-sm:text-5xl leading-[6vw] pt-24 max-md:pt-0 pb-24 max-md:pb-14">
                How Can I Help You /
            </h1>

            <div className="grid grid-cols-12 mb-[50px]">
                <div className="grid grid-cols-subgrid col-span-5 col-start-6">
                    <p className="text-[#787169] uppercase text-[1.2rem]">
                        (Services)
                    </p>
                    <p className="text-[#9e9c98] text-[1.4rem] font-medium col-span-4">
                        Optimizing software delivery, improving infrastructure scalability
                        and reliability, fostering collaboration, and driving innovation to
                        deliver value. I am eager to tackle the evolving challenges in this field.
                    </p>
                </div>
            </div>

            <div className="sticky top-[150px] h-[80vh]">
                <div className="p-[0.5px] bg-[#3a3733]"></div>

                <div className="grid grid-cols-12 bg-[#0e0e0c]">
                    <div>
                        <p className="text-[#d1d1c7] text-[3.5rem] font-medium">
                            (01)
                        </p>
                    </div>
                    <div className="grid col-span-4 col-start-6">
                        <h2 className="text-[#d1d1c7] text-[3.5rem] font-medium">
                            Web Development
                        </h2>
                        <p className="text-[#9e9c98] text-[1.35rem] mt-[30px]">
                            Optimizing software delivery, improving infrastructure scalability and
                            reliability, fostering collaboration, and driving innovation to deliver
                            value. I am eager to tackle the evolving challenges in this field.
                        </p>
                        <div className="flex gap-[2rem] mt-[35px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                01
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                02
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                03
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>
                    </div>
                    <img src="/17.svg" className="col-start-12 w-[32px] h-[32px] mt-[30px] justify-self-end"></img>
                </div>
            </div>

            <div className="sticky top-[250px] h-[80vh]">
                <div className="p-[0.5px] bg-[#3a3733]"></div>

                <div className="grid grid-cols-12 bg-[#0e0e0c]">
                    <div>
                        <p className="text-[#d1d1c7] text-[3.5rem] font-medium">
                            (02)
                        </p>
                    </div>
                    <div className="grid col-span-4 col-start-6">
                        <h2 className="text-[#d1d1c7] text-[3.5rem] font-medium">
                            CI/CD Pipelines
                        </h2>
                        <p className="text-[#9e9c98] text-[1.4rem] mt-[30px]">
                            Optimizing software delivery, improving infrastructure scalability and
                            reliability, fostering collaboration, and driving innovation to deliver
                            value. I am eager to tackle the evolving challenges in this field.
                        </p>
                        <div className="flex gap-[2rem] mt-[35px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                01
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                02
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                03
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>
                    </div>
                    <img src="/207.svg" className="col-start-12 w-[32px] h-[32px] mt-[30px] justify-self-end"></img>
                </div>
            </div>

            <div className="sticky top-[350px] h-[80vh]">
                <div className="p-[0.5px] bg-[#3a3733]"></div>

                <div className="grid grid-cols-12 bg-[#0e0e0c]">
                    <div>
                        <p className="text-[#d1d1c7] text-[3.5rem] font-medium">
                            (03)
                        </p>
                    </div>
                    <div className="grid col-span-4 col-start-6">
                        <h2 className="text-[#d1d1c7] text-[3.5rem] font-medium">
                            Interact With Servers
                        </h2>
                        <p className="text-[#9e9c98] text-[1.4rem] mt-[30px]">
                            Optimizing software delivery, improving infrastructure scalability and
                            reliability, fostering collaboration, and driving innovation to deliver
                            value. I am eager to tackle the evolving challenges in this field.
                        </p>
                        <div className="flex gap-[2rem] mt-[35px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                01
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                02
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                03
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Motion & Animation
                            </p>
                        </div>
                    </div>
                    <img src="/220.svg" className="col-start-12 w-[32px] h-[32px] mt-[30px] justify-self-end"></img>
                </div>
            </div>
        </motion.section>
    )
}
