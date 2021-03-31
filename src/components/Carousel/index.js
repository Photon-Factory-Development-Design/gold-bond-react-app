import React from 'react';
import { Grid, Button, Box } from '@material-ui/core';
import MuiCarousel from 'react-material-ui-carousel';
import { getQuestion, checkYesNoQuestion } from 'common/constant/questions';
import { Typography } from 'components';
import { IngredientItem } from 'containers/IngredientsContainer';

const CarouselItem = ({ questionPath, index, onSelectQuestion }) => {
    const itemQuestion = React.useMemo(() => getQuestion(questionPath, index), [
        questionPath,
        index
    ]);

    console.log(itemQuestion);

    return (
        <Box>
            {checkYesNoQuestion(itemQuestion) && (
                <Box my={1}>
                    <Typography align="center" variant="h2">
                        {itemQuestion.label}
                    </Typography>
                </Box>
            )}
            <Grid container direction="row" justify="center">
                {itemQuestion &&
                    itemQuestion.questions.map((question, index) => (
                        <Grid
                            key={`question-item-${question.question}`}
                            item
                            xs={12}
                            md={3}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                {question.icon ? (
                                    <IngredientItem
                                        onClick={() => onSelectQuestion(index)}
                                        url={question.icon}
                                        label={question.label}
                                    />
                                ) : (
                                    <Button
                                        style={{ height: '100%' }}
                                        onClick={() => onSelectQuestion(index)}
                                        fullWidth>
                                        {question.question}
                                    </Button>
                                )}
                            </Box>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

const Carousel = ({ items, questionPath, activeIndex, onSelectQuestion }) => {
    return (
        <MuiCarousel
            animation="slide"
            index={activeIndex}
            autoPlay={false}
            indicators={false}
            NextIcon={null}
            navButtonsProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}
            navButtonsWrapperProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}>
            {items.map((_, index) => (
                <CarouselItem
                    key={index}
                    questionPath={questionPath}
                    index={index}
                    onSelectQuestion={onSelectQuestion}
                />
            ))}
        </MuiCarousel>
    );
};

export default Carousel;
