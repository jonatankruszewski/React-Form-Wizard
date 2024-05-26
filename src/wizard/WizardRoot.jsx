import React, {useContext, useMemo, useReducer, useCallback} from 'react';
import _ from 'lodash';
import {v4 as uuidv4} from 'uuid';
import {currentStepReducer} from './WizardData/WizardDataReducer.jsx';
import {WizardDataContext, WizardDataProvider} from './WizardData/WizardDataContext.jsx';
import {WizardAPIContext, WizardAPIProvider} from './WizardAPI/WizardAPIContext.jsx';
import {WizardStateContext, WizardStateProvider} from './WizardState/WizardStateContext.jsx';

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
      <WizardAPIProvider dispatch={useCallback(dispatch, [])} onComplete={onComplete}>
        <WizardStateProvider>
          {children}
        </WizardStateProvider>
      </WizardAPIProvider>
    </WizardDataProvider>
  </>;
};

export const useWizardState = () => useContext(WizardStateContext);
export const useWizardAPI = () => useContext(WizardAPIContext);
export const useWizardData = () => useContext(WizardDataContext);
