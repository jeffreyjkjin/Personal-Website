import { atom, useAtom } from "jotai"
import { useEffect, useRef } from "react"

import { BGParticles } from "@/animation/BGParticles.tsx"
import { ScrollTopButton } from "@/buttons/ScrollTopButton.tsx"
import { About } from "@/sections/About.tsx"
import { Contact } from "@/sections/Contact.tsx"
import { Header } from "@/sections/Header.tsx"
import { Portfolio } from "@/sections/Portfolio.tsx"
import { SectionCard } from "@/sections/SectionCard.tsx"
import "@/styles.css"

export const navbarOption = atom<number>(NaN);

/*
    DESC: Displays each section on the website.
*/
export const App: React.FC = () => {
    const [option, setOption] = useAtom(navbarOption);
    
    const options: React.MutableRefObject<HTMLDivElement | null>[] = Array.from(
        { length: 3 },
        () => useRef(null)
        );
        
    // logic for navbar
    useEffect(() => {
        if (!isNaN(option)) {
            window.scrollTo({
                top: options[option].current?.offsetTop,
                behavior: "smooth"
            });

            setOption(NaN);
        }
    }, [option]);

    return (
        <>
            <BGParticles />
            <div className="flex flex-col place-items-center">
                <Header />
                <ScrollTopButton />
                <div ref={options[0]} className="flex my-[15vh] lg:my-[35vh] relative">
                    <div className="absolute -left-[5rem]">
                        <SectionCard name={"About"} length={6} />
                    </div>
                    <About />
                </div>
                <div ref={options[1]} className="flex my-[15vh] lg:my-[35vh] relative">
                    <div className="absolute -left-[5rem]">
                        <SectionCard name={"Portfolio"} length={8} />
                    </div>
                    <Portfolio />
                </div>
                <div ref={options[2]} className="flex my-[15vh] lg:my-[35vh] relative">
                    <div className="absolute -left-[5rem]">
                        <SectionCard name={"Contact"} length={7.5} />
                    </div>
                    <Contact />
                </div>
                <p className="font-metropolis text-md my-1">
                    Created by Jeffrey Jin © {(new Date()).getFullYear()}
                </p>
            </div>
        </>
    );
};