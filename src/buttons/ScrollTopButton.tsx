import { AnimationControls, motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { MdOutlineArrowUpward } from "react-icons/md"

import { hover, tap } from "@/animation/Gestures.tsx"
import "@/styles.css"

interface ScrollTopButtonProps {
    headerInView: boolean;
}

/*
     DESC: A button that brings the user back to the top of the page.
    PARAM: headerInView - Boolean that indicates whether the header is visible.
*/
export const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ headerInView }) => {
    const animation: AnimationControls = useAnimation();

    // show button when header is not visible
    useEffect(() => {
        animation.start({
            y: !headerInView ? 0 : "10vh",
            opacity: !headerInView ? 1 : 0,
            transition: {
                type: "spring",
                bounce: 0.3
            }
        });
    }, [headerInView])

    return (
        <motion.button
            className="bg-blue p-3 rounded-full text-2xl text-white fixed bottom-[4rem] right-[4rem] invisible lg:visible"
            whileHover={hover()}
            whileTap={tap()}
            initial={{
                y: "10vh",
                opacity: 0
            }}
            animate={animation}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}
            >
            <MdOutlineArrowUpward />
        </motion.button>
    );
};