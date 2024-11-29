import { useEffect } from "react";

export default function ChangeBackground() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

            const body = document.getElementsByTagName("body")[0];

            if (body) {
                // Change color when scroll to About Me section
                if (scrollY > totalHeight * 0.8) {
                    body.style.backgroundColor = '#e8e8e3';
                } else {
                    body.style.backgroundColor = '#0e0e0c';
                }
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
};
