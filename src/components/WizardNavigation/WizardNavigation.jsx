import React from 'react';
import {useWizardData, useWizardState} from '../../wizard/WizardRoot.jsx';
import styles from './WizardNavigation.module.scss';
import NavigationStep from '../NavigationStep/NavigationStep.jsx';

const WizardNavigation = () => {
  const {steps, currentStepIndex} = useWizardData();
  const {wizardState} = useWizardState();

  if (wizardState?.ignoreNavigation){
    return null;
  }

  return (
    <aside className={styles.root}>
      <h2>Steps</h2>
      <ul className={styles.steps}>
        {steps.length > 0 && steps
          .map(({id, status, ignore}, index) => (
              <NavigationStep
                stepName={id}
                isCurrentStep={index === currentStepIndex}
                status={status}
                key={id}
                ignore={ignore}
              />
            )
          )}
      </ul>
    </aside>
  )
    ;
};

WizardNavigation.propTypes = {};

export default WizardNavigation;
