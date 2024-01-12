import { motion } from "framer-motion"
import { useAtom } from "jotai"

import { navbarOption } from "@/App.tsx"
import { hover, tap } from "@/animation/Gestures.tsx"
import "@/styles.css"

/*
     DESC: Displays buttons that sends the user to different parts of the website.
*/
export const Navbar: React.FC = () => {
    const [, setOption] = useAtom(navbarOption);

    return (
        <>
            <motion.a 
                href="#about" 
                onClick={() => setOption(0)} 
                whileHover={hover()}
                whileTap={tap()}
                >
                About
            </motion.a>
            <motion.a 
                href="#projects" 
                onClick={() => setOption(1)}
                whileHover={hover()}
                whileTap={tap()}
                >
                Projects
            </motion.a>
            <motion.a 
                href="#contact" 
                onClick={() => setOption(2)}
                whileHover={hover()}
                whileTap={tap()}
                >
                Contact
            </motion.a>
        </>
    );
};