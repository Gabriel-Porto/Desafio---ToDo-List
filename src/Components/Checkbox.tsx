import styles from "./Checkbox.module.css"
import { Check } from "phosphor-react"

interface CheckboxProps {
  checkTask: () => void
  isCompleted: boolean
}

export function Checkbox({ checkTask, isCompleted }: CheckboxProps) {
  
  function handleToggleTaskDone() {
    checkTask()
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
