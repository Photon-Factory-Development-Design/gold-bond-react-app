import React from 'react';
import {
    Stepper as MuiStepper,
    Step,
    StepButton,
    makeStyles,
    StepLabel,
    Button
} from '@material-ui/core';
// styles
import styles from './Stepper.module.scss';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#F3EDEC'
    },
    iconContainer: {
        transform: 'scale(1)'
    },
    labelContainer: {
        color: '#003D54 !important'
    }
});

const Stepper = ({
    steps,
    activeStep,
    onUpdateIndex,
    onGoBack: propsOnGoBack
}) => {
    const classes = useStyles();

    const onGoBack = (e) => {
        e.preventDefault();
        e.stopPropagation();

        propsOnGoBack();
    };

    return (
        <MuiStepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            classes={{ root: classes.root }}>
            {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
                return (
                    <Step key={label} {...stepProps}>
                        <StepButton
                            onClick={() => onUpdateIndex(index)}
                            {...buttonProps}>
                            <StepLabel
                                classes={{
                                    iconContainer: classes.iconContainer,
                                    labelContainer: classes.labelContainer
                                }}>
                                <div className={styles.stepperLabel}>{label}</div>
                                {steps.length > 1 &&
                                    steps.length === index + 1 && (
                                        <Button
                                            variant="text"
                                            onClick={onGoBack}>
                                            Go Back
                                        </Button>
                                    )}
                            </StepLabel>
                        </StepButton>
                    </Step>
                );
            })}
        </MuiStepper>
    );
};

export default Stepper;
