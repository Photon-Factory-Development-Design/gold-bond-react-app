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
        items: 4
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 2
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

    return (
        <BackgroundContainer color="primary">
            <Box py={2}>
                <Typography color="darkBlue" variant="h2" align="center">
                    CHAMPION YOUR SKIN
                </Typography>
            </Box>

            <Box pb={3}>
                <Container maxWidth="md">
                    <Typography
                        color="secondary"
                        variant="body1"
                        align="center">
                        Gold Bond ultimate's 7 penetrating moisturizers and 3
                        nourishing vitamins work 10 surface layers deep for up
                        to 24 hours, hydrating and preparing your skin for the
                        extraordinary stresses of an extraordinary life. That
                        means skin that looks - and feels - noticeably healthier
                        no matter what you throw at it. Champion your skin with
                        Gold Bond. And your skin will champion you.
                    </Typography>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Box pb={5}>
                    <Box pb={7}>
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
                                            setIngredient(ingredient);
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
                    </Box>
                </Box>
            </Container>
        </BackgroundContainer>
    );
};

export default IngrdientsContainer;
