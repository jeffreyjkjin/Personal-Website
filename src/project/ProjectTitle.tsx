import { ProjectData } from "@/project/ProjectData.tsx"
import { BsGithub, BsYoutube } from "react-icons/Bs"
import { MdExpandMore } from "react-icons/Md"
import "@/styles.css"

interface ProjectTitleProps {
    project: ProjectData;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectTitle: React.FC<ProjectTitleProps> = ({ project, open, setOpen }) => {
    return (
        <div className="flex flex-grow font-metropolis text-2xl p-6 bg-grey">
            <div className="font-bold grow">
                {project.title}
            </div>
            <div className="flex flex-row-reverse justify-end gap-4">
                <button 
                    className={`transition-all ${open ? "rotate-180" : "rotate-0"}`}
                    onClick={() => {
                        setOpen(!open)
                    }}
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
    );
}