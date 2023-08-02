import { useInView } from "react-intersection-observer"

import "@/styles.css"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx";

interface SectionCardProps {
    name: string;
    length: number;
}

/*
     DESC: Displays a card that indicates the current section the user is on.
    PARAM: name - The name of the section.
           length - The length of the highlight box.
*/
export const SectionCard: React.FC<SectionCardProps> = ({ name, length }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref}>
            <div className="font-metropolis font-bold text-3xl drop-shadow-lg invisible lg:visible">
                <ScrollReveal 
                    inView={inView} 
                    initial={{
                        y: "40vh", 
                        opacity: 0
                    }}
                    >
                    <div className="flex flex-row-reverse rotate-180 [writing-mode:vertical-rl] mx-6 gap-6">
                        <p className="z-20">{name}</p>
                        <div className="flex relative">
                            <p className="-tracking-[0.2rem] relative">——————</p>
                            <div className={`bg-lightblue absolute w-[1.5rem] h-[${length}rem] right-[0.9rem] top-[9.25rem] -z-10`}></div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
