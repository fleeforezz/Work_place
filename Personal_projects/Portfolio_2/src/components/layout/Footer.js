"use client"
import { HandPointing } from "@phosphor-icons/react"

export default function Footer() {
    return (
        <section className="px-5 pb-3 pt-32">
            <div className="flex justify-between">
                <h1>
                    <span className="font-light text-sm">@2023 </span>
                    Nhat
                </h1>

                <h2>
                    Site designed by Huy and coded by Nhat 🦖
                </h2>

                <a href="#hero" className="font-bold flex gap-2 items-center transition-button hover:-translate-y-2">
                    BACK TO TOP
                    <HandPointing size={26} color="#0a0a0a" />
                </a>
            </div>
        </section>
    )
}