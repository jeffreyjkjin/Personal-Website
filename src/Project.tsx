import { BsGithub, BsYoutube } from "react-icons/Bs"
import { MdExpandLess, MdExpandMore } from "react-icons/Md"
import { useState } from "react"
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

    return (
        <div className="flex flex-col font-metropolis">
            <div className="flex flex-grow text-2xl p-6 bg-grey">
                <div className="font-bold grow">
                    {project.title}
                </div>
                <div className="flex flex-row-reverse justify-end gap-4">
                    <button onClick={() => setOpen(!open)}>
                        {!open ? <MdExpandMore />: <MdExpandLess />}
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
            {open && (
                <div className="flex p-6 bg-grey gap-6">
                    <div className="flex flex-col w-1/2">
                        <img src={project.image} alt={`${project.title} Image`} />
                        <div className="flex flex-wrap justify-center gap-2 text-lg text-white">
                            {project.tools.map((tool: string) => {
                                return (
                                    <div key={tool} className="bg-red px-2 py-1 my-2">
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
            )}
        </div>
    );
}