import { About } from "./About.tsx"
import { Contact } from "./Contact.tsx"
import { Navbar } from "./Navbar.tsx"
import { Portfolio } from "./Portfolio.tsx"

export const App: React.FC = () => {
  return (
    <>
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
    </>
  );
}