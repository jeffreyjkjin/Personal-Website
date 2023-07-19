import { AnimationControls, motion, useAnimation } from "framer-motion"

import { Navbar } from "@/header/Navbar.tsx"
import { Title } from "@/header/Title.tsx"
import "@/styles.css"

interface HeaderProps {
    setClick: React.Dispatch<React.SetStateAction<string>>
}

/*
     DESC: Displays welcome message and navigation buttons.
    PARAM: setClick - A setter from App; used to find out what button was pressed by user in App.
*/
export const Header: React.FC<HeaderProps> = ({ setClick }) => {
    const animation: AnimationControls = useAnimation();

    /*
        DESC: Animates navigational buttons from Navbar.
    */
    const animateNavbar = () => {
        animation.start({
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.3   
            }         
        });
    }

    return (
        <div className="flex flex-col font-metropolis justify-items-center lg:justify-items-start h-screen w-[22rem] lg:w-[56rem] place-content-center drop-shadow-lg">
            <Title animateNavbar={animateNavbar} />
            <motion.div 
                className="flex text-lg gap-16 m-2 relative"
                initial={{
                    y: "10vh",
                    opacity: 0
                }}
                animate={animation}
                >
                <Navbar setClick={setClick} />
            </motion.div>
        </div>
    );
}