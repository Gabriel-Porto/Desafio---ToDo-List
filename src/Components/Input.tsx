import styles from "./Input.module.css"

interface InputProps {
    placeholder: string,
}

export function Input({ placeholder }: InputProps) {
  return <input placeholder={placeholder} className={styles.input} />
}
