"use client"
import { Atom, GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="flex gap-3 justify-center items-center font-medium text-center text-[#8c8c73] text-9xl pt-24 pb-10">
                <Atom size={36} color="#8c8c73" />
                CONTACTS
                <Atom size={36} color="#8c8c73" />
            </h1>

            <div className="flex justify-around gap-10">
                <div>
                    <h1 className="font-bold text-6xl">
                        Have an awsome idea?
                        <br></br>
                        Let's bring it to life.
                    </h1>
                    <p className="text-3xl mt-10 mb-10">
                        Changing and adapting new things
                        is my calling.
                    </p>
                    <img src="/image.gif" className="w-[100%]" />
                </div>

                <div>
                    <div>
                        <h2 className="text-3xl font-semibold">Contact Detailed</h2>
                        <div className="text-2xl text-gray-500 mt-3">
                            <h3>nhattruong.tmn@gmail.com</h3>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold">My Digital Spaces</h2>
                        <div className="text-2xl text-gray-500 mt-5">
                            <a href="" className="flex gap-2">
                                <GithubLogo size={36} color="#0a0a0a" />
                                <span className="github relative">Github</span>
                            </a>
                            <a href="" className="linkedin flex gap-2 mt-5 mb-5">
                                <LinkedinLogo size={36} color="#0a0a0a" />
                                <span className="linkedin relative">LinkedIn</span>
                            </a>
                            <a href="" className="insta flex gap-2">
                                <InstagramLogo size={36} color="#0a0a0a" />
                                <span className="insta relative">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}