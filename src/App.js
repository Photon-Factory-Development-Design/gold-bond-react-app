import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Header, QuizContainer, IngrdientsContainer } from 'containers';
import { Link } from 'components';
import './assets/styles/base.scss';

function App() {
    const quizRef = React.useRef(null);

    const onClickQuiz = () => {
        if (quizRef.current) {
            quizRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Header onClickQuiz={onClickQuiz} />
            </Box>
            <QuizContainer ref={quizRef} />
            <IngrdientsContainer />
            <Link asin="B00AHH00R4" href="123">
                123
            </Link>
        </ThemeProvider>
    );
}

export default App;
