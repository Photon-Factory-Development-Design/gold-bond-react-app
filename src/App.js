import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Header, QuizContainer, IngrdientsContainer } from 'containers';
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
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Box>
                    <Header onClickQuiz={onClickQuiz} />
                </Box>
                <QuizContainer ref={quizRef} />
                <IngrdientsContainer />

                <span className="a-button a-button-primary add-to-cart ">
                    <span className="a-button-inner">
                        <a className="a-button-text" aria-hidden="true">
                            Add to Cart
                        </a>
                    </span>
                </span>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
