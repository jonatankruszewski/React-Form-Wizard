import React from 'react';
import styles from './Step3.module.scss';
import {useWizardAPI, useWizardData, useWizardState} from '../../wizard/WizardRoot.jsx';

const Step3 = () => {
  const {toggleIgnoreStep} = useWizardAPI();
  const {steps} = useWizardData();
  const {wizardState, setWizardState} = useWizardState();
  const step4 = steps.find((step) => step.id === 'Step 4');

  return (
    <>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={step4?.ignore || false}
          onChange={(e) => {
            toggleIgnoreStep('Step 4', e.target.checked);
          }}
        />
        <span>Remove Step 4?</span>
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={wizardState?.ignoreNavigation || false}
          onChange={(e) => {
            setWizardState({...wizardState, ignoreNavigation: e.target.checked});
          }}
        />
        <span>Remove Navigation</span>
      </label>
    </>
  );
};

export default Step3;
