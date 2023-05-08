import "./styles.css"

export const Navbar: React.FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col font-metropolis justify-items-start gap-2">
                    <div>
                        <h1 className="font-bold text-8xl">
                            Hello friends!<br />
                            My name is Jeffrey.
                        </h1>
                    </div>
                    <div className="flex text-lg gap-16">
                        <div>
                            <button>About</button>
                        </div>
                        <div>
                            <button>Projects</button>
                        </div>
                        <div>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};