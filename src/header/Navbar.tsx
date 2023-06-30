import { motion } from "framer-motion"

import { hover, tap } from "@/animation/Gestures.tsx"
import "@/styles.css"

interface NavbarProps {
    setClick: React.Dispatch<React.SetStateAction<string>>
}

/*
     DESC: Displays buttons that sends the user to different parts of the website.
    PARAM: setClick - A setter from App; used to find out what button was pressed by user in App.
*/
export const Navbar: React.FC<NavbarProps> = ({ setClick }) => {
    return (
        <>
            <motion.a 
                href="#about" 
                onClick={() => { setClick("about") }} 
                whileHover={hover()}
                whileTap={tap()}
                >
                About
            </motion.a>
            <motion.a 
                href="#projects" 
                onClick={() => { setClick("projects") }}
                whileHover={hover()}
                whileTap={tap()}
                >
                Projects
            </motion.a>
            <motion.a 
                href="#contact" 
                onClick={() => { setClick("contact") }}
                whileHover={hover()}
                whileTap={tap()}
                >
                Contact
            </motion.a>
        </>
    );
};