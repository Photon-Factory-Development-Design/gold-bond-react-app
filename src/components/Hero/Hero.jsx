import React from 'react';
import ReactPlayer from 'react-player';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// jss
import styles from './heroStyle';
import cssStyle from './Hero.module.scss';

const heroVideo =
    'https://d24hosivsxf1sb.cloudfront.net/transcode/e8b2ba7c-6c2c-4f15-978a-8ff744509541/Gold_Bond___Champion_Your_Skin%2Fmp4%2FGold_Bond___Champion_Your_Skin_high.mp4';

const Hero = ({ classes }) => {
    return (
        <Box className={classes.root}>
            <ReactPlayer
                url={heroVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
                className={cssStyle.react_player}
            />
        </Box>
    );
};

export default withStyles(styles)(Hero);
