import React from 'react';
import styles from './StepBasicInfo.module.scss';
import {useWizardState} from '../../wizard/WizardRoot.jsx';
import StepWrapper from '../StepWrapper/StepWrapper.jsx';

const StepBasicInfo = () => {
  const {wizardState, setWizardState} = useWizardState();
  const [firstName, setFirstName] = React.useState(wizardState?.firstName || '');
  const [lastName, setLastName] = React.useState(wizardState?.lastName || '');
  const [email, setEmail] = React.useState(wizardState?.email || '');

  const onNext = () => setWizardState({...wizardState, firstName, lastName, email});

  return (
    <StepWrapper onNext={onNext}>
      <label className={styles.label}>
        <span>First Name</span>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}/>
      </label>
      <label className={styles.label}>
        <span>Last Name</span>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}/>
      </label>
      <label className={styles.label}>
        <span>Email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
      </label>
    </StepWrapper>
  );
};

export default StepBasicInfo;
