import { useState } from "react"
import { BsGithub, BsYoutube } from "react-icons/Bs"
import { MdExpandMore } from "react-icons/Md"
import { useInView } from "react-intersection-observer"
import { ScrollReveal } from "./ScrollReveal.tsx"
import "./styles.css"

export interface ProjectData {
    title: string; 
    github?: string;
    youtube?: string; 
    image: string;
    tools: string[];   
    what: string;                
    soWhat: string[];
}

export const Project: React.FC<ProjectData> = (project: ProjectData) => {
    const [open, setOpen] = useState<boolean>(false);
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref}>
            <ScrollReveal inView={inView} duration={0.5}>
                <div className="flex flex-col font-metropolis">
                    <div className="flex flex-grow text-2xl p-6 bg-grey">
                        <div className="font-bold grow">
                            {project.title}
                        </div>
                        <div className="flex flex-row-reverse justify-end gap-4">
                            <button 
                                className={`transition-all ${open ? "rotate-180" : "rotate-0"}`}
                                onClick={() => setOpen(!open)}
                                >
                                <MdExpandMore />
                            </button>
                            {project.github && (
                                <a href={project.github}>
                                    <BsGithub />
                                </a>
                            )}
                            {project.youtube && (
                                <a href={project.youtube}>
                                    <BsYoutube />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className={`transition-all duration-500 ${open ? "max-h-[50rem] overflow-clip" : "max-h-0 overflow-hidden"}`}>
                        <div className="flex bg-grey gap-6 p-6">
                            <div className="flex flex-col w-1/2">
                                {project.image && <img src={project.image} alt={`${project.title} Image`} />}
                                <div className={`flex flex-wrap justify-center gap-2 text-lg text-white ${project.image && "my-2"}`}>
                                    {project.tools.map((tool: string) => {
                                        return (
                                            <div key={tool} className={`bg-red px-2 py-1`}>
                                                {tool}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2 text-xl text-white gap-4">
                                <div className="flex flex-col bg-blue py-6">
                                    <p className="font-bold text-center">
                                        The What
                                    </p>
                                    <p className="text-justify text-lg px-6">
                                        {project.what}
                                    </p>
                                </div>
                                <div className="bg-blue py-6">
                                    <p className="font-bold text-center">
                                        The So What
                                    </p>
                                    <div className="text-justify text-lg px-6">
                                        <ul className="list-inside list-disc">
                                            {project.soWhat.map((item: string) => {
                                                return (
                                                    <li key={item}>
                                                        {item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}