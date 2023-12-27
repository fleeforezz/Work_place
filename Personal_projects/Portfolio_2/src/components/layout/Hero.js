export default function Hero() {
    return (
        <section id="hero" className="py-20 max-md:py-12">
            <img src="/hero-img.jpg" className="absolute w-[45%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md -z-10" />
            {/* <div className="flex flex-col gap-36 text-[8.5rem] text-[#262626] font-extrabold">
                <h1>HEY, I'M NHAT</h1>
                <h1 class="outline-text">HEY, I'M NHAT</h1>
                <h1>HEY, I'M NHAT</h1>
            </div> */}

            <h1 className="text-[10vw] text-[#262626] font-extrabold text-center">
                HEY, I'M NHAT
            </h1>
            <h1 class="outline-text text-center">
                HEY, I'M NHAT
            </h1>
            <h1 className="text-[10vw] text-[#262626] font-extrabold text-center text-balance">
                HEY, I'M NHAT
            </h1>
        </section>
    )
}