import { useEffect, useMemo, useState } from "react"
import { 
    type ISourceOptions, 
    Engine
} from "@tsparticles/engine"
import { Particles, initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import "@/styles.css"

/*
    DESC: Generates particles with links in the background.
*/
export const BGParticles: React.FC = () => {
    const [init, setInit] = useState(false);
    
    const options: ISourceOptions = useMemo(() => ({
        fullScreen: true,
        fpsLimit: 120,
        particles: {
            color: {
                value: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"]
            },
            opacity: {
                value: 0.35
            },
            links: {
                color: "#E4DCCF",
                distance: 150,
                enable: true,
                opacity: 0.75,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
          },
          detectRetina: true
    }), []);
    
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (init) {
        return (
            <div className="fixed">
                <Particles
                    id="tsparticles"
                    options={options}
                />
            </div>
        );
    }

    return <></>;
}