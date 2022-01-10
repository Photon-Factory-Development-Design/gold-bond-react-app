import React from 'react';
import { base_url } from '../../common/constant';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <img
            src={`${base_url}/assets/images/logo.png`}
            className={styles.logo}
            alt="logo"
            width={200}
        />
    );
};

export default Logo;
