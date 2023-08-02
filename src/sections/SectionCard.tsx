import "@/styles.css"

interface SectionCardProps {
    name: string;
    length: number;
}

/*
     DESC: Displays a card that indicates the current section the user is on.
    PARAM: name - The name of the section.
           length - The length of the highlight box.
*/
export const SectionCard: React.FC<SectionCardProps> = ({ name, length }) => {
    return (
        <section>
            <div className="font-metropolis font-bold text-3xl drop-shadow-lg invisible lg:visible">
                <div className="flex flex-row-reverse rotate-180 [writing-mode:vertical-rl] mx-6 gap-6">
                    <p className="z-20">{name}</p>
                    <div className="flex relative">
                        <p className="-tracking-[0.2rem] relative">——————</p>
                        <div className={`bg-lightblue absolute w-[1.5rem] h-[${length}rem] right-[0.9rem] top-[9.25rem]`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
