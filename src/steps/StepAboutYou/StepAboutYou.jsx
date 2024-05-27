import React from 'react';
import styles from './StepAboutYou.module.scss';
import {useWizardState} from '../../wizard/WizardRoot.jsx';
import StepWrapper from '../StepWrapper/StepWrapper.jsx';

const StepAboutYou = () => {
  const {wizardState, setWizardState} = useWizardState();
  const [favouriteMovie, setFavouriteMovie] = React.useState(wizardState?.favouriteMovie || '');
  const [favouriteSong, setFavouriteSong] = React.useState(wizardState?.favouriteSong || '');

  const onNext = () => setWizardState({...wizardState, favouriteMovie, favouriteSong});

  return (
    <StepWrapper onNext={onNext}>
      <label className={styles.label}>
        <span>Favourite movie</span>
        <input
          type="text"
          onChange={(e) => setFavouriteMovie(e.target.value)}
          value={favouriteMovie}/>
      </label>
      <label className={styles.label}>
        <span>Favourite Song</span>
        <input
          type="text"
          onChange={(e) => setFavouriteSong(e.target.value)}
          value={favouriteSong}/>
      </label>
    </StepWrapper>
  );
};

export default StepAboutYou;
