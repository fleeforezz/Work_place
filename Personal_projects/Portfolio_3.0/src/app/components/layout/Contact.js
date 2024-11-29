
export default function Contact() {
    return (
        <section id="contact" className="px-[20px]">
            <div className="p-[20px] border border-[--border]">
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

                <div className="flex gap-[2rem] py-[50px]">
                    <p className="w-fit px-[20px] py-[5px] rounded-full text-[1.5vw] text-[--light-foreground] font-semibold border border-[--border]">
                        nhattruong.tmn@gmail.com
                    </p>
                    <a href="" className="w-fit px-[20px] py-[5px] rounded-full text-[1.5vw] text-[--light-foreground] font-semibold border border-[--border]">
                        LinkedIn
                    </a>
                    <a href="" className="w-fit px-[20px] py-[5px] rounded-full text-[1.5vw] text-[--light-foreground] font-semibold border border-[--border]">
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    )
};
