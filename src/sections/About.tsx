import { motion } from "framer-motion"
import { BsGithub, BsLinkedin } from "react-icons/Bs"
import { useInView } from "react-intersection-observer"

import { hover, tap } from "@/animation/Gestures.tsx"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import picture from "/picture.jpg"
import "@/styles.css"

/*
    DESC: Displays description about me and my photo along with some links.
*/
export const About: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref} className="w-[22rem] lg:w-[56rem]">
            <ScrollReveal inView={inView}>
                <div className="flex flex-col-reverse lg:flex-row lg:space-x-10 drop-shadow-lg gap-6 lg:gap-0">
                    <div className="flex flex-col font-metropolis bg-blue text-white text-lg lg:w-1/2">
                        <p className="p-6 h-3/4 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex flex-col place-content-end p-6 h-1/4 text-xl gap-y-2">
                            <div className="flex">
                                <motion.a
                                    className="flex items-center gap-2"
                                    href="https://www.linkedin.com/in/jeffreyjkjin"
                                    whileHover={hover(1.1)}
                                    whileTap={tap()}
                                    >
                                    <BsLinkedin /> 
                                    jeffreyjkjin
                                </motion.a>
                            </div>
                            <div className="flex" >
                                <motion.a
                                    className="flex items-center gap-2"
                                    href="https://www.github.com/jeffreyjkjin"
                                    whileHover={hover(1.1)}
                                    whileTap={tap()}
                                    >
                                    <BsGithub /> 
                                    jeffreyjkjin
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <img src={picture} alt="me :)" className="lg:w-1/2" />
                </div>
            </ScrollReveal>
        </section>
    );
};