import { ReactElement } from "react"
import { useInView } from "react-intersection-observer"

import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import about from "@/assets/about.json"
import picture from "/picture.jpg"
import "@/styles.css"

/*
    DESC: Displays description about me and my photo along with some links.
*/
export const About: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref} className="w-[22rem] md:w-[44rem] lg:w-[56rem]">
            <ScrollReveal inView={inView}>
                <div className="flex flex-col-reverse md:flex-row drop-shadow-lg gap-6 lg:gap-0 justify-between">
                    <div className="flex flex-col font-metropolis bg-blue text-white md:text-sm lg:text-lg md:w-[48%] place-content-center">
                        <ul className="p-6 text-justify space-y-2">
                            {about.map((line: string): ReactElement => {
                                return (
                                    <li key={line}>
                                        {line}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <img src={picture} alt="me :)" className="md:w-[48%]" />
                </div>
            </ScrollReveal>
        </section>
    );
};