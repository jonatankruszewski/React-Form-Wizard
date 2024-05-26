import {createContext, useMemo} from 'react';

export const WIZARD_API_ACTIONS = {
  MOVE_TO_PREVIOUS_STEP: 'MOVE_TO_PREVIOUS_STEP',
  MOVE_TO_NEXT_STEP: 'MOVE_TO_NEXT_STEP',
  MOVE_TO_STEP_BY_ID: 'MOVE_TO_STEP_BY_ID',
  MOVE_TO_STEP_BY_INDEX: 'MOVE_TO_STEP_BY_INDEX',
  UPDATE_STEP_STATUS: 'UPDATE_STEP_STATUS',
  TOGGLE_IGNORE_STEP: 'TOGGLE_IGNORE_STEP'
};

export const WizardAPIContext = createContext({
  moveToPreviousStep: () => {},
  moveToNextStep: () => {},
  moveToStepById: (id) => {},
  moveToStepByIndex: (stepIndex) => {},
  onComplete: () => {},
  toggleIgnoreStep: (stepId, newState) => {}
});

export const WizardAPIProvider = ({dispatch, children, onComplete}) => {

  const api = useMemo(() => ({
      moveToPreviousStep: () => dispatch({type: WIZARD_API_ACTIONS.MOVE_TO_PREVIOUS_STEP}),
      moveToNextStep: () => dispatch({type: WIZARD_API_ACTIONS.MOVE_TO_NEXT_STEP}),
      moveToStepById: id => dispatch({
        type: WIZARD_API_ACTIONS.MOVE_TO_STEP_BY_ID,
        payload: {id}
      }),
      moveToStepByIndex: stepIndex => dispatch({
        type: WIZARD_API_ACTIONS.MOVE_TO_STEP_BY_INDEX,
        payload: {stepIndex}
      }),
      onComplete,
      toggleIgnoreStep: (stepId, newState) => dispatch({
        type: WIZARD_API_ACTIONS.TOGGLE_IGNORE_STEP,
        payload: {stepId, newState}
      })
    }
  ), []);

  return (
    <WizardAPIContext.Provider value={api}>
      {children}
    </WizardAPIContext.Provider>
  );
};
