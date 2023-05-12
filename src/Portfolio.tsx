import projectData from "./assets/projects.json"
import { Project, ProjectData } from "./Project.tsx"
import "./styles.css"

export const Portfolio: React.FC = () => {
    const projects: ProjectData[] = projectData;

    return (
        <div className="flex flex-col items-center">
            {projects.map((proj: ProjectData) => {
                return (
                    <div key={proj.title} className="w-full max-w-4xl">
                        <Project {...proj} />
                    </div>
                );
            })}
        </div>
    );
}