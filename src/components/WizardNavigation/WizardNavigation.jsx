import React from 'react';
import {useWizardData} from '../../wizard/WizardRoot.jsx';
import NavigationStep from '../NavigationStep/NavigationStep.jsx';
import styles from './WizardNavigation.module.scss';

const WizardNavigation = () => {
  const {steps, currentStepIndex} = useWizardData();

  return (
    <aside className={styles.root}>
      <h4>Steps</h4>
      <ul className={styles.steps}>
        {steps.length > 0 && steps.map(({id, status}, index) => (
          <NavigationStep
            stepName={id}
            isCurrentStep={index === currentStepIndex}
            status={status}
            key={id}
          />
        ))}
      </ul>
    </aside>
  );
};

WizardNavigation.propTypes = {};

export default WizardNavigation;
