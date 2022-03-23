import styles from "./Button.module.css";

interface Props {
  children: string;
  buttonClass: string;
}

export const Button = ({ children, buttonClass }: Props) => {
  return (
    <button className={`${styles.button} ${styles[buttonClass]}`}>
      {children}
    </button>
  );
};
