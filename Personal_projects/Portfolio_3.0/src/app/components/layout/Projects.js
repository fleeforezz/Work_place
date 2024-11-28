export default function Projects() {
    return (
        <section>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </section>
    )
};

// Memoized project card component
const ProjectCard = ({ number, image, title, description, tags, year }) => (
    <div className="h-fit flex justify-between mt-[60px] will-change-transform">
        <div className="relative">
            <div className="sticky top-[20px] overflow-hidden">
                <h2 className="text-[20vw] leading-[20rem] text-[#9f9c98] transform-gpu">
                    {number}.
                </h2>
            </div>
        </div>
        <div>
            <img src={image} alt={title} loading="lazy" className="will-change-transform" />
            <div className="mt-[15px]">
                <p className="text-[#a19e9b] text-[1.2rem]">
                    {description}
                </p>
                <div className="flex justify-between items-center">
                    <h3 className="text-[#cfcfc5] text-[3rem] leading-[3rem] font-medium">
                        {title}
                    </h3>
                    <div className="flex gap-[0.5rem]">
                        {tags.map((tag, index) => (
                            <p
                                key={index}
                                className={`px-[10px] py-[5px] border-[1px] border-[#a19e9a] rounded-full ${tag === year ? "text-[#0e0e0c] bg-[#a19e9a]" : "text-[#a19e9a]"
                                    }`}
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const projects = [
    {
        number: "01",
        image: "/Bookery.svg",
        title: "Bookery",
        description: "Online Reading & Sell Books",
        tags: ["Design", "Full-Stack Development", "2024"],
        year: "2024"
    },
    {
        number: "02",
        image: "/Espresso.svg",
        title: "Espresso",
        description: "Online Reading & Sell Books",
        tags: ["Design", "Full-Stack Development", "2024"],
        year: "2024"
    },
    {
        number: "03",
        image: "/Clinic_Booking.svg",
        title: "Clinic Booking",
        description: "Online Reading & Sell Books",
        tags: ["Design", "Full-Stack Development", "2024"],
        year: "2024"
    },
    {
        number: "04",
        image: "/HomeLab.svg",
        title: "HomeLab",
        description: "Online Reading & Sell Books",
        tags: ["Design", "Full-Stack Development", "2024"],
        year: "2024"
    }
];