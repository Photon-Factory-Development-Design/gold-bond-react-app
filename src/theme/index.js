import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import palette from './palette';

const defaultTheme = createMuiTheme();
const { breakpoints } = defaultTheme;

const Theme = createMuiTheme({
    typography,
    palette,
    props: {
        MuiButton: {
            variant: 'contained'
        }
    },
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: '5rem',
                [breakpoints.down('xs')]: {
                    fontSize: '3rem'
                },
                [breakpoints.down('xs')]: {
                    fontSize: '3rem'
                }
            }
        },
        MuiButton: {
            root: {
                borderRadius: '0px',
                '&::-moz-focus-inner': {
                    border: 0,
                    outline: 'none'
                }
            },
            label: {
                fontFamily: 'GothamMedium',
                fontSize: '18px'
            }
        }
    }
});

export default Theme;
