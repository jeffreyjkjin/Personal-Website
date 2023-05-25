import { motion } from "framer-motion"
import "./styles.css"
import Typewriter from "typewriter-effect"

export const Navbar: React.FC = () => {
    return (
        <div className="flex flex-col font-metropolis justify-items-start h-screen w-[56rem] place-content-center drop-shadow-lg">
            <h1 className="font-bold text-[5.7rem] leading-none">
                <Typewriter 
                    options={{
                        delay: 100
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hello friends! <br /> My name is Jeffrey.")
                            .start();
                    }}
                    />
            </h1>
            <motion.div 
                className="flex text-lg gap-16 m-2"
                initial={{
                    y: "10vh",
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    type: "spring",
                    duration: 1,
                    bounce: 0.2,
                    delay: 4
                }}
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