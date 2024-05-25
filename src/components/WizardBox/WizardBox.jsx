import styles from './WizardBox.module.scss';

const WizardBox = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default WizardBox;
