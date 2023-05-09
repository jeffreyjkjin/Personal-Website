import { BsGithub, BsYoutube } from "react-icons/Bs"
import { MdExpandLess, MdExpandMore } from "react-icons/Md"
import "./styles.css"

export const Project: React.FC = () => {
    return (
        <div className="flex flex-col w-full max-w-4xl font-metropolis bg-grey">
            <div className="flex flex-grow text-2xl p-6">
                <div className="font-bold grow">
                    Project Name
                </div>
                <div className="flex flex-row-reverse justify-end gap-4">
                    <div>
                        <button>
                            <MdExpandMore />
                        </button>
                    </div>
                    <div>
                        <a href="">
                            <BsYoutube />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <BsGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex p-6">
                <div className="flex flex-col w-1/2">
                    <div>
                        <img alt="Project Image" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 text-lg text-white">
                        <div className="bg-red px-2 py-1">
                            Language
                        </div>
                        <div className="bg-red px-2 py-1">
                            Framework
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 text-xl text-white gap-4">
                    <div className="flex flex-col bg-blue py-6">
                        <div className="font-bold text-center">
                            The What
                        </div>
                        <div className="text-justify text-lg px-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="bg-blue py-6">
                        <div className="font-bold text-center">
                            The So What
                        </div>
                        <div className="text-justify text-lg px-6">
                            <ul className="list-inside list-disc">
                                <li>
                                    Item 1
                                </li>
                                <li>
                                    Item 2
                                </li>
                                <li>
                                    Item 3
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}