import data from "@/assets/projects.json"
import { Project } from "@/project/Project.tsx"
import { ProjectData } from "@/project/ProjectData.tsx"
import "@/styles.css"

import { useInView } from "react-intersection-observer"

/*
    DESC: Displays all projects from projects.json.
*/
export const Portfolio: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        initialInView: true
    })

    const projects: ProjectData[] = data;

    return (
        <section ref={ref} className="flex">
            <div className="flex flex-grow flex-col items-center w-[22rem] md:w-[44rem] lg:w-[56rem] gap-10 drop-shadow-lg">
                {projects.map((proj: ProjectData): JSX.Element => {
                    return (
                        <div key={proj.title} className="w-full">
                            <Project project={proj} portfolioView={inView} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};