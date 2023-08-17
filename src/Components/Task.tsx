import { useState } from "react"
import styles from "./Task.module.css"
import { Trash } from "phosphor-react"
import { Checkbox } from "./Checkbox"

interface TaskProps {
  task: TaskType
  isCompleted: boolean
  onDeleteTask: (id: number) => void
  onCheckTask: (id: number) => void
}

export interface TaskType {
  id: number
  content: string
  isCompleted: boolean
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(task.isCompleted)

  function toggleTaskDone() {
    onCheckTask(task.id)
    setIsTaskCompleted(!isTaskCompleted)
  }

  function handleDeleteTask() {

    onDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <Checkbox isCompleted={isTaskCompleted} onCheckTask={toggleTaskDone} />

      {isTaskCompleted ? (
        <label className={styles.labelChecked} htmlFor="task">
          {task.content}
        </label>
      ) : (
        <label className={styles.labelNotChecked} htmlFor="task">
          {task.content}
        </label>
      )}

      <button onClick={handleDeleteTask} className={styles.deleteTask}>
        <Trash />
      </button>
    </div>
  )
}
