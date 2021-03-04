import React from 'react';
import { Button } from '@material-ui/core';
import buildATC from 'common/helpers/buildATC';

const Link = ({ children, ...props }) => {
    const ref = React.useRef(null);
    const initRef = React.useRef(false); // represent if the compoent is initialized

    React.useEffect(() => {
        // construct link attributes including href w/ aws values
        if (ref.current && !initRef.current) {
            initRef.current = true;

            console.log('buildATC', ref.current);
            // build ATC
            buildATC(ref.current);
        }
    }, [ref]);

    return (
        <a data-component-type="CustomLink" ref={ref} {...props}>
            <Button color="primary">{children}</Button>
        </a>
    );
};

export default Link;
