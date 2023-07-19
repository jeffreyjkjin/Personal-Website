import { useEffect, useRef, useState } from "react"
import { About } from "@/sections/About.tsx"
import { Contact } from "@/sections/Contact.tsx"
import { Header } from "@/sections/Header.tsx"
import { Portfolio } from "@/sections/Portfolio.tsx"
import "@/styles.css"

/*
    DESC: Displays each section on the website.
*/
export const App: React.FC = () => {
    // logic for navbar buttons
    const [click, setClick] = useState("");

    const about: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const projects: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const contact: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    
    useEffect(() => {
        let section: React.MutableRefObject<HTMLDivElement | null>;
        switch (click) {
            case "about":
                section = about;
                break;
            case "projects":
                section = projects;
                break;
            case "contact":
                section = contact;
                break;
            default:
                return;
        }

        if (section.current) {
            window.scrollTo({
                top: section.current.offsetTop,
                behavior: "smooth"
            });

            setClick("");
        }
    }, [click]);

    return (
        <div className="flex flex-col place-items-center">
            <Header setClick={setClick} />
            <div ref={about} className="flex my-[15vh] lg:my-[35vh] relative z-10">
                <About />
            </div>
            <div ref={projects} className="flex my-[15vh] lg:my-[35vh] relative z-10">
                <Portfolio />
            </div>
            <div ref={contact} className="flex my-[15vh] lg:my-[35vh] relative z-10">
                <Contact />
            </div>
            <p className="font-metropolis text-md my-1">
                Created by Jeffrey Jin, © 2023
            </p>
        </div>
    );
};