export default function Hero() {
    return (
        <section>
            <img src="/hero-img.jpg" className="absolute w-[700px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />
            <div className="flex flex-col gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[8.5rem] text-[#262626] font-extrabold">
                <h1>HEY, I'M NHAT</h1>
                <h1 class="outline-text">HEY, I'M NHAT</h1>
                <h1>HEY, I'M NHAT</h1>
            </div>
        </section>
    )
}