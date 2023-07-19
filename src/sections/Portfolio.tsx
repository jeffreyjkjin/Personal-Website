import data from "@/assets/projects.json"
import { Project } from "@/project/Project.tsx"
import { ProjectData } from "@/project/ProjectData.tsx"
import "@/styles.css"

/*
    DESC: Displays all projects from projects.json.
*/
export const Portfolio: React.FC = () => {
    const projects: ProjectData[] = data;

    return (
        <div className="flex">
            <div className="flex flex-grow flex-col items-center w-[22rem] lg:w-[56rem] gap-10 drop-shadow-lg">
                {projects.map((proj: ProjectData): JSX.Element => {
                    return (
                        <div key={proj.title} className="w-full">
                            <Project {...proj} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};