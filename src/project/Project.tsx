import { ProjectData } from "@/project/ProjectData.tsx"
import { ProjectDetails } from "@/project/ProjectDetails.tsx"
import { ProjectTitle } from "@/project/ProjectTitle.tsx"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import "@/styles.css"

interface ProjectProps {
    project: ProjectData;
    portfolioView: boolean;
}

/*
     DESC: An accordion that contains the details for a single project.
    PARAM: project - An individual project.
           portfolioView - Indicates whether the parent (portfolio) is visible by the user.
*/
export const Project: React.FC<ProjectProps> = ({ project, portfolioView }) => {
    const [open, setOpen] = useState<boolean>(false);


    // checks if current project and portfolio section are both in view
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    const [view, setView] = useState<boolean>(true);

    useEffect(() => {
        if (inView && portfolioView) setView(true);
        else if (!inView && !portfolioView) setView(false);
    }, [inView, portfolioView]);

    return (
        <section ref={ref}>
            <ScrollReveal 
                inView={view} 
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