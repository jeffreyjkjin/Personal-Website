import { AnimationControls, motion, useAnimation } from "framer-motion"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { Navbar } from "@/header/Navbar.tsx"
import { Title } from "@/header/Title.tsx"
import "@/styles.css"

export const headerInView = atom<boolean>(true);

/*
     DESC: Displays welcome message and navigation buttons.
*/
export const Header: React.FC = () => {
    const [, setInView] = useAtom(headerInView);

    const [ref, inView] = useInView({
        threshold: 0,
        initialInView: true        
    });

    // used by ScrollTopButton
    useEffect(() => {
        setInView(inView);
    }, [inView]);

    const animation: AnimationControls = useAnimation();

    return (
        <section ref={ref}>
            <div className="flex flex-col font-metropolis justify-items-center lg:justify-items-start h-screen w-[22rem] md:w-[44rem] lg:w-[56rem] place-content-center drop-shadow-lg">
                <Title animateNavbar={() => {
                    animation.start({
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            duration: 1,
                            bounce: 0.3
                        }
                    }); 
                }} />
                <motion.div 
                    className="flex text-lg gap-16 m-2 relative"
                    initial={{
                        y: "10vh",
                        opacity: 0
                    }}
                    animate={animation}
                    >
                    <Navbar />
                </motion.div>
            </div>
        </section>
    );
};