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
    </div>
  );
}