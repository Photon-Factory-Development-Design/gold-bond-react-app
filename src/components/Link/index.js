import React from 'react';
import buildATC from 'common/helpers/buildATC';

const Link = ({ children, ...props }) => {
    const ref = React.useRef(null);
    const initRef = React.useRef(false); // represent if the compoent is initialized

    React.useEffect(() => {
        // construct link attributes including href w/ aws values
        if (ref.current && !initRef.current) {
            initRef.current = true;

            // build ATC
            buildATC(ref.current);
        }
    }, [ref]);

    
    return (
        <a data-component-type="CustomLink" ref={ref} {...props}>
            {children}
        </a>
    );
};

export default Link;
