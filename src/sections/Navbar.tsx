import { AnimationControls, motion, useAnimation } from "framer-motion"
import "@/styles.css"
import Typewriter, { TypewriterClass } from "typewriter-effect"

interface NavbarProps {
    setClick: React.Dispatch<React.SetStateAction<string>>
}

export const Navbar: React.FC<NavbarProps> = ({ setClick }) => {
    const boxAnimation: AnimationControls = useAnimation();
    const navAnimation: AnimationControls = useAnimation();

    return (
        <div className="flex flex-col font-metropolis justify-items-start h-screen w-[56rem] place-content-center drop-shadow-lg">
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
                            navAnimation.start({
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    duration: 1,
                                    bounce: 0.3
                                }
                            });
                            boxAnimation.start({
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
                    className="bg-lightblue w-[20rem] h-[4rem] absolute -bottom-[0.5rem] right-[1rem] -z-10"
                    initial={{
                        x: "20vw",
                        opacity: 0
                    }}
                    animate={boxAnimation}
                    >
                </motion.div>
            </div>
            <motion.div 
                className="flex text-lg gap-16 m-2 relative"
                initial={{
                    y: "10vh",
                    opacity: 0
                }}
                animate={navAnimation}
                >
                <a href="#about" onClick={() => { setClick("about")}}>
                    About
                </a>
                <a href="#projects" onClick={() => { setClick("projects")}}>
                    Projects
                </a>
                <a href="#contact" onClick={() => { setClick("contact")}}>
                    Contact
                </a>
            </motion.div>
        </div>
    );
}