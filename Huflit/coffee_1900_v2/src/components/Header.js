"use client"
import { ShoppingCart } from "@phosphor-icons/react"
import { MapPinLine } from "@phosphor-icons/react"

export default function Header() {
    return (
        <nav className="flex justify-between bg-[#f1ece0] items-center px-12 py-5">
            <div className="flex gap-3 items-center">
                <img src="/coffee.png" className="w-[64px]" />
                <h1 className="text-3xl font-semibold">Coffee 1900</h1>
            </div>

            <ul className="flex gap-10">
                <li>
                    <a href="">Trang chủ</a>
                </li>
                <li>
                    <a href="">Sản Phẩm</a>
                </li>
                <li>
                    <a href="">Về Chúng Tôi</a>
                </li>
                <li>
                    <a href="">Liên Hệ</a>
                </li>
            </ul>

            <div className="flex gap-5">
                <a href="">
                    <ShoppingCart size={24} />
                </a>
                <a href="">
                    <MapPinLine size={24} />
                </a>
            </div>
        </nav>
    )
}