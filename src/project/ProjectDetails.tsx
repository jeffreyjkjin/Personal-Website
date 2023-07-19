import { ProjectData } from "@/project/ProjectData.tsx"
import "@/styles.css"

interface ProjectDetailsProps {
    project: ProjectData;
    open: boolean;
}

/*
     DESC: Displays the details, images, frameworks and tools of a project.
    PARAM: project - The project that will be displayed.
           open - A boolean indicating whether the accordion is open or not.
*/
export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, open }) => {
    return (
        <div className={`transition-all duration-500 ${open ? "max-h-[100rem] overflow-clip" : "max-h-0 overflow-hidden"}`}>
            <div className="flex flex-col lg:flex-row bg-grey gap-6 p-6">
                <div className="flex flex-col lg:w-1/2">
                    {project.image && <img src={project.image} alt={`${project.title} Image`} />}
                    <div className={`flex flex-wrap justify-center gap-2 text-lg text-white ${project.image && "my-2"}`}>
                        {project.tools.map((tool: string): JSX.Element => {
                            return (
                                <div key={tool} className={`bg-red px-2 py-1`}>
                                    {tool}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/2 text-xl text-white gap-4">
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
                                {project.soWhat.map((item: string): JSX.Element => {
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
    );
};