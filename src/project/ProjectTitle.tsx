import { AnimationControls, motion, useAnimation } from "framer-motion"
import { ReactElement } from "react"
import { MdExpandMore } from "react-icons/md"

import { hover, tap } from "@/animation/Gestures.tsx"
import { LinkButton } from "@/buttons/LinkButton.tsx"
import { ProjectData } from "@/project/ProjectData.tsx"
import "@/styles.css"

interface ProjectTitleProps {
    project: ProjectData;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/*
     DESC: Displays project title and some links about it.
    PARAM: project - Project that will be displayed in this element.
           open - Boolean indicating whether the accordion is currently opened.
           setOpen - A setter from Project; used to tell Project if the accordion is open or not.
*/
export const ProjectTitle: React.FC<ProjectTitleProps> = ({ project, open, setOpen }) => {
    const animation: AnimationControls = useAnimation();

    return (
        <div className="flex flex-grow font-metropolis text-2xl p-6 bg-grey">
            <div className="font-bold grow">
                {project.title}
            </div>
            <div className="flex flex-row-reverse justify-end gap-4 place-items-center">
                <motion.button 
                    onClick={() => {
                        setOpen(!open)
                        animation.start({
                            rotate: open ? 0 : 180
                        });
                    }}
                    whileHover={hover()}
                    whileTap={tap()}
                    animate={animation}
                    >
                    <MdExpandMore />
                </motion.button>
                {project.links && project.links.map((link: string): ReactElement => {
                    return (
                        <LinkButton link={link} key={link} />   
                    );
                })}
            </div>
        </div>
    );
}