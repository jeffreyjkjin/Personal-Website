import "@/styles.css"

interface SectionCardProps {
    name: string;
    length: number;
    top: number;
}

export const SectionCard: React.FC<SectionCardProps> = ({ name, length, top }) => {
    return (
        <div className="font-metropolis font-bold text-3xl relative">
            <div className={`flex items-center gap-8 absolute -rotate-90 origin-left -left-[4rem] top-[${top}rem]`}>
                <div className="bg-black h-2 w-[10rem]"></div>
                <div className="flex relative">
                    <div className={`bg-lightblue opacity-75 h-[1.5rem] w-[${length}rem] absolute -bottom-[0rem] right-[0.75rem]`}></div>
                    <p className="z-10">
                        {name}  
                    </p>
                </div>
            </div>
        </div>
    );
}
