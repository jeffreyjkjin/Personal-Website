import { motion } from "framer-motion"
import { MdOutlinePhone, MdMailOutline } from "react-icons/md"
import { useInView } from "react-intersection-observer"

import { hover, tap } from "@/animation/Gestures.tsx"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import "@/styles.css"

/*
    DESC: Displays my contact information with clickable buttons.
*/
export const Contact: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref} className="w-[22rem] md:w-[44rem] lg:w-[56rem] py-[2rem]">
            <ScrollReveal inView={inView}>
                <div className="flex flex-col font-metropolis place-items-center drop-shadow-lg gap-6">
                    <p className="font-bold text-6xl md:text-7xl lg:text-8xl">
                        Let's Chat!
                    </p>
                    <div className="flex flex-col md:flex-row text-white text-3xl lg:space-x-10 w-[22rem] md:w-[44rem] lg:w-[46rem] gap-6 lg:gap-0 place-items-center">
                        <motion.div 
                            className="flex bg-blue place-content-center gap-2 p-6 w-full md:w-1/2"
                            whileHover={hover(1.1)}
                            whileTap={tap()}
                            >
                                <MdOutlinePhone />
                                <a href="tel:778-938-6318">
                                    (778) 938-6318
                                </a>
                        </motion.div>
                        <motion.div 
                            className="flex bg-blue place-content-center gap-2 p-6 w-full md:w-1/2"
                            whileHover={hover(1.1)}
                            whileTap={tap()}                            
                            >
                                <MdMailOutline /> 
                                <a href="mailto:jeffrey_jin@sfu.ca">
                                    jeffrey_jin@sfu.ca
                                </a>
                        </motion.div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};