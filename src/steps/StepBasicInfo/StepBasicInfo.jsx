import React from 'react';
import styles from './StepBasicInfo.module.scss';

const StepBasicInfo = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <div>
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
    </div>
  );
};

export default StepBasicInfo;
