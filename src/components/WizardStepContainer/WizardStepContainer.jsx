import React from 'react';
import styles from './WizardStepContainer.module.scss';
import { useWizardData} from '../../wizard/WizardRoot.jsx';

const WizardStepContainer = () => {
  const {currentStepComponent: CurrentStepComponent, currentStepId} = useWizardData();

  return (
    <main className={styles.main}>
      <h2>{currentStepId}</h2>
      <div className={styles.content}>
       <CurrentStepComponent/>
      </div>
    </main>
  );
};

export default WizardStepContainer;
