import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="px-[20px] pt-[200px] bg-[--dark-background]">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <h1 className="text-[9vw] text-[--heading] leading-[9.5rem] font-bold">
                        I’m focus- <br></br>
                        ing on \
                    </h1>
                </div>
                <div className="col-span-4 col-start-8 relative flex items-center">
                    <p className="text-[1.2vw]">
                        Optimizing software delivery, <br></br>
                        improving infrastructure scalability <br></br>
                        and reliability, fostering collaboration, <br></br>
                        and driving innovation to deliver <br></br>
                        value. I am eager to tackle the <br></br>
                        evolving challenges in this field. <br></br>
                    </p>
                    <p className="absolute bottom-0 right-0 text-[--title] uppercase">
                        (Services)
                    </p>
                </div>
            </div>

            <div className="sticky top-[150px] h-[80vh] mt-[100px]">
                <div className="section-seperator"></div>

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
                            I excel at creating responsive, user-friendly websites and web applications,
                            leveraging modern frameworks and best practices to deliver impactful digital solutions.
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
                                Responsive Design
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                03
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Scalability
                            </p>
                        </div>
                    </div>
                    <Image src={"/star.svg"} width={32} height={32} alt="star" className="col-start-12 mt-[30px] justify-self-end" />
                </div>
            </div>

            <div className="sticky top-[250px] h-[80vh]">
                <div className="section-seperator"></div>

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
                            Extensive experience designing and implementing CI/CD pipelines
                            to automate build, test, and deployment processes, ensuring fast
                            and reliable software delivery.
                        </p>
                        <div className="flex gap-[2rem] mt-[35px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                01
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Deliver high-quality software quickly
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                02
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Consistent & validated codebase
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                03
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Scalability
                            </p>
                        </div>
                    </div>
                    <Image src={"/triangle.svg"} width={32} height={32} alt="triangle" className="col-start-12 mt-[30px] justify-self-end" />
                </div>
            </div>

            <div className="sticky top-[350px] h-[80vh]">
                <div className="section-seperator"></div>

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
                            Strong expertise in interacting with servers, managing configurations,
                            deploying applications, and ensuring seamless communication between
                            client and server systems.
                        </p>
                        <div className="flex gap-[2rem] mt-[35px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                01
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Design Infrastructure
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                02
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Maintenance
                            </p>
                        </div>

                        <div className="p-[0.5px] bg-[#3a3733]"></div>

                        <div className="flex gap-[2rem] mt-[15px] mb-[15px]">
                            <span className="text-[#787169] text-[1.6rem] font-medium">
                                03
                            </span>
                            <p className="text-[#d1d1c7] text-[2rem] font-semibold">
                                Automation
                            </p>
                        </div>
                    </div>
                    <Image src={"/hexagonal.svg"} width={32} height={32} alt="hexagonal" className="col-start-12 mt-[30px] justify-self-end" />
                </div>
            </div>
        </section>
    )
};