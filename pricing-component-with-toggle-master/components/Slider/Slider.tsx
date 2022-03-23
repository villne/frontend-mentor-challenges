import styles from "./Slider.module.css";

interface Props {
  checked: boolean;
  setChecked: (active: boolean) => void;
}

export const Slider = ({ checked, setChecked }: Props) => {
  const handleClick = () => setChecked(!checked);

  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" onChange={handleClick} checked={checked} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};
