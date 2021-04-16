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
import { db, firebase_console } from 'common/firebase';
import { setOfferings } from 'common/data/offerings';

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

    React.useEffect(() => {
        console.log('App.js', db.ref);
        firebase_console
            .auth()
            .signInWithEmailAndPassword(
                'phoenix.ts1991@gmail.com',
                'Samzu777##'
            )
            .then(() => {
                db.ref(`/labvGn2UNma4bJnkLKmhTpjuyzT2/offering`).on(
                    'value',
                    (snapshot) => {
                        const offerings = [];
                        snapshot.forEach((snap) => {
                            offerings.push({
                                ...snap.val()
                            });
                        });

                        console.log('offerings', offerings);
                        setOfferings(offerings);
                    },
                    (error) => {
                        console.log('error', error);
                    }
                );
            });
    }, []);

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
