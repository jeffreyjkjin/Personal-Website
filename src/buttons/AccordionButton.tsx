import { AnimationControls, motion, useAnimation } from "framer-motion"
import { MdExpandMore } from "react-icons/md"

import { hover, tap } from "@/animation/Gestures.tsx"

interface AccordionButton {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/*
     DESC: A button that is used to open the accordion; spins 180 degrees when opened.
    PARAM: open - Boolean indicating whether the accordion is currently opened.
           setOpen - A setter from Project; used to tell Project if the accordion is open or not.
*/
export const AccordionButton: React.FC<AccordionButton> = ({ open, setOpen }) => {
    const animation: AnimationControls = useAnimation();

    return (
        <motion.button 
            onClick={() => {
                setOpen(!open)
                animation.start({
                    rotate: open ? 0 : 180,
                    transition: {
                        duration: open ? 0.6 : 0.3
                    }
                });
            }}
            whileHover={hover()}
            whileTap={tap()}
            animate={animation}
            >
            <MdExpandMore />
        </motion.button>
    );
}