import React from 'react';
import {
    Box,
    makeStyles
    //IconButton
} from '@material-ui/core';
import { Typography } from '../../components';

const useStyles = makeStyles({
    ingredientItem: {
        border: '1px solid #fff',
        '&:hover': {
            backgroundColor: '#F2EDEB !important',
            '& .MuiTypography-root': {
                color: '#003D54 !important'
            },
        },
        cursor: 'pointer'
    }
});

const QuestionItemContainer = ({ url, label, onClick }) => {
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
                <Typography variant="body1" align="center">
                    <Box fontWeight={900}>{label}</Box>
                </Typography>
            </Box>
        </Box>
    );
};

export default QuestionItemContainer;
