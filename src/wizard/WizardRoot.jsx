import React, {useContext} from 'react';
import {WizardDataContext, WizardDataProvider} from './WizardDataContext.js';
import {WizardAPIContext, WizardAPIProvider} from './WizardAPIContext.js';
import {useWizard} from './useWizard.js';

export const WizardRoot = ({steps: originalSteps = [], onComplete, children}) => {
  const {data, api} = useWizard({originalSteps, onComplete});

  return <>
    <WizardDataProvider value={data}>
      <WizardAPIProvider value={api}>
        {children}
      </WizardAPIProvider>
    </WizardDataProvider>
  </>;
};

export const useWizardAPI = () => useContext(WizardAPIContext);
export const useWizardData = () => useContext(WizardDataContext);
