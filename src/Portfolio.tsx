import { Project } from "./Project.tsx"
import "./styles.css"

export const Portfolio: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <Project />
            </div>
        </div>
    );
}