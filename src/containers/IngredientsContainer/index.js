import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BackgroundContainer, Typography } from '../../components';
import ingredients from './ingredients';

const IngredientItem = ({ url, label }) => (
    <Box m={2}>
        <BackgroundContainer color="secondary">
            <Box
                width={150}
                height={170}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={2}>
                <img src={url} height="50" alt="ingredient" />
                <Box py={2}>
                    <Typography variant="body1" align="center" color="primary">
                        <Box fontWeight={900}>{label}</Box>
                    </Typography>
                </Box>
            </Box>
        </BackgroundContainer>
    </Box>
);
const IngrdientsContainer = () => {
    return (
        <BackgroundContainer color="primary" vertical="8">
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

                <Box
                    display="flex"
                    flexDirection="row"
                    width="100%"
                    flexWrap="wrap"
                    mt={2}>
                    {ingredients.map((ingredient, index) => (
                        <IngredientItem
                            key={`ingredient-item-${index}`}
                            {...ingredient}
                        />
                    ))}
                </Box>
            </Container>
        </BackgroundContainer>
    );
};

export default IngrdientsContainer;
