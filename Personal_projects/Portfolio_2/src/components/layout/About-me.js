"use client"
import { Atom } from "@phosphor-icons/react";

export default function Aboutme() {
    return (
        <section className="px-20 pt-28">
            <h1 className="font-medium text-[#d1d1c7] text-[5.7rem] leading-[6rem]">
                I have studied web development for a year, and during this time,
                I realized I have passionate in designing user interfaces for websites.
            </h1>

            <h2 id="about" className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-9xl pt-52 pb-10">
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

                    <p className="text-3xl mt-10">
                    I am an independent frontend developer, UI/UX designer 
                    and creator based in Melbourne, Australia.
                    <br></br>
                    <br></br>
                    I specialize in crafting elevated, intuitive, and 
                    minimalistic designs for startups and small businesses 
                    to help them stand out in the digital landscape with a powerful impact. 😎
                    <br></br>
                    <br></br>
                    When I am not developing or designing, I enjoy creating 
                    videos that talk about frontend development, productivity 
                    and design on YouTube 📸
                    </p>
                </div>
            </div>
        </section>
    )
}