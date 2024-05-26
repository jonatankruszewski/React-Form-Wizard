import {createContext} from 'react';

export const WizardDataContext = createContext({
  steps: [],
  currentStepIndex: 0,
  extraData: {},
  isCurrentStepLastStep: null,
  isCurrentStepFirstStep: null,
  stepsLength: 0,
  currentStepComponent: null,
  currentStepStatus: null,
  currentStepId: null
});

export const WizardDataProvider = WizardDataContext.Provider;
