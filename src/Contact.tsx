import { MdOutlinePhone, MdMailOutline } from "react-icons/Md"
import "./styles.css"

export const Contact: React.FC = () => {
    return (
        <div className="flex flex-col flex-grow w-[56rem] font-metropolis place-items-center">
            <p className="font-bold text-8xl">
                Let's Chat!
            </p>
            <div className="flex grow text-white text-3xl space-x-10">
                <div className="flex bg-blue items-center gap-2 p-6 w-1/2">
                    <MdOutlinePhone />
                    <a href="tel:778-938-6318">
                        (778) 938-6318
                    </a>
                </div>
                <div className="flex bg-blue items-center gap-2 p-6 w-1/2">
                    <MdMailOutline /> 
                    <a href="mailto:jeffrey_jin@sfu.ca">
                        jeffrey_jin@sfu.ca
                    </a>
                </div>
            </div>
        </div>
    );
}