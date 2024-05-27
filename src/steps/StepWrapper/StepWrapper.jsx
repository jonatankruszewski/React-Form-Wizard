import React from 'react';
import styles from './StepWrapper.module.scss';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.jsx';


const StepWrapper = ({children, onNext, onBack}) => {

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
      </div>
      <ButtonGroup onNext={onNext} onBack={onBack}/>
    </div>
  );
};

export default StepWrapper;
