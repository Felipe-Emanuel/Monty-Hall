import styles from "@style/numericalInput.module.css";

interface NumericalInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function NumericalInput({ value, text, onChange }: NumericalInputProps) {
  const dec = () => onChange(value - 1);
  const inc = () => onChange(value + 1);

  return (
    <div className={styles.numericalInput}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}
