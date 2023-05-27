import { AnimationControls, motion, useAnimation } from "framer-motion"
import "./styles.css"
import Typewriter, { TypewriterClass } from "typewriter-effect"

export const Navbar: React.FC = () => {
    const animation: AnimationControls = useAnimation();

    return (
        <div className="flex flex-col font-metropolis justify-items-start h-screen w-[56rem] place-content-center drop-shadow-lg">
            <h1 className="font-bold text-[5.7rem] leading-none">
                <Typewriter 
                    options={{
                        delay: 100
                    }}
                    onInit={(typewriter: TypewriterClass) => {
                        typewriter
                            .typeString("Hello friends! <br /> My name is Jeffrey.")
                            .start()
                            .callFunction(() => {
                                animation.start({
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        duration: 1,
                                        bounce: 0.3
                                    }
                                });
                            });
                    }}
                    />
            </h1>
            <motion.div 
                className="flex text-lg gap-16 m-2"
                initial={{
                    y: "10vh",
                    opacity: 0
                }}
                animate={animation}
                >
                <button>
                    About
                </button>
                <button>
                    Projects
                </button>
                <button>
                    Contact
                </button>
            </motion.div>
        </div>
    );
}