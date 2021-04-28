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
            {questions.map((question, index) => (
                <Grid
                    key={`question-item-${question.value || index}`}
                    item
                    xs={12}
                    md={3}>
                    <Button
                        onClick={() => onSelectQuestion(question.value)}
                        style={{
                            width: 50,
                            height: 50,
                            border: '2px solid #C49C57',
                            borderRadius: 5,
                            background: 'transparent'
                        }}>
                        {question.label}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default QuestionContainer;
