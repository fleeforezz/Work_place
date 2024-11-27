export default function Hero() {
    return (
        <section className="flex flex-col gap-[5rem] px-[20px]">
            <div className="container_1 mt-[20px]">
                <h1 className="name ml-[50px] text-[9rem] text-[--heading] leading-[8rem] font-bold">
                    Truong Minh <br></br>
                    Nhat
                </h1>
            </div>

            <div className="container_2">
                <h2 className="ml-[50px] text-[3.5rem] text-[--heading] leading-[3.5rem] font-semibold">
                    Software <br></br>
                    Engineer
                </h2>
                <span className="location flex flex-col text-[1.5rem] text-[--heading] font-light">
                    Base in <br></br>
                    HoChiMinh .C
                    <span className="font-extralight uppercase">
                        *Available for work
                    </span>
                </span>
            </div>
        </section>
    )
};
