import { motion } from "framer-motion"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { useInView } from "react-intersection-observer"

import { hover, tap } from "@/animation/Gestures.tsx"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import about from "@/assets/about.json"
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
        <section ref={ref} className="w-[22rem] md:w-[44rem] lg:w-[56rem]">
            <ScrollReveal inView={inView}>
                <div className="flex flex-col-reverse md:flex-row lg:space-x-10 drop-shadow-lg gap-6 lg:gap-0">
                    <div className="flex flex-col font-metropolis bg-blue text-white text-lg md:w-[47.5%]">
                        <p className="p-6 h-3/4 text-justify">
                            {about}
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
                    <img src={picture} alt="me :)" className="md:w-[47.5%]" />
                </div>
            </ScrollReveal>
        </section>
    );
};