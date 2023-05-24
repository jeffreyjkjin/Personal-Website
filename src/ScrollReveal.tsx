import { motion, useAnimation } from "framer-motion"
import { ReactNode, useEffect } from "react"

interface ScrollRevealProps {
    children: ReactNode;
    inView: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, inView }) => {
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.2
                },
                opacity: 1
            });
        }
        else {
            animation.start({
                y: "30vh",
                opacity: 0
            });
        }
    }, [inView]);

    return (
        <motion.div animate={animation}>
            {children}
        </motion.div>
    );
}