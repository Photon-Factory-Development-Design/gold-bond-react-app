import React from 'react';
import { Dialog, Box } from '@material-ui/core';
import { Typography } from 'components';

const IngredientDetailDialog = ({ open, setOpen, ingredient }) => {
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={() => setOpen(false)}
            aria-labeledby="product-detail">
            <Box p={2}>
                <Box py={2}>
                    <Typography variant="h3" color="darkBlue" align="center">
                        {ingredient && ingredient.label}
                    </Typography>
                </Box>

                <Box py={3}>
                    <Typography variant="body1" color="darkBlue">
                        Gold Bond Ultimate’s 7 penetrating moisturizers and 3
                        nourishing vitamins work 10 surface layers deep for up
                        to 24 hours, hydrating and preparing your skin for the
                        extraordinary stresses of an extraordinary life. That
                        means skin that looks—and feels—noticeably healthier no
                        matter what you throw at it. Champion your skin with
                        Gold Bond. And your skin will champion you.
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    );
};

export default IngredientDetailDialog;
