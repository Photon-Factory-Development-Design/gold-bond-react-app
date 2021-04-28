import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BackgroundContainer, Typography, Stepper, Carousel } from 'components';
import ProductContainer from './ProductContainer';
import { getQuestion, checkYesNoQuestion } from 'common/constant/questions';
import { defaultAsins as DefaultAsins } from 'common/data/products';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState([0]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [stepperStep, setStepperStep] = React.useState(0);
    const [steps, setSteps] = React.useState(['']);
    const [asins, setAsins] = React.useState(DefaultAsins);

    const onSelectQuestion = (index) => {
        const newQuestionPath = [].concat(
            questionPath.slice(0, activeStep + 1),
            index
        );
        const questionItem = getQuestion(newQuestionPath, activeStep + 1);

        if (questionItem.questions) {
            setQuestionPath(newQuestionPath);
            setActiveStep((prev) => prev + 1);
            if (!checkYesNoQuestion(questionItem)) {
                let newSteps = [];
                for (var i = 0; i <= activeStep + 1; i++) {
                    const questionItem = getQuestion(newQuestionPath, i);
                    if (!checkYesNoQuestion(questionItem)) {
                        newSteps.push(questionItem.label);
                    }
                }

                setSteps(newSteps);
                setStepperStep(newSteps.length - 1);
            }
            // clear up asins
            setAsins(DefaultAsins);
        } else {
            // show asins
            setAsins(questionItem.ASINS);
        }
    };

    const onUpdateStep = (step) => {
        setActiveStep(() => {
            let i = 0,
                newStep = 0;
            while (i < step) {
                newStep++;
                const questionItem = getQuestion(questionPath, newStep);
                if (!checkYesNoQuestion(questionItem)) {
                    i++;
                }
            }

            return newStep;
        });

        setSteps((prev) => prev.slice(0, step + 1));
        setStepperStep(step);

        // clear asins
        setAsins(DefaultAsins);
    };

    return (
        <BackgroundContainer ref={ref} color="lightDark" vertical={8}>
            <Container>
                <Stepper
                    steps={steps}
                    activeStep={stepperStep}
                    onUpdateIndex={onUpdateStep}
                />
                <Carousel
                    items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    questionPath={questionPath}
                    activeIndex={activeStep}
                    onSelectQuestion={onSelectQuestion}
                />
            </Container>

            <Box
                className="adt-results"
                bgcolor="background.primary"
                mt={2}
                pb={6}
                pt={5}>
                <Box mt={5} py={2}>
                    <Typography variant="h3" color="darkBlue">RECOMMENDED FOR YOU</Typography>
                </Box>
                <Box my={2} mt={4}>
                    <Container>
                        <ProductContainer
                            setDetailProduct={props.setDetailProduct}
                            asins={asins}
                        />
                    </Container>
                </Box>
            </Box>
        </BackgroundContainer>
    );
});

export default QuizContainer;
