import {WizardRoot} from './wizard/WizardRoot.jsx';
import StepBasicInfo from './steps/StepBasicInfo/StepBasicInfo.jsx';
import StepAboutYou from './steps/StepAboutYou/StepAboutYou.jsx';
import WizardNavigation from './components/WizardNavigation/WizardNavigation.jsx';
import WizardBox from './components/WizardBox/WizardBox.jsx';
import WizardStepContainer from './components/WizardStepContainer/WizardStepContainer.jsx';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.jsx';
import Step3 from './steps/Step03/Step3.jsx';

function App() {
  return (
    <>
      <WizardRoot
        steps={[
          {id: 'About you', component: StepBasicInfo},
          {id: 'Basic Info', component: StepAboutYou},
          {id: 'Step 3', component: Step3},
          {id: 'Step 4', component: ()=> <p>Some more steps again</p>},
          {id: '...you get the point', component: ()=> <p>This is all for now</p>}
        ]}
        onComplete={()=> alert('You have finished!')}>
        <WizardBox>
          <WizardNavigation/>
          <WizardStepContainer>
            <ButtonGroup/>
          </WizardStepContainer>
        </WizardBox>
      </WizardRoot>
    </>
  );
}

export default App;
