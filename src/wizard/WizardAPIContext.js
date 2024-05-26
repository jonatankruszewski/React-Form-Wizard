import {createContext, useContext} from 'react';

export const WIZARD_API_ACTIONS = {
  MOVE_TO_PREVIOUS_STEP: 'MOVE_TO_PREVIOUS_STEP',
  MOVE_TO_NEXT_STEP: 'MOVE_TO_NEXT_STEP',
  MOVE_TO_STEP_BY_ID: 'MOVE_TO_STEP_BY_ID',
  MOVE_TO_STEP_BY_INDEX: 'MOVE_TO_STEP_BY_INDEX',
  UPDATE_STEP_STATUS: 'UPDATE_STEP_STATUS',
  SET_EXTRA_DATA: 'SET_EXTRA_DATA',
  TOGGLE_IGNORE_STEP: 'TOGGLE_IGNORE_STEP',
};

export const WizardAPIContext = createContext({
  moveToPreviousStep: () => {},
  moveToNextStep: () => {},
  moveToStepById: (id) => {},
  moveToStepByIndex: (stepIndex) => {},
  onComplete: () => {},
  setExtraData: (extraData) => {},
  toggleIgnoreStep: (stepId, newState) => {},
});

export const WizardAPIProvider = WizardAPIContext.Provider;
