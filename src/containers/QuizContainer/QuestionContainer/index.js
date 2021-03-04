import React from 'react';
import { Button, Grid } from '@material-ui/core';
import questions from './questions';

const QuestionContainer = ({ onUpdateQuestion }) => {
    const [selectedQuestion, setSelectedQuestion] = React.useState(null);

    // select question handler
    const onSelectQuestion = (question) => {
        setSelectedQuestion(question);

        // pass question to parent component
        if (onUpdateQuestion) {
            onUpdateQuestion(question);
        }
    };
    return (
        <Grid container direction="row">
            {questions.map((question) => (
                <Grid
                    key={`question-item-${question.value}`}
                    item
                    xs={12}
                    md={3}>
                    <Button
                        onClick={() => onSelectQuestion(question.value)}
                        fullWidth
                        color={
                            selectedQuestion === question.value
                                ? 'primary'
                                : 'default'
                        }>
                        {question.label}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default QuestionContainer;
