import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BackgroundContainer, Typography, Stepper, Carousel } from 'components';
import ProductContainer from './ProductContainer';
import { getQuestion } from 'common/constant/questions';
import { defaultAsins as DefaultAsins } from 'common/data/products';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState([0]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [steps, setSteps] = React.useState(['TREATS']);
    const [asins, setAsins] = React.useState(DefaultAsins);

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
            // clear up asins
            setAsins(DefaultAsins);
        } else {
            // show asins
            setAsins(quesitonItem.ASINS);
        }
    };

    const onUpdateStep = (step) => {
        setActiveStep(step);

        // clear asins
        setAsins(DefaultAsins);
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
                <Box mt={5}>
                    <Typography variant="h2">RECOMMENDED FOR YOU</Typography>
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
