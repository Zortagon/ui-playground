import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Button = ({ text, variant, type, onClick, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                "relative",
                "rounded-md",
                "border-t-2",
                {
                    "border-yellow-300": variant === "encode",
                    "border-green-300": variant === "decode",
                },
                "px-2 py-1.5",
                "bg-gradient-to-r ",
                {
                    "from-yellow-300 to-yellow-400": variant === "encode",
                    "from-green-300 to-green-400": variant === "decode",
                },
                "font-mono font-semibold ",
                {
                    "text-yellow-900": variant === "encode",
                    "text-green-900": variant === "decode",
                },
                "after:absolute after:left-0 after:top-0",
                "after:h-full after:w-full",
                "after:rounded-md",
                "after:bg-white/25",
                "after:opacity-0",
                "after:transition",
                "hover:after:opacity-100",
                className,
            )}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
