import { AnimationControls, AnimationDefinition, motion, useAnimation } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { ScrollDirection, updateScrollDirection } from "@/animation/ScrollDirection.tsx"

interface ScrollRevealProps {
    children: ReactNode;
    inView: boolean;
    initial?: AnimationDefinition;
    animation?: AnimationDefinition;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, inView, initial, animation }) => {
    const control: AnimationControls = useAnimation();
    const [direction, setDirection] = useState<ScrollDirection>(ScrollDirection.Down);

    useEffect(() => {
        updateScrollDirection(setDirection);
    }, [direction]);

    useEffect(() => {
        if (inView && direction == "Down") {
            control.start(animation ? animation : {
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1,
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
}