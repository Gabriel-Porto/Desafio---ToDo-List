import styles from "./App.module.css"
import rocket from "./assets/rocket.svg"
import { Input } from "./Components/Input"
import { Task, TaskType } from "./Components/Task"
import { useState, FormEvent, ChangeEvent } from "react"

import { PlusCircle } from "phosphor-react"

const todoList: TaskType[] = [
  {
    id: 1,
    content: "Estudar React",
    isCompleted: false,
  },
]

function App() {

  //TODO: Criar função para mostrar total e quantas tasks estão completas
  //TODO: Criar função para salvar no localStorage?

  const [tasks, setTasks] = useState<TaskType[]>(todoList)

  const [newTaskText, setNewTaskText] = useState("")

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
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
          />

          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.totalCreated}>
              <p>Tarefas criadas</p>
              <span>5</span>
            </div>
            <div className={styles.amountCompleted}>
              <p>Concluídas</p>
              <span>2 de 5</span>
            </div>
          </div>

          <div className={styles.list}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                isCompleted={task.isCompleted}
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
