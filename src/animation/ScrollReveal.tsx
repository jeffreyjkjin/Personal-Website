import { AnimationControls, motion, useAnimation } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { ScrollDirection, updateScrollDirection } from "@/animation/ScrollDirection.tsx"

interface ScrollRevealProps {
    children: ReactNode;
    inView: boolean;
    duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, inView, duration }) => {
    const animation: AnimationControls = useAnimation();
    const [direction, setDirection] = useState<ScrollDirection>(ScrollDirection.Down);

    useEffect(() => {
        updateScrollDirection(setDirection);
    }, [direction]);

    useEffect(() => {
        if (inView && direction == "Down") {
            animation.start({
                y: 0,
                transition: {
                    type: "spring",
                    duration: duration ? duration : 1,
                    bounce: 0.3
                },
                opacity: 1
            });
        }
        else if (!inView && direction == "Up") {
            animation.start({
                y: "40vh",
                opacity: 0,
            });
        }
    }, [inView]);

    return (
        <motion.div 
            initial={{
                y: "40vh",
                opacity: 0
            }}
            animate={animation}
            >
            {children}
        </motion.div>
    );
}