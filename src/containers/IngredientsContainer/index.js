import React from 'react';
import {
    Container,
    Box,
    makeStyles
    //IconButton
} from '@material-ui/core';
import { BackgroundContainer, Typography } from '../../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ingredients from './ingredients';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles({
    ingredientItem: {
        border: '1px solid #fff',
        '&:hover': {
            backgroundColor: '#F2EDEB !important'
        },
        cursor: 'pointer'
    }
});

export const IngredientItem = ({ url, label, onClick }) => {
    const classes = useStyles();

    return (
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
            m={2}
            className={classes.ingredientItem}>
            {url && <img src={url} height="50" alt="ingredient" />}
            <Box py={2}>
                <Typography variant="body1" align="center" color="primary">
                    <Box fontWeight={900}>{label}</Box>
                </Typography>
            </Box>
        </Box>
    );
};

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
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};
const IngrdientsContainer = ({ setIngredient }) => {
    const carouselRef = React.useRef(null);
    const [currentSlide, setCurentSlide] = React.useState(0);

    const onNext = React.useCallback(() => {
        carouselRef.current.next();
        setCurentSlide(
            Math.min(
                carouselRef.current.state.currentSlide + 1,
                ingredients.length - 1
            )
        );
    }, []);

    const onPrev = React.useCallback(() => {
        carouselRef.current.goToSlide(
            Math.max(carouselRef.current.state.currentSlide - 1, 0)
        );

        setCurentSlide(Math.max(carouselRef.current.state.currentSlide - 1, 0));
    }, []);

    console.log(carouselRef.current);
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

                <Box position="relative">
                    <Carousel
                        ref={carouselRef}
                        arrows={false}
                        responsive={responsive}
                        //customRightArrow={<CustomRightArrow />}
                    >
                        {ingredients.map((ingredient, index) => (
                            <IngredientItem
                                key={`ingredient-item-${index}`}
                                onClick={() => {
                                    console.log(ingredient);
                                    setIngredient(ingredient)
                                }}
                                {...ingredient}
                            />
                        ))}
                    </Carousel>

                    {currentSlide +
                        (carouselRef.current?.state.slidesToShow || 0) <
                        ingredients.length - 1 && (
                        <Box
                            className="carousel-right-arrow"
                            fontSize={20}
                            position="absolute"
                            onClick={onNext}>
                            <ChevronRightIcon color={'primary'} />
                        </Box>
                    )}
                    {currentSlide > 0 && (
                        <Box
                            className="carousel-left-arrow"
                            fontSize={20}
                            position="absolute"
                            onClick={onPrev}>
                            <ChevronLeftIcon color={'primary'} />
                        </Box>
                    )}
                </Box>
            </Container>
        </BackgroundContainer>
    );
};

export default IngrdientsContainer;
