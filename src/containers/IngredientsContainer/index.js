import { Container, Box } from '@material-ui/core';
import React from 'react';
import { BackgroundContainer, Typography } from '../../components';

const QuizContainer = () => {
    return (
        <BackgroundContainer color="primary" vertical="8">
            <Box py={2}>
                <Typography color="primary" variant="h2" align="center">
                    THE BEST & NATURAL INGREDIENTS
                </Typography>
            </Box>

            <Container maxWidth="md">
                <Typography color="secondary" variant="body1" align="center">
                    We use the very best, research-backed ingredients chosen by dermatologists. 
                    But far more importantly, we use them in just the right formula for you. 
                    You need to use just the right ones at the amount that is safe and effective for your skin.
                </Typography>
            </Container>
        </BackgroundContainer>
    )
};

export default QuizContainer;