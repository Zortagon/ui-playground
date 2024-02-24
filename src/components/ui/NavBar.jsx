import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const NavBar = (props) => {
    const [navTransparent, setNavTransparent] = React.useState(true);

    React.useEffect(() => {
        const handleTransparent = () => {
            const scrollY = window.scrollY;
            if ((scrollY / window.innerHeight) * 100 >= 20) {
                setNavTransparent(false);
            } else {
                setNavTransparent(true);
            }
        };

        document.addEventListener("scroll", handleTransparent);

        return () => {
            document.removeEventListener("scroll", handleTransparent);
        };
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0",
                    "h-[4.5rem] w-full",
                    "flex items-center justify-between",
                    "px-4 md:px-12 lg:px-16 xl:px-14",
                    [
                        "bg-slate-950",
                        {
                            "bg-opacity-100 md:bg-opacity-0":
                                navTransparent === true,
                        },
                        "",
                    ],
                    "transition duration-[750ms]",
                )}
            >
                <a href="#" className="text-2xl font-medium text-white">
                    Header
                </a>
            </header>
            {/* NavBar Spacing */}
            <div className="bg-slate-950 pt-[4.5rem] md:pt-0" />
        </>
    );
};

NavBar.propTypes = {};

export default NavBar;
