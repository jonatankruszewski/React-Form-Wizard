import React from 'react';
import styles from './ButtonGroup.module.scss';
import {useWizardAPI, useWizardData} from '../../wizard/WizardRoot.jsx';

const ButtonGroup = () => {
  const {isCurrentStepLastStep, isCurrentStepFirstStep} = useWizardData();
  const {moveToPreviousStep, moveToNextStep, onComplete} = useWizardAPI();

  return (
    <div className={styles.buttonGroup}>
      {!isCurrentStepFirstStep && <button
        className={styles.button}
        onClick={moveToPreviousStep}
      >
        Back
      </button>}
      <button
        className={styles.button}
        onClick={isCurrentStepLastStep ? onComplete : moveToNextStep}
      >
        {isCurrentStepLastStep ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default ButtonGroup;
