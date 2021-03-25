import React from 'react';
import { Stepper as MuiStepper, Step, StepButton } from '@material-ui/core';

const Stepper = ({ steps, activeStep, onUpdateIndex }) => {
    return (
        <MuiStepper alternativeLabel nonLinear activeStep={activeStep}>
            {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
                return (
                    <Step key={label} {...stepProps}>
                        <StepButton
                            onClick={() => onUpdateIndex(index)}
                            {...buttonProps}>
                            {label}
                        </StepButton>
                    </Step>
                );
            })}
        </MuiStepper>
    );
};

export default Stepper;
