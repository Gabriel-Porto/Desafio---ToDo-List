import styles from "./App.module.css"
import rocket from "./assets/rocket.svg"
import { Input } from "./Components/Input"
import { Task, TaskType } from "./Components/Task"
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react"

import { PlusCircle } from "phosphor-react"

const todoList: TaskType[] = [
  {
    id: 1,
    content: "Estudar React",
    isCompleted: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(todoList)

  const [newTaskText, setNewTaskText] = useState("")

  const amountTaskCompleted = tasks.filter(
    (task) => task.isCompleted === true
  ).length

  const isNewTaskEmpty = newTaskText.length === 0

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()

    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        content: newTaskText.trim(),
        isCompleted: false,
      },
    ])

    setNewTaskText("")
  }

  function handlenewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(id: number) {
    const TasksWithOutDeletedOne = tasks.filter((task) => task.id !== id)
    setTasks(TasksWithOutDeletedOne)
  }

  function handleCheckTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!")
      
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img src={rocket} />
        <h1>
          to<span>do</span>
        </h1>
      </header>

      <main>
        <form onSubmit={handleTaskSubmit} className={styles.todoInput}>
          <Input
            value={newTaskText}
            placeholder="Adicione uma nova tarefa"
            onChange={handlenewTaskTextChange}
            onInvalid={handleNewInvalidTask}
          />

          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.totalCreated}>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.amountCompleted}>
              <p>Concluídas</p>
              <span>
                {amountTaskCompleted} de {tasks.length}
              </span>
            </div>
          </div>

          <div className={styles.list}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                isCompleted={task.isCompleted}
                onCheckTask={handleCheckTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
