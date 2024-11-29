import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="px-[20px] bg-[--dark-background]">
            <div className="grid grid-cols-12 grid-rows-2">
                <div className="col-span-4">
                    <h1 className="text-[9vw] text-[--heading] leading-[9.6rem] font-bold">A brief</h1>
                </div>
                <div className="col-start-12">
                    <Image src={"/arrow-down-left.svg"} width={128} height={128} alt="arrow-up-right" />
                </div>
                <div className="col-span-9 col-start-2">
                    <h1 className="text-[9vw] text-[--heading] leading-[9.6rem] font-bold">intro about me \</h1>
                </div>
            </div>

            <div className="grid grid-cols-12 grid-rows-2 mt-[140px]">
                <img src="/profile-image.JPG" className="h-[800px] object-cover col-span-4 row-span-2 rounded-lg" />
                <div className="grid col-span-5 col-start-6">
                    <p className="text-[1.6vw] text-[#d1d1c7] font-medium">
                        As a software engineer, I bring creativity and precision
                        together. It's not just about building code, but crafting
                        solutions that shape the future.
                    </p>
                    <div className="grid grid-cols-12 mt-[80px]">
                        <p className="text-[#787169] uppercase text-[1.2rem] col-span-2">
                            (About Me)
                        </p>
                        <p className="text-[#9e9c98] text-[1.4rem] font-medium col-span-8 col-start-4">
                            With a strong background in development, I specialize in creating
                            seamless workflows, implementing efficient solutions, and ensuring
                            the reliability and scalability of software systems.
                            <br></br>
                            <br></br>
                            When I'm not engaged in development,
                            I enjoy working on
                            &nbsp;
                            <a href="https://hiishi.fleeforezz.me" target="_blank" className=" underline">
                                Hi Is Hi 🐈
                            </a>
                            &nbsp;
                            website.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-subgrid col-span-5 col-start-6">

                </div>
            </div>
        </section>
    )
};
