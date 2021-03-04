import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Header, QuizContainer } from 'containers';
import { Link } from 'components';
import './assets/styles/base.scss';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Header />
            </Box>
            <QuizContainer />
            <Link asin="B00AHH00R4" href="123">
                123
            </Link>
        </ThemeProvider>
    );
}

export default App;
