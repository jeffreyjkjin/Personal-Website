import { MdOutlinePhone, MdMailOutline } from "react-icons/Md"
import "./styles.css"

export const Contact: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col flex-grow max-w-3xl font-metropolis place-items-center">
                <div className="font-bold text-8xl">
                    Let's Chat!
                </div>
                <div className="flex grow text-white text-3xl space-x-10">
                    <div className="flex bg-blue items-center gap-2 p-6 w-1/2">
                        <div>
                            <MdOutlinePhone />
                        </div>
                        <div>
                            <a href="tel:778-938-6318">
                                (778) 938-6318
                            </a>
                        </div>
                    </div>
                    <div className="flex bg-blue items-center gap-2 p-6 w-1/2">
                        <div>
                            <MdMailOutline /> 
                        </div>
                        <div>
                            <a href="mailto:jeffrey_jin@sfu.ca">
                                jeffrey_jin@sfu.ca
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}