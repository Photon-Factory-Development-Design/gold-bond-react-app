import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Header, QuizContainer } from './containers';
import './assets/styles/base.scss';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Header />
            </Box>
            <QuizContainer />
        </ThemeProvider>
    );
}

export default App;
