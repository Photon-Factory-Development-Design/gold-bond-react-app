import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BackgroundContainer, Typography } from 'components';
import QuestionContainer from './QuestionContainer';
import ProductContainer from './ProductContainer';

const QuizContainer = React.forwardRef((props, ref) => {
    const [question, setQuestion] = React.useState(null);

    const onUpdateQuestion = (question) => {
        setQuestion(question);
    };
    return (
        <BackgroundContainer ref={ref} color="secondary" vertical={8}>
            <Container>
                <Typography variant="h1" color="primary" align="center">
                    What are you looking for?
                </Typography>

                <Box my={4}>
                    <QuestionContainer onUpdateQuestion={onUpdateQuestion} />
                </Box>

                <ProductContainer question={question} />
            </Container>
        </BackgroundContainer>
    );
});

export default QuizContainer;
