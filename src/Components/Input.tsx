import styles from "./Input.module.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, onChange, value }: InputProps) {
  return <input value={value} placeholder={placeholder} className={styles.input} onChange={onChange}/>
}
