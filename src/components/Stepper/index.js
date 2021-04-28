import React from 'react';
import {
    Stepper as MuiStepper,
    Step,
    StepButton,
    makeStyles,
    StepLabel
} from '@material-ui/core';

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

const Stepper = ({ steps, activeStep, onUpdateIndex }) => {
    const classes = useStyles();

    return (
        <MuiStepper alternativeLabel nonLinear activeStep={activeStep} classes={{ root: classes.root }}>
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
                                {label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                );
            })}
        </MuiStepper>
    );
};

export default Stepper;
