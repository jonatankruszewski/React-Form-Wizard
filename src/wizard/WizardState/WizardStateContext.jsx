import {createContext, useState} from 'react';

export const WizardStateContext = createContext({
  setWizardState: () => {},
  wizardState: {}
});

export const WizardStateProvider = ({children}) => {
  const [wizardState, setWizardState] = useState({});

  return (
    <WizardStateContext.Provider value={{wizardState, setWizardState}}>
      {children}
    </WizardStateContext.Provider>
  );
};
