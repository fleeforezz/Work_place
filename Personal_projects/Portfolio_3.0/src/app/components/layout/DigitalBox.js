export default function DigitalBox() {
    return (
        <section id="digital-box" className="px-[20px]">
            <div className="grid grid-cols-12">
                <div className="relative col-span-6">
                    <h1 className="digital-heading text-[9vw] text-[--heading] leading-[9.5rem] font-bold">
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
        </section>
    )
};
