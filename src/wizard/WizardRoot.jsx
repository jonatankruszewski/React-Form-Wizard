import React, {useCallback, useContext, useMemo, useReducer} from 'react';
import _ from 'lodash';
import {v4 as uuidv4} from 'uuid';
import {currentStepReducer} from './WizardData/WizardDataReducer.jsx';
import {WizardDataProvider, useWizardDataContext} from './WizardData/WizardDataContext.jsx';
import {WizardAPIProvider, useWizardAPIContext} from './WizardAPI/WizardAPIContext.jsx';
import {WizardStateProvider, useWizardStateContext} from './WizardState/WizardStateContext.jsx';

export const WizardRoot = ({steps: originalSteps = [], onComplete, children}) => {
  const mappedSteps = _.map(originalSteps, step => ({
    ...step,
    id: step?.id || uuidv4(),
    ignore: step?.ignore || false
  }));

  const [{steps, currentStepIndex}, dispatch] = useReducer(currentStepReducer, {
    steps: mappedSteps,
    currentStepIndex: 0
  });

  const currentStep = _.get(steps, currentStepIndex);

  const isCurrentStepFirstStep = currentStepIndex === 0 || !_.find(steps, (step, index) => index < currentStepIndex && !step.ignore);
  const stepsLength = _.size(steps);
  const isCurrentStepLastStep = stepsLength - 1 === currentStepIndex || !_.find(steps, (step, index) => index > currentStepIndex && !step.ignore);
  const currentStepComponent = currentStep?.component;
  const currentStepId = currentStep?.id;

  const data = useMemo(() => ({
    steps,
    currentStepIndex,
    isCurrentStepLastStep,
    isCurrentStepFirstStep,
    stepsLength,
    currentStepComponent,
    currentStepId
  }), [
    steps,
    currentStepIndex,
    currentStepId,
    currentStep,
    isCurrentStepLastStep,
    isCurrentStepFirstStep,
    stepsLength,
    currentStepComponent
  ]);

  return <>
    <WizardDataProvider value={data}>
      <WizardStateProvider>
        <WizardAPIProvider dispatch={useCallback(dispatch, [])} onComplete={onComplete}>
          {children}
        </WizardAPIProvider>
      </WizardStateProvider>
    </WizardDataProvider>
  </>;
};

export const useWizardData = useWizardDataContext;
export const useWizardState = useWizardStateContext;
export const useWizardAPI = useWizardAPIContext;
