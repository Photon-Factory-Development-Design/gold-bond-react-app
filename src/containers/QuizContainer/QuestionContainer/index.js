import React from 'react';
import { Button, Grid, Box } from '@material-ui/core';
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
        <Box display="flex" flexDirection="row">
            {questions.map((question, index) => (
                <Box key={`question-item-${question.value || index}`} m={2}>
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
                </Box>
            ))}
        </Box>
    );
};

export default QuestionContainer;
