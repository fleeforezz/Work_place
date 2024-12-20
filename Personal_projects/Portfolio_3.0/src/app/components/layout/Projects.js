export default function Projects() {
    return (
        <section id="projects" className="px-[20px] pt-[25px] pb-[175px] bg-[--dark-background]">
            <div className="grid grid-cols-12">
                <div className="relative col-span-6">
                    <h1 className="project-heading text-[9vw] text-[--heading] leading-[9.6rem] font-bold">
                        Selected <br></br>
                        Works \
                    </h1>
                </div>
                <div className="col-span-4 col-start-8 relative flex items-center">
                    <p className="text-[1.2vw]">
                        Here you can explore some of the projects I've worked on, 
                        where I turn ideas into practical, easy-to-use solutions. 
                        These projects demonstrate how I use the latest tools and 
                        techniques to create meaningful results that solve real problems.
                    </p>
                    <p className="absolute bottom-0 right-0 text-[--title] uppercase">
                        (Projects)
                    </p>
                </div>
            </div>

            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </section>
    )
};

// Memoized project card component
const ProjectCard = ({ number, image, title, description, tags, year, link }) => (
    <div className="h-fit flex justify-between mt-[60px] will-change-transform">
        <div className="relative">
            <div className="sticky top-[20px] overflow-hidden">
                <h2 className="text-[20vw] leading-[20rem] text-[#9f9c98] transform-gpu">
                    {number}.
                </h2>
            </div>
        </div>
        <a href={link} target="_blank">
            <img src={image} alt={title} loading="lazy" className="will-change-transform" />
            <div className="mt-[15px]">
                <p className="text-[#a19e9b] text-[1rem]">
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
        </a>
    </div>
);

const projects = [
    {
        number: "01",
        image: "/Bookery.svg",
        title: "Bookery",
        description: "Online Reading & Sell Books",
        tags: ["UI/UX Design", "Back-End Development", "2024"],
        year: "2024",
        link: "https://bookery.fleeforezz.site"
    },
    {
        number: "02",
        image: "/Espresso.svg",
        title: "Espresso",
        description: "E-commerce & Coffee bean shop",
        tags: ["UI/UX Design", "Back-End Development", "2024"],
        year: "2024",
        link: "https://espresso.fleeforezz.site"
    },
    {
        number: "03",
        image: "/Clinic_Booking.svg",
        title: "Clinic Booking",
        description: "Online Clinic Booking & Desktop App",
        tags: ["UI/UX Design", "Back-End Development", "2024"],
        year: "2024"
    },
    {
        number: "04",
        image: "/HomeLab.svg",
        title: "HomeLab",
        description: "Self Hosting, Cloud & Testing Environment",
        tags: ["Design-Infrastructure", "DevOps Engineer", "2021"],
        year: "2021",
        link: "https://homepage.fleeforezz.site"
    }
];