
export default function Contact() {
    return (
        <section id="contact" className="px-[20px]">
            <div className="p-[50px] border border-[--border]">
                <p className="text-[8vw] text-[--light-foreground] leading-[9rem] font-bold">
                    Interested in
                </p>
                <p className="flex items-center gap-6 text-[8vw] text-[--light-foreground] leading-[9rem] font-bold">
                    working with
                    <img src="/avatar.JPG" className="w-[200px] h-[125px] object-cover rounded-full" /> ?
                </p>
                <p className="text-[8vw] text-[--light-foreground] leading-[9rem] font-bold">
                    Contact now
                </p>

                <div className="flex gap-[1.5rem] py-[50px]">
                    <p className="w-fit px-[20px] py-[5px] rounded-full text-[1.5vw] text-[--light-foreground] font-semibold border border-[--border]">
                        nhattruong.tmn@gmail.com
                    </p>
                    <a href="https://www.linkedin.com/in/nhattruongminh/" className="w-fit px-[20px] py-[5px] rounded-full text-[1.5vw] text-[--light-foreground] font-semibold border border-[--border]">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/tmn_nhat/" className="w-fit px-[20px] py-[5px] rounded-full text-[1.5vw] text-[--light-foreground] font-semibold border border-[--border]">
                        Instagram
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-[1rem] py-[100px]">
                <div className="col-span-5 flex flex-col gap-[1rem]">
                    <h1 className="text-[3vw] text-[--light-foreground] font-bold leading-[4rem]">Menu</h1>
                    <div className="section-seperator"></div>
                    <div className="flex flex-col gap-[0.5rem]">
                        <a href="#home" className="text-[1.2vw] text-[--light-foreground] font-semibold">Home</a>
                        <a href="#services" className="text-[1.2vw] text-[--light-foreground] font-semibold">Services</a>
                        <a href="#digital-box" className="text-[1.2vw] text-[--light-foreground] font-semibold">Digital Box</a>
                        <a href="#projects" className="text-[1.2vw] text-[--light-foreground] font-semibold">Projects</a>
                        <a href="#about" className="text-[1.2vw] text-[--light-foreground] font-semibold">About</a>
                        <a href="#contact" className="text-[1.2vw] text-[--light-foreground] font-semibold">Contact</a>
                    </div>
                </div>

                <div className="col-span-7 flex flex-col gap-[1rem]">
                    <h1 className="text-[3vw] text-[--light-foreground] font-bold leading-[4rem]">Socials</h1>
                    <div className="section-seperator"></div>
                    <div className="flex flex-col gap-[0.5rem]">
                        <a href="https://github.com/fleeforezz" target="_blank" className="text-[1.2vw] text-[--light-foreground] font-semibold">Github</a>
                        <a href="https://gitlab.fleeforezz.site" target="_blank" className="text-[1.2vw] text-[--light-foreground] font-semibold">Gitlab</a>
                        <a href="https://www.linkedin.com/in/nhattruongminh/" target="_blank"  className="text-[1.2vw] text-[--light-foreground] font-semibold">LinkedIn</a>
                        <a href="https://www.instagram.com/tmn_nhat/" target="_blank" className="text-[1.2vw] text-[--light-foreground] font-semibold">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    )
};
