import PropTypes from "prop-types";

import { cn } from "../../lib/utils";

const ButtonTab = ({ onSelect, text, active }) => {
    return (
        <button
            type="button"
            className={cn(
                "w-full rounded-md py-1.5",
                { "bg-slate-700 text-white": active === true },
                "font-semibold",
                "transition",
                { "hover:bg-slate-200": active === false },
            )}
            onClick={onSelect}
        >
            {text}
        </button>
    );
};

ButtonTab.propTypes = {
    onSelect: PropTypes.func,
    text: PropTypes.string,
    active: PropTypes.bool,
};

export default ButtonTab;
