import { TargetAndTransition } from "framer-motion"

/*
    PARAM: scale - How large the element grows when hovering on it; default value is 1.2.
     POST: Returns transition effect for hovering on an element. 
*/
export const hover = (scale?: number): TargetAndTransition => {
    return {
        scale: scale ? scale : 1.2,
        transition: {
            ease: "easeInOut",
            duration: 0.1
        }
    };
};

/*
    PARAM: scale - How large the element grows when clicking it; default value is 1.
     POST: Returns transition effect for click on an element. 
*/ 
export const tap = (scale?: number): TargetAndTransition => {
    return {
        scale: scale ? scale : 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.1
        }
    };
};
