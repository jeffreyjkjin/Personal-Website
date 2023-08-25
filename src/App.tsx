import { useEffect, useRef, useState } from "react"

import { ScrollTopButton } from "@/buttons/ScrollTopButton.tsx"
import { About } from "@/sections/About.tsx"
import { Contact } from "@/sections/Contact.tsx"
import { Header } from "@/sections/Header.tsx"
import { Portfolio } from "@/sections/Portfolio.tsx"
import { SectionCard } from "@/sections/SectionCard.tsx"
import "@/styles.css"

/*
    DESC: Displays each section on the website.
*/
export const App: React.FC = () => {
    // used to grab the visibility of the header and passed scroll to top button
    const [headerInView, setHeaderInView] = useState<boolean>(true);

    // logic for navbar buttons
    const [click, setClick] = useState<string>("");

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
            <Header setClick={setClick} setHeaderInView={setHeaderInView} />
            <ScrollTopButton headerInView ={headerInView} />
            <div ref={about} className="flex my-[15vh] lg:my-[35vh] relative">
                <div className="absolute -left-[5rem]">
                    <SectionCard name={"About"} length={6} />
                </div>
                <About />
            </div>
            <div ref={projects} className="flex my-[15vh] lg:my-[35vh] relative">
                <div className="absolute -left-[5rem]">
                    <SectionCard name={"Portfolio"} length={8} />
                </div>
                <Portfolio />
            </div>
            <div ref={contact} className="flex my-[15vh] lg:my-[35vh] relative">
                <div className="absolute -left-[5rem]">
                    <SectionCard name={"Contact"} length={7.5} />
                </div>
                <Contact />
            </div>
            <p className="font-metropolis text-md my-1">
                Created by Jeffrey Jin, © 2023
            </p>
        </div>
    );
};