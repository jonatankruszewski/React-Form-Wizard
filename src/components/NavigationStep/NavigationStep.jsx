import React from 'react';
import styles from './NavigationStep.module.scss';
import {GrLinkNext} from 'react-icons/gr';
import {useWizardAPI} from '../../wizard/WizardRoot.jsx';

const NavigationStep = ({stepName, isCurrentStep, ignore}) => {
  const {moveToStepById} = useWizardAPI();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (isCurrentStep) {
      return;
    }
    moveToStepById(stepName);
  };

  if (ignore) {
    return null;
  }

  return (
    <li
      className={styles.root}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isCurrentStep ?
        <GrLinkNext style={{color: 'hotpink'}} size={24}/> :
        <GrLinkNext style={{color: isHovered ? 'black' : 'lightgray'}} size={24}/>
      }
      <p>
        {isCurrentStep ? <strong>{stepName}</strong> : stepName}
      </p>
    </li>
  );
};

export default NavigationStep;
