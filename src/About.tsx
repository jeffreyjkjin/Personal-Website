import { BsGithub, BsLinkedin } from "react-icons/Bs"
import picture from "./assets/picture.jpg"
import "./styles.css"

export const About: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="flex max-w-4xl space-x-10">
                <div className="flex flex-col font-metropolis bg-blue text-white text-lg w-1/2">
                    <div className="p-6 h-3/4 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex flex-col place-content-end p-6 h-1/4 text-xl">
                        <div className="flex items-center gap-2">
                            <div>
                                <BsLinkedin /> 
                            </div>
                            <div>
                                <span><a href="https://www.linkedin.com/in/jeffreyjkjin">jeffreyjkjin</a></span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <BsGithub /> 
                            </div>
                            <div>
                                <span><a href="https://www.github.com/jeffreyjkjin">jeffreyjkjin</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={picture} alt="me :)" />
                </div>
            </div>
        </div>
    );
}