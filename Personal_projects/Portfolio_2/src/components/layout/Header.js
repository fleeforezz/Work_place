export default function Header() {
    return (
        <main className="flex fixed w-[100%] justify-between items-center px-5 py-3 border bg-[#FAFAF9] z-50">
            <div className="flex align-middle">
                <a href="" className="font-bold text-xl">
                    Nhat Truong</a>
            </div>

            <div className="flex gap-5 items-center max-md:hidden">
                <a href="">
                    About
                </a>
                <a href="">
                    Services
                </a>
                <a href="">
                    Products
                </a>
                <a href="" className="px-8 py-3 bg-[#262626] text-white rounded-full">
                    Let's Talk
                </a>
            </div>
        </main>
    )
}