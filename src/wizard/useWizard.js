import _ from 'lodash';
import {v4 as uuidv4} from 'uuid';
import {useMemo, useReducer} from 'react';
import {currentStepReducer} from './WizardReducer.js';
import {WIZARD_API_ACTIONS} from './WizardAPIContext.js';

export const useWizard = ({originalSteps, onComplete}) => {
  const mappedSteps = _.map(originalSteps, step => ({
    ...step,
    id: step?.id || uuidv4(),
    status: step?.status || 'notStarted'
  }));

  const [{steps, currentStepIndex}, dispatch] = useReducer(currentStepReducer, {
    steps: mappedSteps,
    currentStepIndex: 0
  });

  const currentStep = _.get(steps, currentStepIndex);

  const isCurrentStepFirstStep = currentStepIndex === 0;
  const stepsLength = _.size(steps);
  const isCurrentStepLastStep = stepsLength - 1 === currentStepIndex;
  const currentStepComponent = currentStep?.component;
  const currentStepStatus = currentStep?.status;
  const currentStepId = currentStep?.id;

  const data = useMemo(() => ({
    steps,
    currentStepIndex,
    isCurrentStepLastStep,
    isCurrentStepFirstStep,
    stepsLength,
    currentStepComponent,
    currentStepStatus,
    currentStepId
  }), [
    steps,
    currentStepIndex,
    currentStepId,
    currentStep,
    isCurrentStepLastStep,
    isCurrentStepFirstStep,
    stepsLength,
    currentStepComponent,
    currentStepStatus
  ]);

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
    setExtraData: extraData => dispatch({
      type: WIZARD_API_ACTIONS.SET_EXTRA_DATA,
      payload: {extraData}
    })
  }), []);

  return {api, data};
};

