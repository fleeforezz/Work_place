import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative flex flex-col gap-[5rem] px-[20px] bg-[--dark-background]">
            <div className="container_1 mt-[20px]">
                <h1 className="name ml-[50px] text-[9rem] text-[--heading] leading-[8rem] font-bold">
                    Truong Minh <br></br>
                    Nhat
                </h1>
                <Image src={"/formula.png"} width={74} height={74} alt="sport-car" className="sport-car"/>
            </div>

            <div className="container_2">
                <h2 className="ml-[50px] text-[3vw] text-[--heading] leading-[3.5rem] font-semibold">
                    Software <br></br>
                    Engineer
                </h2>
                <span className="location flex flex-col text-[1.5vw] text-[--heading] font-light">
                    Base in <br></br>
                    HoChiMinh city
                    <span className="font-extralight uppercase">
                        *Available for work
                    </span>
                </span>
            </div>

            <div className="container_3 grid grid-cols-12">
                <div className="col-span-7">
                    <p className="text-[1.5vw] text-[--heading] font-medium">
                        Also I'm familiar with
                    </p>
                    <h2 className="text-[6vw] text-[--heading] font-semibold">
                        DevOps Tools
                    </h2>
                </div>
                <a href="#about" className="more col-start-12 col-span-2 p-[50px] text-nowrap flex flex-col items-center justify-center">
                    <Image src={"arrow-up-right.svg"} width={32} height={32} alt="arrow-up-right" />
                    More about me
                </a>
            </div>

            <Image src={"star.svg"} width={180} height={180} alt="star" className="absolute top-[30px] left-[70%] animate-spin"/>
            <Image src={"triangle.svg"} width={140} height={140} alt="triangle" className="absolute top-[350px] left-[45%] animate-bounce" />
            <Image src={"hexagonal.svg"} width={180} height={180} alt="hexagonal" className="absolute bottom-[80px] right-[27%] animate-shake " />

            <div className="section-seperator"></div>

        </section>
    )
};
