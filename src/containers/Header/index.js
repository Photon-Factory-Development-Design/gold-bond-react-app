import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Typography } from 'components';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from '../Logo/index';
import { base_url } from 'common/constant';
// styles
import styles from './Header.module.scss';
import useResponsive from 'components/Hooks/useResponsive';

const headerBackImage = `${base_url}/assets/images/Header.jpg`;
const headerTabletImage = `${base_url}/assets/images/Header-tablet.jpg`;

const headerBackMobileImage = `${base_url}/assets/images/Header-mobile.jpg`;

// create custom header
const HeaderContainer = styled(Box)`
    position: relative;
`;

const HeaderTitleContainer = styled(Box)``;
const Header = () => {
    const theme = useTheme();
    let HeaderContainerProps = {},
        HeaderTitleContainerProps = {};

    if (useMediaQuery(theme.breakpoints.up('md'))) {
        // HeaderContainerProps = {
        //     justifyContent: 'flex-end'
        // };
        // HeaderTitleContainerProps = {
        //     pr: 8,
        //     mr: 8
        // };
    } else {
        HeaderContainerProps = {
            justifyContent: 'center'
        };
        HeaderTitleContainerProps = {
            pr: 0,
            mr: 0
        };
    }

    const { isMobile, isTablet, isDesktop } = useResponsive();

    return (
        <HeaderContainer
            display="flex"
            flexDirection="row"
            {...HeaderContainerProps}
            alignItems="center"
            className={styles.header_container}>
            {isDesktop && (
                <div className={styles.headerBgContainer}>
                    <img
                        src={headerBackImage}
                        alt="header-bg"
                        className={styles.header_bg}
                    />
                </div>
            )}
            {isTablet && (
                <div className={styles.headerBgContainer}>
                    <img
                        src={headerTabletImage}
                        alt="header-bg"
                        className={styles.header_bg}
                    />
                </div>
            )}
            {isMobile && (
                <div className={styles.headerBgContainer}>
                    <img
                        src={headerBackMobileImage}
                        alt="header-bg"
                        className={styles.header_bg}
                    />
                </div>
            )}
            <HeaderTitleContainer
                display="flex"
                flexDirection="column"
                alignItems="center"
                className={styles.header_title_container}
                {...HeaderTitleContainerProps}>
                <Box
                    pt={4}
                    pb={4}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center">
                    <Logo />
                </Box>
                <Typography
                    align="center"
                    variant="h2"
                    color="primary"
                    className={styles.headerTitle}>
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
