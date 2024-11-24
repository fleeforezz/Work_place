"use client"
import { ArrowUp, HandPointing } from "@phosphor-icons/react"

export default function Footer() {
    return (
        <section className="relative z-[1] bg-[#e8e8e3] px-5 pt-[80px] pb-[20px] max-md:pt-12">
            {/* <div className="flex max-md:flex-wrap justify-between">
                <div className="flex justify-between w-[65%] max-md:flex-wrap">
                    <h1>
                        <span className="font-light text-sm">@2023 </span>
                        Nhat
                    </h1>
                    <h2>
                        Site designed by <span className="font-semibold">Huy</span> and coded by <span className="font-semibold">Nhat</span> 🦖
                    </h2>
                </div>

                <a href="#hero" className="font-bold flex gap-2 items-center transition-button hover:-translate-y-2">
                    BACK TO TOP
                    <HandPointing size={26} color="#0a0a0a" />
                </a>
            </div> */}

            <div className="grid grid-cols-12">
                <div className="flex flex-col p-[10px] col-span-6">
                    <h1 className="font-semibold text-[1.4rem]">Menu</h1>

                    <div className="p-[0.5px] bg-[#3a3733] opacity-25 my-[5px]"></div>

                    <ul>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Works
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col p-[10px] col-span-3">
                    <h1 className="font-semibold text-[1.4rem]">Socials</h1>

                    <div className="p-[0.5px] bg-[#3a3733] opacity-25 my-[5px]"></div>

                    <ul>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Gitlab
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" flex flex-col p-[10px] col-span-3">
                    <h1 className="font-semibold text-[1.4rem]">Resources</h1>

                    <div className="p-[0.5px] bg-[#3a3733] opacity-25 my-[5px]"></div>

                    <ul>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#hero" className="text-[1.3rem]">
                                Works
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-12 mt-[50px]">
                <div className="col-span-6">
                    <p className="text-[4rem] text-[#393632] font-semibold leading-[4.5rem]">
                        2024 Nhat Truong <br></br>
                        Portfolio
                    </p>
                </div>
                <div className="col-span-3 relative">
                    <p className="text-[1.2rem] absolute bottom-0 text-[#393632] leading-[2.5rem]">
                        Site design inspired <br></br>
                        <span className="text-[3rem] font-medium">By Huy Nguyen</span>
                    </p>
                </div>
                <div className="col-span-3 relative">
                    <a href="/" className="flex w-fit absolute right-5 bottom-4 p-[20px] rounded-full bg-[#bdbcaf] hover:scale-[1.2] transition-[500ms]">
                        <ArrowUp size={32} color="#756c6c" />
                    </a>
                </div>
            </div>
        </section>
    )
}