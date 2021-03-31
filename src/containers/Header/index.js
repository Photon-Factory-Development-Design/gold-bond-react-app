import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from '../Logo/index';

const headerBackImage =
    'https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/gold-bond-react-app/src/assets/images/Header.jpg';

// create custom header
const HeaderContainer = styled(Box)`
    background: url(${headerBackImage}) no-repeat center center fixed;
    height: 50vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
`;

const HeaderTitleContainer = styled(Box)``;
const Header = ({ onClickQuiz }) => {
    const theme = useTheme();
    let HeaderContainerProps = {},
        HeaderTitleContainerProps = {};

    if (useMediaQuery(theme.breakpoints.up('md'))) {
        HeaderContainerProps = {
            justifyContent: 'flex-end'
        };
        HeaderTitleContainerProps = {
            pr: 8,
            mr: 8
        };
    } else {
        HeaderContainerProps = {
            justifyContent: 'center'
        };
        HeaderTitleContainerProps = {
            pr: 0,
            mr: 0
        };
    }

    return (
        <HeaderContainer
            display="flex"
            flexDirection="row"
            {...HeaderContainerProps}
            alignItems="center">
            <HeaderTitleContainer
                display="flex"
                flexDirection="column"
                alignItems="center"
                {...HeaderTitleContainerProps}>
                <Box
                    pt={4}
                    pb={1}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center">
                    <Logo />
                </Box>
                <Typography align="center" variant="h1" color="primary">
                    FIND THE RIGHT GOLD BOND <br />
                    PRODUCT FOR YOU
                </Typography>

                <Box mt={2}>
                    <Button onClick={onClickQuiz} color="primary">
                        TAKE THE QUIZ
                    </Button>
                </Box>
            </HeaderTitleContainer>
        </HeaderContainer>
    );
};

export default Header;
