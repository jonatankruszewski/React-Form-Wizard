import React from 'react';
import styles from './WizardStepContainer.module.scss';
import { useWizardData} from '../../wizard/WizardRoot.jsx';

const WizardStepContainer = ({children}) => {
  const {currentStepComponent: CurrentStepComponent} = useWizardData();

  return (
    <main className={styles.main}>
      <h4>About you</h4>
      <div className={styles.content}>
       <CurrentStepComponent/>
      </div>
      {children}
    </main>
  );
};

export default WizardStepContainer;
