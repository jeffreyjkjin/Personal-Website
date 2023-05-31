import { About } from "./About.tsx"
import { Contact } from "./Contact.tsx"
import { Navbar } from "./Navbar.tsx"
import { Portfolio } from "./Portfolio.tsx"
import { SectionCard } from "./SectionCard.tsx"
import "./styles.css"

export const App: React.FC = () => {
  return (
    <div className="flex flex-col place-items-center">
        <Navbar />
        <div className="flex my-[35vh] relative z-10">
            <SectionCard name={"About"} length={6} top={16.6} />
            <About />
        </div>
        <div className="flex my-[35vh] relative z-10">
            <SectionCard name= {"Projects"} length={8} top={18.3} />
            <Portfolio />
        </div>
        <div className="flex my-[35vh] relative z-10">
            <SectionCard name="Contact" length={7.5} top={14.6} />
            <Contact />
        </div>
        <p className="font-metropolis text-md my-1">
            Created by Jeffrey Jin, © 2023
        </p>
    </div>
  );
}