import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Typography } from 'components';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from '../Logo/index';
// styles
import styles from './Header.module.scss';

const headerBackImage =
    'https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/gold-bond-react-app/src/assets/images/Header.jpg';

// create custom header
const HeaderContainer = styled(Box)`
    background: url(${headerBackImage}) no-repeat center center fixed;
    height: 40vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    min-height: 300px;

    @media (max-width: 768px) {
        height: 50vh;
    }

    @media (min-width: 768px) {
        min-height: 300px;
    }
`;

const HeaderTitleContainer = styled(Box)``;
const Header = () => {
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
                    pb={4}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center">
                    <Logo />
                </Box>
                <Typography align="center" variant="h2" color="primary" className={styles.headerTitle}>
                    FIND THE RIGHT GOLD BOND <br />
                    PRODUCT FOR YOU
                </Typography>
                <Box py={2}>
                    <Typography align="center" variant="body1" color="black">
                        Not a medical diagnosis. Tool is for information only.
                    </Typography>
                </Box>
            </HeaderTitleContainer>
        </HeaderContainer>
    );
};

export default Header;
