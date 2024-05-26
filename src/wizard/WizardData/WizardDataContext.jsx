import {createContext} from 'react';

export const WizardDataContext = createContext({
  steps: [],
  currentStepIndex: 0,
  isCurrentStepLastStep: null,
  isCurrentStepFirstStep: null,
  stepsLength: 0,
  currentStepComponent: null,
  currentStepId: null
});

export const WizardDataProvider = WizardDataContext.Provider;
