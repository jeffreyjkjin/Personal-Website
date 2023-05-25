import projectData from "./assets/projects.json"
import { Project, ProjectData } from "./Project.tsx"
import "./styles.css"

export const Portfolio: React.FC = () => {
    const projects: ProjectData[] = projectData;

    return (
        <div className="flex my-[40vh]">
            <div className="flex flex-grow flex-col items-center w-[56rem] gap-10 drop-shadow-lg">
                {projects.map((proj: ProjectData) => {
                    return (
                        <div key={proj.title} className="w-full">
                            <Project {...proj} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}