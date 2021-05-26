import React from 'react';
import { Dialog, Box } from '@material-ui/core';
import { Typography } from 'components';
import ingredientDetails from './ingredientsDetails';

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
                    <Typography variant="body1" color="darkBlue" align="center">
                        {ingredient && ingredientDetails[ingredient.label]}
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    );
};

export default IngredientDetailDialog;
