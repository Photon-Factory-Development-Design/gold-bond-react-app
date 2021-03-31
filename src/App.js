import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import {
    Header,
    QuizContainer,
    IngrdientsContainer,
    ProductDetailDialog
} from 'containers';
import './assets/styles/base.scss';

function App() {
    const [open, setOpen] = React.useState(false);
    const [product, setDetailProduct] = React.useState(null);

    const quizRef = React.useRef(null);

    const onClickQuiz = () => {
        if (quizRef.current) {
            quizRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    React.useEffect(() => {
        if (product) {
            setOpen(true);
        }
    }, [product]);

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Box>
                    <Header onClickQuiz={onClickQuiz} />
                </Box>
                <QuizContainer
                    ref={quizRef}
                    setDetailProduct={setDetailProduct}
                />
                <IngrdientsContainer />

                <ProductDetailDialog
                    open={open}
                    setOpen={setOpen}
                    product={product}
                />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
