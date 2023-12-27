"use client"
import { Atom } from "@phosphor-icons/react";

export default function Aboutme() {
    return (
        <section className="px-20 py-44">
            <h1 className="font-medium text-[#d1d1c7] text-[5.7rem] leading-[6rem]">
                I have studied web development for a year, and during this time,
                I realized I have passionate in designing user interfaces for websites.
            </h1>

            <h2 className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-9xl pt-52 pb-10">
                <Atom size={36} color="#8c8c73" />
                ABOUT ME
                <Atom size={36} color="#8c8c73" />
            </h2>

            <div className="flex">
                <img src="/profile-image.JPG" className="w-[47%]" />
                <div className="px-10">
                    <h3 className="font-bold text-7xl">
                        A brief intro, who am i
                    </h3>

                    <p className="text-xl mt-10">
                    Driven by curiosity and a hunger for learning, 
                    my journey in Front-end developer has been a continuous
                    quest for innovation and improvement. With a strong 
                    foundation in NextJS, I specialize in 
                    ReactJS, utilizing them to 
                    build responsive and user-centric solutions.
                    <br></br>
                    <br></br>
                    Driven by curiosity and a hunger for learning, 
                    my journey in Front-end developer has been a continuous
                    quest for innovation and improvement. With a strong 
                    foundation in NextJS, I specialize in 
                    ReactJS, utilizing them to 
                    build responsive and user-centric solutions.
                    <br></br>
                    <br></br>
                    Driven by curiosity and a hunger for learning, 
                    my journey in Front-end developer has been a continuous
                    quest for innovation and improvement. With a strong 
                    foundation in NextJS, I specialize in 
                    ReactJS, utilizing them to 
                    build responsive and user-centric solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}