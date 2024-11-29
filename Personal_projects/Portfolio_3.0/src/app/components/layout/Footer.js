import Image from "next/image";

export default function Footer() {
    return (
        <section className="grid grid-cols-12">
            <div className="relative col-span-10 border border-[--border]">
                <h1 className="footer text-[4vw] text-[--light-foreground] font-bold p-[20px]">
                    2024 <br></br>
                    All right rerserved
                </h1>
            </div>
            <a href="/" className="flex justify-center p-[50px] col-span-2 border border-[--border]">
                <Image src={"/arrow-up.svg"} width={40} height={40} alt="arrow-up" className="" />
            </a>
        </section>
    )
};
