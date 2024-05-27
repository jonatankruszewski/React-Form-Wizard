import {createContext, useContext, useState} from 'react';

const WizardStateContext = createContext({
  setWizardState: () => {},
  wizardState: {}
});

export const useWizardStateContext = () => useContext(WizardStateContext);

export const WizardStateProvider = ({children}) => {
  const [wizardState, setWizardState] = useState({});

  return (
    <WizardStateContext.Provider value={{wizardState, setWizardState}}>
      {children}
    </WizardStateContext.Provider>
  );
};
