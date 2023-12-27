export default function Header() {
    return (
        <main className="flex fixed w-[100%] justify-between items-center px-5 py-3 bg-[#FAFAF9] z-50">
            <div className="flex align-middle">
                <a href="#hero" className="font-bold text-xl">
                    Nhat Truong</a>
            </div>

            <div className="flex gap-5 items-center max-md:hidden">
                <a href="#about" className="about relative">
                    About
                </a>
                <a href="#services" className="service relative">
                    Services
                </a>
                <a href="#projects" className="project relative">
                    Projects
                </a>
                <a href="#contact" className="talk relative px-8 py-3 bg-[#262626] text-white rounded-full">
                    Let's Talk
                </a>
            </div>
        </main>
    )
}