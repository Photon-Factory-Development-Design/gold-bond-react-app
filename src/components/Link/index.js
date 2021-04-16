import React from 'react';
import buildATC from 'common/helpers/buildATC';
import { findOfferingIDFromAsin } from 'common/data/offerings';
import offerings from 'common/data/offerings';

const Link = ({ children, ...props }) => {
    const ref = React.useRef(null);
    const initRef = React.useRef(false); // represent if the compoent is initialized
    const isStock = findOfferingIDFromAsin(offerings, props.asin).error;

    React.useEffect(() => {
        // construct link attributes including href w/ aws values
        if (ref.current && !initRef.current) {
            initRef.current = true;

            console.log('buildATC', ref.current);
            // build ATC
            buildATC(ref.current);
        }
    }, [ref]);

    if (!isStock) {
        return (
            <div className="aui-add-to-cart-button" style={{ width: '100%' }}>
                <span
                    className="a-button a-button-primary add-to-cart "
                    style={{ width: '100%' }}>
                    <span className="a-button-inner">
                        {' '}
                        <a
                            data-component-type="CustomLink"
                            ref={ref}
                            {...props}>
                            {children}
                        </a>
                        )
                    </span>
                </span>
            </div>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
};

export default Link;
