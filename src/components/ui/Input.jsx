import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Input = ({
    type,
    typeData,
    id,
    name,
    placeholder,
    required,
    ...props
}) => {
    return (
        <label className="relative">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder || undefined}
                required={required}
                className={cn(
                    "relative",
                    "w-full",
                    "rounded-md border border-slate-200",
                    "px-2 py-1.5",
                    "outline-none",
                    "text-sm text-slate-800",
                    "transition",
                    "focus:border-slate-400",
                )}
                {...props}
            />
            {typeData && (
                <span
                    className={cn(
                        "absolute right-0 top-0 mr-3.5 flex h-full items-center text-sm font-medium text-slate-400",
                    )}
                >
                    {typeData}
                </span>
            )}
        </label>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    typeData: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

export default Input;
