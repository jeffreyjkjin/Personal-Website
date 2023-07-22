import { AnimationControls, motion, useAnimation } from "framer-motion"
import Typewriter, { TypewriterClass } from "typewriter-effect"

import "@/styles.css"

interface TitleProps {
    animateNavbar: () => void;
}

/*
     DESC: Display welcome message to users with a typewriter effect.
    PARAM: animateNavbar - Animates navigational buttons from Navbar.
*/
export const Title: React.FC<TitleProps> = ({ animateNavbar }) => {
    const animation: AnimationControls = useAnimation();

    return (
        <div className="flex font-bold text-[5.7rem] leading-none relative z-20">
            <Typewriter 
            options={{
                delay: 100
            }}
            onInit={(typewriter: TypewriterClass) => {
                typewriter
                .typeString("Hello friends! <br /> My name is Jeffrey.")
                .start()
                .callFunction(() => {
                    animateNavbar();
                    animation.start({
                        x: 0,
                        opacity: 0.75,
                        transition: {
                            type: "spring",
                            duration: 0.5,
                            bounce: 0.2
                        }
                    });
                });
                }}
            />
            <motion.div 
                className="bg-lightblue w-[20rem] h-[4rem] absolute -bottom-[0.5rem] right-[0.1rem] md:right-[22rem] lg:right-[1rem] -z-10"
                initial={{
                    x: "20vw",
                    opacity: 0
                }}
                animate={animation}
                >
            </motion.div>
        </div>
    );
};