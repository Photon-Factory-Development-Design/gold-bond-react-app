import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
/*
const dimensions = (imgSrc) => {
// Create new offscreen image to test
   const theImage = new Image();
   theImage.src = imgSrc;
// Get accurate measurements from that.
   const imageWidth = theImage.width;
   const imageHeight = theImage.height;
// Create an object to save the image width and height
   const imgDimensions = { width: imageWidth, height: imageHeight };
// Return the result
   return imgDimensions;
};
*/

const ProductImage = ({ img }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [dimension, setDimension] = React.useState({ width: 0, height: 0 });

    const onLoadImage = React.useCallback(({ target: image }) => {
        const ratio = image.width / image.height;
        const dimension = { width: image.width, height: image.height };
        if (image.height > 500) {
            dimension.height = 500;
            dimension.width = ratio * dimension.height;
        }
        setDimension(dimension);
    }, []);

    return (
        <React.Fragment>
            {matches ? (
                <Box
                    width={400}
                    className="product-image"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                width: dimension.width,
                                height: dimension.height,
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
            <img
                src={img}
                onLoad={onLoadImage}
                style={{ display: 'none' }}
                alt="img"
            />
        </React.Fragment>
    );
};

export default ProductImage;
