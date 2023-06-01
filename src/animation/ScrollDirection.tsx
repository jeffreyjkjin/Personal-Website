export enum ScrollDirection {
    Up = "Up",
    Down = "Down"
}

export const updateScrollDirection = (setDirection: React.Dispatch<React.SetStateAction<ScrollDirection>>) => {
    let prevScrollY: number = window.scrollY;
    let check: boolean = false;

    const checkDirection = () => {
        check = false;

        if (Math.abs(window.scrollY - prevScrollY) < 0) {
            return;
        }

        setDirection(window.scrollY > prevScrollY ? ScrollDirection.Down: ScrollDirection.Up);
        prevScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };

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
}