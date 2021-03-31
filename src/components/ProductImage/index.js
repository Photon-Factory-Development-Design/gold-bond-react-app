import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ProductImage = ({ img }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <React.Fragment>
            {matches ? (
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
            ) : (
                <img src={img} alt="img" />
            )}
        </React.Fragment>
    );
};

export default ProductImage;
