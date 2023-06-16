import { motion } from "framer-motion"
import { MdOutlinePhone, MdMailOutline } from "react-icons/Md"
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
        <section ref={ref} className="w-[56rem]">
            <ScrollReveal inView={inView}>
                <div className="flex flex-col font-metropolis place-items-center gap-6 drop-shadow-lg">
                    <p className="font-bold text-8xl">
                        Let's Chat!
                    </p>
                    <div className="flex text-white text-3xl space-x-10 w-[46rem]">
                        <motion.div 
                            className="flex bg-blue place-content-center gap-2 p-6 w-1/2"
                            whileHover={hover(1.1)}
                            whileTap={tap()}
                            >
                                <MdOutlinePhone />
                                <a href="tel:778-938-6318">
                                    (778) 938-6318
                                </a>
                        </motion.div>
                        <motion.div 
                            className="flex bg-blue place-content-center gap-2 p-6 w-1/2"
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
}