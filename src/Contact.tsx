import { MdOutlinePhone, MdMailOutline } from "react-icons/Md"
import "./styles.css"

export const Contact: React.FC = () => {
    return (
        <div className="flex flex-col w-[56rem] font-metropolis place-items-center gap-6 my-[40vh] drop-shadow-lg">
            <p className="font-bold text-8xl">
                Let's Chat!
            </p>
            <div className="flex text-white text-3xl space-x-10 w-[46rem]">
                <div className="flex bg-blue place-content-center gap-2 p-6 w-1/2">
                        <MdOutlinePhone />
                        <a href="tel:778-938-6318">
                            (778) 938-6318
                        </a>
                </div>
                <div className="flex bg-blue place-content-center gap-2 p-6 w-1/2">
                        <MdMailOutline /> 
                        <a href="mailto:jeffrey_jin@sfu.ca">
                            jeffrey_jin@sfu.ca
                        </a>
                </div>
            </div>
        </div>
    );
}