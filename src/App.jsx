import {WizardRoot} from './wizard/WizardRoot.jsx';
import StepBasicInfo from './steps/StepBasicInfo/StepBasicInfo.jsx';
import StepAboutYou from './steps/StepAboutYou/StepAboutYou.jsx';
import WizardNavigation from './components/WizardNavigation/WizardNavigation.jsx';
import WizardBox from './components/WizardBox/WizardBox.jsx';
import WizardStepContainer from './components/WizardStepContainer/WizardStepContainer.jsx';
import Step3 from './steps/Step03/Step3.jsx';
import Step4 from './steps/Step04/Step4.jsx';
import StepYouGetThePoint from './steps/StepYouGetThePoint/StepYouGetThePoint.jsx';

function App() {
  return (
    <>
      <WizardRoot
        steps={[
          {id: 'About you', component: StepBasicInfo},
          {id: 'Basic Info', component: StepAboutYou},
          {id: 'Step 3', component: Step3},
          {id: 'Step 4', component: Step4},
          {id: '...you get the point', component: StepYouGetThePoint}
        ]}
        onComplete={data => alert(`You have finished!. Your data is ${JSON.stringify(data)}`)}>
        <WizardBox>
          <WizardNavigation/>
          <WizardStepContainer/>
        </WizardBox>
      </WizardRoot>
    </>
  );
}

export default App;
