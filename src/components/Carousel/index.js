import React from 'react';
import { Grid, Box } from '@material-ui/core';
import MuiCarousel from 'react-material-ui-carousel';
import { getQuestion, checkYesNoQuestion } from 'common/constant/questions';
import { Typography, QuestionItemContainer } from 'components';

const CarouselItem = ({ questionPath, index, onSelectQuestion }) => {
    const itemQuestion = React.useMemo(() => getQuestion(questionPath, index), [
        questionPath,
        index
    ]);

    return (
        <Box>
            <Box py={1}>
                <Typography variant="h3" color="darkBlue" align="center">
                    {itemQuestion.description}
                </Typography>
            </Box>
            {checkYesNoQuestion(itemQuestion) && (
                <Box my={1}>
                    <Typography align="center" variant="h3" color="darkBlue">
                        {itemQuestion.label}
                    </Typography>
                </Box>
            )}
            <Grid container direction="row" justify="center">
                {itemQuestion &&
                    itemQuestion.questions.map((question, index) => (
                        <Grid
                            key={`question-item-${question.question || index}`}
                            item
                            xs={12}
                            md={3}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <QuestionItemContainer
                                    onClick={() => onSelectQuestion(index)}
                                    url={question.icon}
                                    hoverURL={question.hoverIcon}
                                    label={
                                        question.icon
                                            ? question.label
                                            : question.question
                                    }
                                />
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
