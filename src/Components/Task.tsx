import { useState } from "react"
import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

interface TaskProps {
  task: string
  isCompleted: boolean
}

export function Task({ task = "", isCompleted = false }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted)

  function handleTaskDone() {
    setIsTaskCompleted(!isTaskCompleted)
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkbox} />
      <label htmlFor="task">{task}</label>

      <button onClick={handleTaskDone} className={styles.deleteTask}>
        <Trash  />
      </button>
    </div>
  )
}
