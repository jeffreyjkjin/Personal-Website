import "./styles.css"

export const Navbar: React.FC = () => {
    return (
        <div className="flex flex-col font-metropolis justify-items-start">
            <h1 className="font-bold text-8xl">
                Hello friends!<br />
                My name is Jeffrey.
            </h1>
            <div className="flex text-lg gap-16 m-2">
                <button>
                    About
                </button>
                <button>
                    Projects
                </button>
                <button>
                    Contact
                </button>
            </div>
        </div>
    );
}