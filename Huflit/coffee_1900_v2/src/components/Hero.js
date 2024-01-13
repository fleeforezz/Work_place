"use client"
import { ArrowCircleUpRight } from "@phosphor-icons/react"

export default function Hero() {
    return (
        <main className="bg-[#f1ece0] px-16">
            <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-10 pt-16 pb-24">
                <h2 className="font-semibold col-span-2 text-[5rem] leading-[5rem]">
                    Mastering the flavorful alchemy of <span className="text-[#efae54]">beans</span>
                </h2>
                <div className="flex flex-col max-xl:w-[50%] gap-12">
                    <p className="text-slate-500">
                        Adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud. Dicta sunt explicabo.
                    </p>
                    <a href="" className="flex items-center gap-7">
                        <p className="text-2xl font-semibold">
                            Discover Aromatica
                        </p>
                        <ArrowCircleUpRight size={43} color="#e4594d" weight="fill" />
                    </a>
                </div>
            </div>

            <video src="/Coffee-ad.mkv"loop autoPlay muted></video>

            <div className="flex justify-center py-14">
                <a href="" className="hover:bg-[#e4594d] text-center px-10 transition-all py-20">
                    <img src="/coffee-bag.png"></img>
                    <h4>Organic beans</h4>
                    <p>Our coffee are carefully selected</p>
                </a>

                <span className="px-[1px] bg-gray-300"></span>

                <a href="" className="hover:bg-[#e4594d] text-center px-10 transition-all py-20">
                    <img src="/coffee-bag.png"></img>
                    <h4>Organic beans</h4>
                    <p>Our coffee are carefully selected</p>
                </a>

                <span></span>

                <a href="" className="hover:bg-[#e4594d] text-center px-10 transition-all py-20">
                    <img src="/coffee-bag.png"></img>
                    <h4>Organic beans</h4>
                    <p>Our coffee are carefully selected</p>
                </a>

                <span></span>

                <a href="" className="hover:bg-[#e4594d] text-center px-10 transition-all py-20">
                    <img src="/coffee-bag.png"></img>
                    <h4>Organic beans</h4>
                    <p>Our coffee are carefully selected</p>
                </a>
            </div>
        </main>
    )
}