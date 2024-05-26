import React from 'react';
import styles from './StepAboutYou.module.scss';

const StepAboutYou = () => {
  const [favouriteMovie, setFavouriteMovie] = React.useState('');
  const [favouriteSong, setFavouriteSong] = React.useState('');

  return (
    <div>
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
    </div>
  );
};

export default StepAboutYou;
