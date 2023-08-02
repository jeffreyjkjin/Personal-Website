import { ProjectData } from "@/project/ProjectData.tsx"
import { ProjectDetails } from "@/project/ProjectDetails.tsx"
import { ProjectTitle } from "@/project/ProjectTitle.tsx"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import "@/styles.css"

/*
     DESC: An accordion that contains the details for a single project.
    PARAM: project - An individual project.
*/
export const Project: React.FC<ProjectData> = (project: ProjectData) => {
    const [open, setOpen] = useState<boolean>(false);

    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref}>
            <ScrollReveal 
                inView={inView} 
                animation={{
                    y: 0, 
                    transition: { 
                        type: "spring", 
                        duration: 1, 
                        bounce: 0.3 
                    }, 
                    opacity: 1
                }}
                >
                <div className="flex flex-col">
                    <ProjectTitle project={project} open={open} setOpen={setOpen} />
                    <ProjectDetails project={project} open={open} />
                </div>
            </ScrollReveal>
        </section>
    );
};