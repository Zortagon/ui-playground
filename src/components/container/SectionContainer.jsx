import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const SectionContainer = ({ className, children }) => {
    return (
        <section
            className={cn(
                "mx-auto max-w-lg rounded-lg border bg-slate-100/25 p-5",
                className,
            )}
        >
            {children}
        </section>
    );
};

SectionContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default SectionContainer;
