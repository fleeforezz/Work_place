export default function NavigationBar() {
    return (
        <header className="nav-container grid grid-cols-12">
            <h1 className="heading col-span-2 px-[30px] text-center py-[30px] border border-[--border] font-bold text-[1.5vw] text-[--heading]">
                Nhat Truong
            </h1>
            <a href="/" className="home flex items-center justify-center col-span-2 px-[30px] py-[30px] border border-[--border] text-[0.8vw]">
                Home
            </a>
            <a href="#services" className="services flex items-center justify-center col-span-2 px-[30px] py-[30px] border border-[--border] text-[0.8vw]">
                Services
            </a>
            <a href="#projects" className="projects flex items-center justify-center col-span-2 px-[30px] py-[30px] border border-[--border] text-[0.8vw]">
                Projects
            </a>
            <a href="#about" className="about flex items-center justify-center col-span-2 px-[30px] py-[30px] border border-[--border] text-[0.8vw]">
                About
            </a>
            <a href="contact" className="contact flex items-center justify-center col-span-2 px-[30px] py-[30px] border border-[--border] text-[0.8vw]">
                Contact
            </a>
        </header>
    )
};
