import { AnimationControls, motion, useAnimation } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

interface ScrollRevealProps {
    children: ReactNode;
    inView: boolean;
    duration?: number;
}

enum ScrollDirection {
    Up = "Up",
    Down = "Down"
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, inView, duration }) => {
    const animation: AnimationControls = useAnimation();
    const [direction, setDirection] = useState<ScrollDirection>(ScrollDirection.Down);

    // get scroll direction
    useEffect(() => {
        let prevScrollY: number = window.scrollY;
        let check: boolean = false;
    
        const checkDirection = () => {
            check = false;

            if (Math.abs(window.scrollY - prevScrollY) < 0) {
                return;
            }

            setDirection(window.scrollY > prevScrollY ? ScrollDirection.Down: ScrollDirection.Up);
            prevScrollY = window.scrollY > 0 ? window.scrollY : 0;
        };
    
        const onScroll = () => {
            if (!check) {
                window.requestAnimationFrame(checkDirection);
                check = true;
            }
        };
    
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll)
        };
    }, [direction]);

    // animate children when in view
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