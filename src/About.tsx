import picture from "./assets/picture.jpg"
import { BsGithub, BsLinkedin } from "react-icons/Bs"
import { useInView } from "react-intersection-observer"
import { ScrollReveal } from "./ScrollReveal.tsx"
import "./styles.css"

export const About: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true
    });

    return (
        <section ref={ref} className="w-[56rem] my-[35vh]">
            <ScrollReveal inView={inView}>
                <div className="flex space-x-10 drop-shadow-lg">
                    <div className="flex flex-col font-metropolis bg-blue text-white text-lg w-1/2">
                        <p className="p-6 h-3/4 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex flex-col place-content-end p-6 h-1/4 text-xl">
                            <div className="flex items-center gap-2">
                                <BsLinkedin /> 
                                <a href="https://www.linkedin.com/in/jeffreyjkjin">jeffreyjkjin</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <BsGithub /> 
                                <a href="https://www.github.com/jeffreyjkjin">jeffreyjkjin</a>
                            </div>
                        </div>
                    </div>
                    <img src={picture} alt="me :)" className="w-1/2" />
                </div>
            </ScrollReveal>
        </section>
    );
}