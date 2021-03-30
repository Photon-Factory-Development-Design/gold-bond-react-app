import React from 'react';

const Price = ({ value = '' }) => {
    const symbol = value[0];
    const integer = value.slice(1).split('.')[0];
    const decimal = value.slice(1).split('.')[1];

    return (
        <span className="aui-price a-price" data-a-color="base" data-a-size="l">
            <span className="a-price-symbol">{symbol}</span>
            <span className="a-price-whole">{integer}</span>
            {decimal && (
                <React.Fragment>
                    <span className="a-price-decimal">.</span>
                    <span className="a-price-fraction">88</span>
                </React.Fragment>
            )}
        </span>
    );
};

export default Price;
