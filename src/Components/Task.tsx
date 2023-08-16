import { useState } from "react"
import styles from "./Task.module.css"
import { Trash } from "phosphor-react"
import { Checkbox } from "./Checkbox"

interface TaskProps {
  task: TaskType
  isCompleted: boolean
}

export interface TaskType {
  id: number
  content: string
  isCompleted: boolean
}

export function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(task.isCompleted)

  function toggleTaskDone() {
    setIsTaskCompleted(!isTaskCompleted)
  }

  function deleteTask() {

  }

  return (
    <div className={styles.task}>
      <Checkbox isCompleted={isTaskCompleted} checkTask={toggleTaskDone} />

      {isTaskCompleted ? (
        <label className={styles.labelChecked} htmlFor="task">
          {task.content}
        </label>
      ) : (
        <label className={styles.labelNotChecked} htmlFor="task">
          {task.content}
        </label>
      )}

      <button onClick={deleteTask} className={styles.deleteTask}>
        <Trash />
      </button>
    </div>
  )
}
