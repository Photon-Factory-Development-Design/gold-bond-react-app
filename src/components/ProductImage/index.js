import { Box } from '@material-ui/core';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ProductImage = ({ img }) => {
    return (
        <Box width={400} className="product-image">
            <ReactImageMagnify
                {...{
                    smallImage: {
                        isFluidWidth: true,
                        src: img
                    },
                    largeImage: {
                        width: 1200,
                        height: 1800,
                        src: img
                    },
                    enlargedImageContainerStyle: {
                        zIndex: 1000
                    }
                }}
            />
        </Box>
    );
};

export default ProductImage;
