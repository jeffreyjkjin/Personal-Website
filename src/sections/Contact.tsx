import { motion } from "framer-motion"
import { MdOutlinePhone, MdMailOutline } from "react-icons/md"
import { useInView } from "react-intersection-observer"

import { hover, tap } from "@/animation/Gestures.tsx"
import { ScrollReveal } from "@/animation/ScrollReveal.tsx"
import { ContactButton } from "@/buttons/ContactButton.tsx"
import "@/styles.css"

const links: string[] = [
    "https://www.linkedin.com/in/jeffreyjkjin",
    "https://www.github.com/jeffreyjkjin",
    "mailto:jeffrey_jin@sfu.ca",
    "tel:778-938-6318"
];

/*
    DESC: Displays contact information with clickable buttons.
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
                        {links.map((link: string) => {
                            return (
                                <ContactButton key={link} link={link} />
                            );
                        })}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};