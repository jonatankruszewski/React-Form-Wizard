import React from 'react';
import _ from 'lodash';

import {useWizardAPI, useWizardData} from '../../wizard/WizardRoot.jsx';
import styles from './ButtonGroup.module.scss';

const ButtonGroup = ({onBack, onNext}) => {
  const {isCurrentStepLastStep, isCurrentStepFirstStep} = useWizardData();
  const {moveToPreviousStep, moveToNextStep, onComplete} = useWizardAPI();

  return (
    <div className={styles.buttonGroup}>
      {!isCurrentStepFirstStep && <button
        className={styles.button}
        onClick={()=> {
          _.isFunction(onBack) && onBack();
          moveToPreviousStep();
        }}
      >
        Back
      </button>}
      <button
        className={styles.button}
        onClick={()=>{
          _.isFunction(onNext) && onNext();
          isCurrentStepLastStep ? onComplete() : moveToNextStep()
        }}
      >
        {isCurrentStepLastStep ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default ButtonGroup;
