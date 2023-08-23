import { motion } from "framer-motion"
import { ReactElement } from "react"
import { BsGithub, BsLink, BsYoutube } from "react-icons/bs"
import { FaItchIo } from "react-icons/fa"

import { hover, tap } from "@/animation/Gestures.tsx"

interface LinkButtonProps {
    link: string;
}

/*
     DESC: A hyperlinked button that automatically uses a relevant icon with hover and tap 
           animations.
    PARAM: link - A string containing a valid URL.
*/
export const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
    let icon: ReactElement;

    // determine icon
    if (/github/i.test(link)) { icon = <BsGithub />; }
    else if (/youtube/i.test(link)) { icon = <BsYoutube />; }
    else if (/itch/i.test(link)) { icon = <FaItchIo />; }
    else { icon = <BsLink />; }

    return (
        <motion.a
            href={link}
            whileHover={hover()}
            whileTap={tap()}
            >
            {icon}
        </motion.a>
    );
}