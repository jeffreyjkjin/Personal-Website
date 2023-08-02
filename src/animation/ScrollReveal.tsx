import { AnimationControls, AnimationDefinition, motion, useAnimation } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { ScrollDirection, updateScrollDirection } from "@/animation/ScrollDirection.tsx"

interface ScrollRevealProps {
    children: ReactNode;
    inView: boolean;
    initial?: AnimationDefinition;
    animation?: AnimationDefinition;
}


/*
     DESC: Animates the child elements when it is scrolled into view by the user.
    PARAM: children - The child elements that will be revealed on scroll.
           inView - Boolean indicating whether the element is currently visible or not by the user.
           initial - Sets the initial position of the element.
           animation - Animation that plays when the element is visible.
*/
export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, inView, initial, animation }) => {
    const control: AnimationControls = useAnimation();
    const [direction, setDirection] = useState<ScrollDirection>(ScrollDirection.Down);

    // determine if user is scrolling up or down
    useEffect(() => {
        updateScrollDirection(setDirection);
    }, [direction]);

    useEffect(() => {
        if (inView && direction == "Down") {
            control.start(animation ? animation : {
                y: 0,
                transition: {
                    type: "spring",
                    duration: 2,
                    bounce: 0.3
                },
                opacity: 1
            });
        }
        else if (!inView && direction == "Up") {
            control.start(initial ? initial : {
                y: "40vh",
                opacity: 0
            })
        }
    }, [inView]);

    return (
        <motion.div 
            animate={control}
            >
            {children}
        </motion.div>
    );
};