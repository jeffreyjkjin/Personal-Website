export enum ScrollDirection {
    Up = "Up",
    Down = "Down"
}

/*
     DESC: Determines what direction the user is scrolling in.
    PARAM: setDirection - A setter from the parent element; used to set the current scroll direction.
*/
export const updateScrollDirection = (setDirection: React.Dispatch<React.SetStateAction<ScrollDirection>>) => {
    let prevScrollY: number = window.scrollY;
    let check: boolean = false;

    /*
        DESC: Determines if the user scroll up or down.
    */
    const checkDirection = () => {
        check = false;

        if (Math.abs(window.scrollY - prevScrollY) < 0) {
            return;
        }

        setDirection(window.scrollY > prevScrollY ? ScrollDirection.Down: ScrollDirection.Up);
        prevScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };

    /*
        DESC: Updates ever time the user scrolls and checks what direction.
    */
    const onScroll = () => {
        if (!check) {
            window.requestAnimationFrame(checkDirection);
            check = true;
        }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
        window.removeEventListener("scroll", onScroll)
    };
};