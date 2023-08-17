import styles from "./Checkbox.module.css"
import { Check } from "phosphor-react"

interface CheckboxProps {
  onCheckTask: () => void
  isCompleted: boolean
}

export function Checkbox({ onCheckTask, isCompleted }: CheckboxProps) {
  
  function handleToggleTaskDone() {
    onCheckTask()
  }

  return (
 
      <button
        onClick={handleToggleTaskDone}
        className={
          isCompleted ? styles.checkboxChecked : styles.checkboxNotChecked
        }
      >
        {isCompleted ? <Check /> : ''}
      </button>

  )
}
