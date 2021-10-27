import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import { BackgroundContainer, Typography, Stepper, Carousel } from 'components';
import ProductContainer from './ProductContainer';
import {
    getQuestion,
    checkYesNoQuestion,
    getRecommendedItems
} from 'common/constant/questions';
import { defaultAsins as DefaultAsins } from 'common/data/products';
// styles
import styles from './QuizContainer.module.scss';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState([0]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [stepperStep, setStepperStep] = React.useState(0);
    const [steps, setSteps] = React.useState(['Categories']);
    const [asins, setAsins] = React.useState(DefaultAsins);
    const [showAll, setShowAll] = React.useState(false);

    const resultsRef = React.useRef(null);

    const getSteps = (questionPath, activeStep) => {
        let newSteps = ['Categories'];
        for (var i = 1; i <= activeStep + 1; i++) {
            const questionItem = getQuestion(questionPath, i);
            if (!checkYesNoQuestion(questionItem)) {
                newSteps.push(questionItem.label);
            }
        }

        return newSteps;
    };

    const onSelectQuestion = (index) => {
        const newQuestionPath = [].concat(
            questionPath.slice(0, activeStep + 1),
            index
        );
        const questionItem = getQuestion(newQuestionPath);

        if (questionItem.questions) {
            setQuestionPath(newQuestionPath);
            setActiveStep((prev) => prev + 1);
            if (!checkYesNoQuestion(questionItem)) {
                let newSteps = getSteps(newQuestionPath, activeStep);

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
        // setAsins(DefaultAsins);
        setQuestionPath((prev) => prev.slice(0, step + 1));
    };

    React.useEffect(() => {
        // update recommended products
        if (questionPath.length === 1) {
            const recommendedItems = getRecommendedItems(questionPath);
            setAsins(
                [].concat(
                    DefaultAsins,
                    recommendedItems.filter(
                        (item) => !DefaultAsins.includes(item)
                    )
                )
            );
        } else {
            setAsins(getRecommendedItems(questionPath));
        }
    }, [questionPath]);

    const onGoBack = () => {
        // onUpdateStep(steps.length - 2);
        const newQuestionPath = questionPath.slice(0, questionPath.length - 1);
        const newSteps = getSteps(newQuestionPath, newQuestionPath.length - 2);
        setSteps(newSteps);
        setActiveStep((prev) => prev - 1);
        setQuestionPath(newQuestionPath);
        setStepperStep(newSteps.length - 1);
    };

    const onMoveDetailSection = React.useCallback(() => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, []);

    return (
        <BackgroundContainer ref={ref} color="lightDark" vertical={8}>
            <Container>
                <Stepper
                    steps={steps}
                    activeStep={stepperStep}
                    onUpdateIndex={onUpdateStep}
                    onGoBack={onGoBack}
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
                pt={5}
                ref={resultsRef}>
                <Box mt={5} py={2}>
                    <Typography
                        variant="h3"
                        color="darkBlue"
                        className={styles.recommendText}>
                        RECOMMENDED FOR YOU ({asins.length})
                    </Typography>
                </Box>
                <Box my={2} mt={4}>
                    <Container>
                        <ProductContainer
                            setDetailProduct={props.setDetailProduct}
                            asins={asins}
                            onMoveDetailSection={onMoveDetailSection}
                            showAll={showAll}
                        />

                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            mt={3}>
                            <Button
                                variant="text"
                                onClick={() => setShowAll((prev) => !prev)}>
                                {showAll ? 'Show less' : 'Show more'}
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </BackgroundContainer>
    );
});

export default QuizContainer;
