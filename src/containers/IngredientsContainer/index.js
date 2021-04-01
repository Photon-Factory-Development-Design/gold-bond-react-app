import React from 'react';
import {
    Container,
    Box
    //IconButton
} from '@material-ui/core';
import { BackgroundContainer, Typography } from '../../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ingredients from './ingredients';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export const IngredientItem = ({ url, label, onClick }) => (
    <BackgroundContainer color="secondary">
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box
                onClick={onClick}
                width={150}
                height={150}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgcolor="background.littleDark"
                borderRadius={5}
                p={2}
                m={2}>
                <img src={url} height="50" alt="ingredient" />
                <Box py={2}>
                    <Typography variant="body1" align="center" color="primary">
                        <Box fontWeight={900}>{label}</Box>
                    </Typography>
                </Box>
            </Box>
        </Box>
    </BackgroundContainer>
);

/*
const CustomRightArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.
    return (
        <IconButton onClick={() => onClick()} >
            <ChevronRightIcon size={12} />
        </IconButton>
    );
};
*/

const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const IngrdientsContainer = () => {
    console.log(ingredients);
    return (
        <BackgroundContainer color="primary">
            <Box py={2}>
                <Typography color="primary" variant="h2" align="center">
                    THE BEST & NATURAL INGREDIENTS
                </Typography>
            </Box>

            <Container maxWidth="md">
                <Typography color="secondary" variant="body1" align="center">
                    We use the very best, research-backed ingredients chosen by
                    dermatologists. But far more importantly, we use them in
                    just the right formula for you. You need to use just the
                    right ones at the amount that is safe and effective for your
                    skin.
                </Typography>

                <Carousel
                    responsive={responsive}
                    //customRightArrow={<CustomRightArrow />}
                >
                    {ingredients.map((ingredient, index) => (
                        <IngredientItem
                            key={`ingredient-item-${index}`}
                            {...ingredient}
                        />
                    ))}
                </Carousel>
            </Container>
        </BackgroundContainer>
    );
};

export default IngrdientsContainer;
