import {WIZARD_API_ACTIONS} from './WizardAPIContext.js';
import _ from 'lodash';

export const currentStepReducer = ({steps, currentStepIndex, extraData}, {type, payload}) => {
  switch (type) {
  case WIZARD_API_ACTIONS.MOVE_TO_PREVIOUS_STEP:
    if (currentStepIndex === 0) {
      return {steps, currentStepIndex, extraData};
    }
    return {steps, currentStepIndex: currentStepIndex - 1, extraData};
  case WIZARD_API_ACTIONS.MOVE_TO_NEXT_STEP:
    if (currentStepIndex >= _.size(steps) - 1) {
      return {steps, currentStepIndex, extraData};
    }
    return {steps, currentStepIndex: currentStepIndex + 1, extraData};
  case WIZARD_API_ACTIONS.MOVE_TO_STEP_BY_ID:
    const {id} = payload;
    const targetIndex = _.findIndex(steps, {id});
    if (_.isUndefined(targetIndex)) {
      return {steps, currentStepIndex, extraData};
    }
    return {steps, currentStepIndex: targetIndex, extraData};
  case WIZARD_API_ACTIONS.MOVE_TO_STEP_BY_INDEX:
    const {stepIndex} = payload;
    if (stepIndex < 0 || stepIndex >= _.size(steps)) {
      return {steps, currentStepIndex, extraData};
    }
    return {steps, currentStepIndex: stepIndex, extraData};
  case WIZARD_API_ACTIONS.SET_EXTRA_DATA:
    const {extraData: newData} = payload;
    return {steps, currentStepIndex, extraData: {...extraData, ...newData}};
  default:
    return {steps, currentStepIndex, extraData};
  }
};
