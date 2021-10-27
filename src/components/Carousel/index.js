import React from 'react';
import { Box } from '@material-ui/core';
import MuiCarousel from 'react-material-ui-carousel';
import { getQuestion, checkYesNoQuestion } from 'common/constant/questions';
import { Typography, QuestionItemContainer } from 'components';
// styles
import styles from './Carousel.module.scss';

const CarouselItem = ({ questionPath, index, onSelectQuestion }) => {
    const [selectedQuestion, setQuestion] = React.useState(null);
    const itemQuestion = React.useMemo(
        () => getQuestion(questionPath.slice(0, index + 1)),
        [questionPath]
    );

    const _onSelectQuestion = React.useCallback(
        (question, index) => {
            setQuestion(question.question);
            onSelectQuestion(index);
        },
        [onSelectQuestion]
    );

    return (
        <Box>
            <Box py={1}>
                <Typography variant="h3" color="darkBlue" align="center" className={styles.description}>
                    {itemQuestion.description}
                </Typography>
            </Box>
            {checkYesNoQuestion(itemQuestion) && (
                <Box my={1}>
                    <Typography align="center" variant="h3" color="darkBlue" className={styles.description}>
                        {itemQuestion.label}
                    </Typography>
                </Box>
            )}
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                flexWrap="wrap">
                {itemQuestion &&
                    itemQuestion.questions.map((question, index) => (
                        <Box
                            width={150}
                            key={`question-item-${question.question || index}`}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <QuestionItemContainer
                                    onClick={() =>
                                        _onSelectQuestion(question, index)
                                    }
                                    url={question.icon}
                                    hoverURL={question.hoverIcon}
                                    selected={
                                        selectedQuestion === question.question
                                    }
                                    label={
                                        question.icon
                                            ? question.label
                                            : question.question
                                    }
                                />
                            </Box>
                        </Box>
                    ))}
            </Box>
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
            className={styles.carousel}
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
