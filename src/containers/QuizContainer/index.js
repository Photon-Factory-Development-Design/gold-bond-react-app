import React from 'react';
import { Container } from '@material-ui/core';
import { BackgroundContainer, Typography, Stepper, Carousel } from 'components';
import ProductContainer from './ProductContainer';
import { getQuestion } from 'common/constant/questions';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState([0]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [steps, setSteps] = React.useState(['TREATS']);
    const [asins, setAsins] = React.useState([]);

    const onSelectQuestion = (index) => {
        const newQuestionPath = [].concat(
            questionPath.slice(0, activeStep + 1),
            index
        );
        const quesitonItem = getQuestion(newQuestionPath, activeStep + 1);

        if (quesitonItem.questions) {
            setQuestionPath(newQuestionPath);
            setActiveStep((prev) => prev + 1);

            let newSteps = [];
            for (var i = 0; i <= activeStep + 1; i++) {
                const quesitonItem = getQuestion(newQuestionPath, i);
                newSteps.push(quesitonItem.label);
            }

            setSteps(newSteps);
        } else {
            // show asins
            console.log(quesitonItem.ASINS);
            setAsins(quesitonItem.ASINS);
        }
    };

    return (
        <BackgroundContainer ref={ref} color="secondary" vertical={8}>
            <Container>
                <Typography variant="h1" color="primary" align="center">
                    What are you looking for?
                </Typography>

                <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    onUpdateIndex={setActiveStep}
                />
                <Carousel
                    items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    questionPath={questionPath}
                    activeIndex={activeStep}
                    onSelectQuestion={onSelectQuestion}
                />

                <ProductContainer asins={asins} />
            </Container>
        </BackgroundContainer>
    );
});

export default QuizContainer;
