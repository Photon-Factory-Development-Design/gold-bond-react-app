import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core';
import Logo from '../Logo/index';

const headerBackImage = 'https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/gold-bond-react-app/src/assets/images/Header.jpg';

// create custom header
const HeaderContainer = styled(Box)`
    background: url(${headerBackImage}) no-repeat center center fixed;
    height: 100vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
`;

const HeaderTitleContainer = styled(Box)`
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
`;
const Header = () => (
    <HeaderContainer>
        <Box pt={4} display="flex" flexDirection="row" justifyContent="center">
            <Logo />
        </Box>
        <HeaderTitleContainer display="flex" flexDirection="column" alignItems="center">
            <Typography align="center" variant="h1" color="primary">
                FIND THE RIGHT GOLD BOND <br />
                PRODUCT FOR YOU
            </Typography>

            <Box mt={2}>
                <Button color="primary">TAKE THE QUIZ</Button>
            </Box>
        </HeaderTitleContainer>
    </HeaderContainer>
);

export default Header;