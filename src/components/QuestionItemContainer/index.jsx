import React from 'react';
import cn from 'clsx';
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
            }
        },
        cursor: 'pointer'
    },
    selected: {
        backgroundColor: '#F2EDEB !important',
        '& .MuiTypography-root': {
            color: '#003D54 !important'
        }
    }
});

const QuestionItemContainer = ({
    url,
    hoverURL,
    label,
    selected = false,
    onClick
}) => {
    const [hover, setHover] = React.useState(false);
    const classes = useStyles();

    const isHighlight = hover || selected;
    return (
        <Box
            onClick={onClick}
            height={150}
            maxWidth="100%"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor="background.littleDark"
            borderRadius={5}
            p={2}
            m={1}
            className={cn(classes.ingredientItem, {
                [classes.selected]: isHighlight
            })}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {url && (
                <Box>
                    {url && (
                        <div hidden={isHighlight}>
                            <img src={url} height="50" alt="ingredient" />
                        </div>
                    )}
                    {hover && hoverURL && (
                        <div hidden={!isHighlight}>
                            <img src={hoverURL} height="50" alt="ingredient" />
                        </div>
                    )}
                </Box>
            )}
            <Box py={2}>
                <Typography variant="body1" align="center">
                    <Box fontWeight={900}>{label}</Box>
                </Typography>
            </Box>
        </Box>
    );
};

export default QuestionItemContainer;
