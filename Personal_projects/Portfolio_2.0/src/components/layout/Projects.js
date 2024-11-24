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
        <motion.section ref={ref} id="projects" className="relative z-[1] pb-[80px] bg-[#0e0e0c]"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            {/* <StickyCursor isActive={isActive} /> */}

            <div className="px-[2rem] max-md:px-5 max-xl:px-16">
                <motion.h1 className="font-semibold uppercase text-[#d1d1c7] after:content-['(4)'] after:text-[5.4vw] after:font-medium after:absolute after:top-[1.5rem] after:ml-[45px] after:text-[#a19e9a] text-[7.5vw] max-md:text-[7vw] max-sm:text-5xl leading-[6vw] pt-24 max-md:pt-0 pb-24 max-md:pb-14"
                    variants={letterAnimation}
                >
                    Selected Works /
                </motion.h1>

                <div className="grid grid-cols-12">
                    <div className="grid grid-cols-subgrid col-span-5 col-start-6">
                        <p className="text-[#787169] uppercase text-[1.2rem]">
                            (Projects)
                        </p>
                        <p className="text-[#9e9c98] text-[1.4rem] font-medium col-span-4">
                            Optimizing software delivery, improving infrastructure scalability
                            and reliability, fostering collaboration, and driving innovation to
                            deliver value. I am eager to tackle the evolving challenges in this field.
                        </p>
                    </div>
                </div>

                <div className="h-fit flex justify-between mt-[40px]">
                    <div className="relative">
                        <div className="sticky top-[20px]">
                            <h2 className="text-[#9f9c98] text-[20vw] leading-[20rem]">
                                01.
                            </h2>
                        </div>
                    </div>
                    <div>
                        <img src="/Bookery.svg" loading="lazy"/>
                        <div className="mt-[15px]">
                            <p className="text-[#a19e9b] text-[1.2rem]">
                                Online Reading & Sell Books
                            </p>
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#cfcfc5] text-[3rem] leading-[3rem] font-medium">Bookery</h3>
                                <div className="flex gap-[0.5rem]">
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Design</p>
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Full-Stack Development</p>
                                    <p className="text-[#0e0e0c] bg-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-fit flex justify-between mt-[60px]">
                    <div className="relative">
                        <div className="sticky top-[20px]">
                            <h2 className="text-[#9f9c98] text-[20vw] leading-[20rem]">
                                02.
                            </h2>
                        </div>
                    </div>
                    <div>
                        <img src="/Espresso.svg" loading="lazy" />
                        <div className="mt-[15px]">
                            <p className="text-[#a19e9b] text-[1.2rem]">
                                Online Reading & Sell Books
                            </p>
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#cfcfc5] text-[3rem] leading-[3rem] font-medium">
                                    Espresso
                                </h3>
                                <div className="flex gap-[0.5rem]">
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Design</p>
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Full-Stack Development</p>
                                    <p className="text-[#0e0e0c] bg-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-fit flex justify-between mt-[60px]">
                    <div className="relative">
                        <div className="sticky top-[20px]">
                            <h2 className="text-[#9f9c98] text-[20vw] leading-[20rem]">
                                03.
                            </h2>
                        </div>
                    </div>
                    <div>
                        <img src="/Clinic_Booking.svg" loading="lazy" />
                        <div className="mt-[15px]">
                            <p className="text-[#a19e9b] text-[1.2rem]">
                                Online Reading & Sell Books
                            </p>
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#cfcfc5] text-[3rem] leading-[3rem] font-medium">
                                    Clinic Booking
                                </h3>
                                <div className="flex gap-[0.5rem]">
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Design</p>
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Full-Stack Development</p>
                                    <p className="text-[#0e0e0c] bg-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-fit flex justify-between mt-[60px]">
                    <div className="relative">
                        <div className="sticky top-[20px]">
                            <h2 className="text-[#9f9c98] text-[20vw] leading-[20rem]">
                                04.
                            </h2>
                        </div>
                    </div>
                    <div>
                        <img src="/HomeLab.svg" loading="lazy" />
                        <div className="mt-[15px]">
                            <p className="text-[#a19e9b] text-[1.2rem]">
                                Online Reading & Sell Books
                            </p>
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#cfcfc5] text-[3rem] leading-[3rem] font-medium">
                                    HomeLab
                                </h3>
                                <div className="flex gap-[0.5rem]">
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Design</p>
                                    <p className="text-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">Full-Stack Development</p>
                                    <p className="text-[#0e0e0c] bg-[#a19e9a] px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full">2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}



// "use client"
// import React, { useEffect, useRef, useMemo, useCallback } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { useVirtualizer } from '@tanstack/react-virtual';
// import debounce from 'lodash/debounce';

// // Animation variants
// const banner = {
//     animate: {
//         transition: {
//             delayChildren: 0.3,
//             staggerChildren: 0.4,
//         },
//     },
// };

// const letterAnimation = {
//     initial: {
//         y: 20,
//         opacity: 0,
//     },
//     animate: {
//         y: 0,
//         opacity: 1,
//         delay: 5,
//         transition: {
//             duration: 0.3,
//         },
//     },
// };

// // Image loading optimization
// const ImageWithBlur = React.memo(({ src, alt, className }) => {
//     const imgRef = useRef(null);
//     const observerRef = useRef(null);
    
//     useEffect(() => {
//         observerRef.current = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && imgRef.current) {
//                         imgRef.current.src = src;
//                         observerRef.current.disconnect();
//                     }
//                 });
//             },
//             { rootMargin: '50px' }
//         );

//         if (imgRef.current) {
//             observerRef.current.observe(imgRef.current);
//         }

//         return () => {
//             if (observerRef.current) {
//                 observerRef.current.disconnect();
//             }
//         };
//     }, [src]);

//     return (
//         <img
//             ref={imgRef}
//             alt={alt}
//             className={`${className} blur-up lazyload`}
//             src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
//             data-src={src}
//         />
//     );
// });

// ImageWithBlur.displayName = 'ImageWithBlur';

// // Optimized sticky number component
// const StickyNumber = React.memo(({ number }) => {
//     const numberRef = useRef(null);
    
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.target) {
//                         entry.target.style.opacity = entry.intersectionRatio;
//                     }
//                 });
//             },
//             { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
//         );

//         if (numberRef.current) {
//             observer.observe(numberRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div className="relative">
//             <div className="sticky top-[20px] overflow-hidden">
//                 <h2 
//                     ref={numberRef}
//                     className="text-[20vw] leading-[20rem] text-[#9f9c98] transform-gpu transition-opacity"
//                     style={{ containIntrinsic: 'size', contain: 'layout paint style' }}
//                 >
//                     {number}.
//                 </h2>
//             </div>
//         </div>
//     );
// });

// StickyNumber.displayName = 'StickyNumber';

// // Optimized project card component
// const ProjectCard = React.memo(({ number, image, title, description, tags, year }) => {
//     return (
//         <div 
//             className="h-fit flex justify-between mt-[60px] will-change-transform"
//             style={{ 
//                 containIntrinsic: 'size layout style',
//                 contain: 'layout paint style'
//             }}
//         >
//             <StickyNumber number={number} />
//             <div>
//                 <ImageWithBlur
//                     src={image}
//                     alt={title}
//                     className="will-change-transform transform-gpu"
//                 />
//                 <div className="mt-[15px]">
//                     <p className="text-[#a19e9b] text-[1.2rem]">
//                         {description}
//                     </p>
//                     <div className="flex justify-between items-center">
//                         <h3 className="text-[#cfcfc5] text-[3rem] leading-[3rem] font-medium">
//                             {title}
//                         </h3>
//                         <div className="flex gap-[0.5rem]">
//                             {tags.map((tag, index) => (
//                                 <p
//                                     key={index}
//                                     className={`px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full ${
//                                         tag === year ? "text-[#0e0e0c] bg-[#a19e9a]" : "text-[#a19e9a]"
//                                     }`}
//                                 >
//                                     {tag}
//                                 </p>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// });

// ProjectCard.displayName = 'ProjectCard';

// // Projects data
// const projects = [
//     {
//         number: "01",
//         image: "/Bookery.svg",
//         title: "Bookery",
//         description: "Online Reading & Sell Books",
//         tags: ["Design", "Full-Stack Development", "2024"],
//         year: "2024"
//     },
//     {
//         number: "02",
//         image: "/Espresso.svg",
//         title: "Espresso",
//         description: "Online Reading & Sell Books",
//         tags: ["Design", "Full-Stack Development", "2024"],
//         year: "2024"
//     },
//     {
//         number: "03",
//         image: "/Clinic_Booking.svg",
//         title: "Clinic Booking",
//         description: "Online Reading & Sell Books",
//         tags: ["Design", "Full-Stack Development", "2024"],
//         year: "2024"
//     },
//     {
//         number: "04",
//         image: "/HomeLab.svg",
//         title: "HomeLab",
//         description: "Online Reading & Sell Books",
//         tags: ["Design", "Full-Stack Development", "2024"],
//         year: "2024"
//     }
// ];

// export default function Projects() {
//     const sectionRef = useRef(null);
//     const parentRef = useRef(null);
//     const isInView = useInView(sectionRef, { 
//         once: true,
//         threshold: 0.1,
//         rootMargin: '50px' 
//     });
//     const mainControls = useAnimation();

//     // Memoized projects data
//     const projectsData = useMemo(() => projects, []);

//     // Virtual scroll implementation
//     const rowVirtualizer = useVirtualizer({
//         count: projectsData.length,
//         getScrollElement: () => parentRef.current,
//         estimateSize: useCallback(() => 500, []), // Estimated height of each project card
//         overscan: 1
//     });

//     // Debounced scroll handler
//     const handleScroll = useMemo(
//         () =>
//             debounce(() => {
//                 if (sectionRef.current) {
//                     const { top } = sectionRef.current.getBoundingClientRect();
//                     requestAnimationFrame(() => {
//                         sectionRef.current.style.transform = `translate3d(0, ${top * 0.1}px, 0)`;
//                     });
//                 }
//             }, 16),
//         []
//     );

//     useEffect(() => {
//         if (isInView) {
//             mainControls.start("animate");
//         }

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             handleScroll.cancel();
//         };
//     }, [isInView, mainControls, handleScroll]);

//     return (
//         <motion.section 
//             ref={sectionRef} 
//             id="projects" 
//             className="relative z-[1] pb-[80px] bg-[#0e0e0c]"
//             variants={banner}
//             initial="initial"
//             animate={mainControls}
//             style={{ 
//                 containIntrinsic: 'size layout style',
//                 contain: 'layout paint style'
//             }}
//         >
//             <div 
//                 className="px-[2rem] max-md:px-5 max-xl:px-16"
//                 style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
//                 ref={parentRef}
//             >
//                 <motion.h1 
//                     className="font-semibold uppercase text-[#d1d1c7] after:content-['(4)'] after:text-[5.4vw] after:font-medium after:absolute after:top-[1.5rem] after:ml-[45px] after:text-[#a19e9a] text-[7.5vw] max-md:text-[7vw] max-sm:text-5xl leading-[6vw] pt-24 max-md:pt-0 pb-24 max-md:pb-14"
//                     variants={letterAnimation}
//                 >
//                     Selected Works /
//                 </motion.h1>

//                 <div className="grid grid-cols-12">
//                     <div className="grid grid-cols-subgrid col-span-5 col-start-6">
//                         <p className="text-[#787169] uppercase text-[1.2rem]">
//                             (Projects)
//                         </p>
//                         <p className="text-[#9e9c98] text-[1.4rem] font-medium col-span-4">
//                             Optimizing software delivery, improving infrastructure scalability
//                             and reliability, fostering collaboration, and driving innovation to
//                             deliver value. I am eager to tackle the evolving challenges in this field.
//                         </p>
//                     </div>
//                 </div>

//                 {rowVirtualizer.getVirtualItems().map((virtualRow) => {
//                     const project = projectsData[virtualRow.index];
//                     return (
//                         <div
//                             key={virtualRow.index}
//                             style={{
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: 0,
//                                 width: '100%',
//                                 height: virtualRow.size,
//                                 transform: `translateY(${virtualRow.start}px)`,
//                             }}
//                         >
//                             <ProjectCard {...project} />
//                         </div>
//                     );
//                 })}
//             </div>
//         </motion.section>
//     );
// }