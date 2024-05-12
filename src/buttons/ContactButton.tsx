import { motion } from "framer-motion"
import { ReactElement } from "react"
import { BsEnvelope, BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs"

import { hover, tap } from "@/animation/Gestures.tsx"

interface ContactButtonProps {
    link: string;
}

/*
     DESC: Generates an animated, hyperlinked button that leads the user the site corresponding
           with its icon. 
    PARAM: link - A string containing a valid link.
*/
export const ContactButton: React.FC<ContactButtonProps> = ({ link }) => {
    let icon: ReactElement;
    
    // determine icon
    if (/linkedin/i.test(link)) icon = <BsLinkedin />;
    else if (/github/i.test(link)) icon = <BsGithub />;
    else if (/tel/i.test(link)) icon = <BsTelephone />;
    else if (/mailto/i.test(link)) icon = <BsEnvelope />;
    else icon = <></>;

    return (
        <motion.a
            className="bg-blue p-3 lg:p-4 rounded-full text-3xl lg:text-4xl text-white"
            whileHover={hover()}
            whileTap={tap()}
            href={link}
            >
            {icon}
        </motion.a>
    );    
}