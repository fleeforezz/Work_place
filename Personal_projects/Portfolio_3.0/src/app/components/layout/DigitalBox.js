import Image from "next/image";

export default function DigitalBox() {
    return (
        <section id="digital-box" className="relative px-[20px] pt-[25px] pb-[175px] bg-[--dark-background]">
            <div className="grid grid-cols-12">
                <div className="relative col-span-6">
                    <h1 className="digital-heading text-[9vw] text-[--heading] leading-[9.6rem] font-bold">
                        My digital <br></br>
                        tool box \
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
                        (Digital Box)
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-12 grid-row-9 mt-[100px]">
                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        Java
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        C# / .NET
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        MySQL
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        AWS
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        Docker
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        Kubernetes
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        Gitlab CI
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        Jenkins
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

                <div className="hover_effect col-span-12">
                    <h2 className="pl-[20px] text-[5vw] font-bold leading-[6rem] uppercase">
                        Ansible
                    </h2>
                </div>

                <div className="section-seperator col-span-12"></div>

            </div>

            <Image src={"/earth.png"} width={800} height={800} alt="earth" className="absolute -z-10 top-[30%] left-[30%]"/>

        </section>
    )
};
