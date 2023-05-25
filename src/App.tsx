import { About } from "./About.tsx"
import { Contact } from "./Contact.tsx"
import { Navbar } from "./Navbar.tsx"
import { Portfolio } from "./Portfolio.tsx"
import "./styles.css"

export const App: React.FC = () => {
  return (
    <div className="flex flex-col place-items-center">
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
        <p className="font-metropolis text-md my-1">
            Created by Jeffrey Jin, © 2023
        </p>
    </div>
  );
}