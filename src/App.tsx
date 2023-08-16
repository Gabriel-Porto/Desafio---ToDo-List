import styles from "./App.module.css"
import rocket from "./assets/rocket.svg"
import { Input } from "./Components/Input"
import { Task, TaskType } from "./Components/Task"
// import { useState } from "react"

import { PlusCircle } from "phosphor-react"

const todoList: TaskType[] = [
  {
    id: 1,
    content: "Estudar React",
    isCompleted: false,
  },
  {
    id: 2,
    content:
      "lorem ipsum dolor sit amet  consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum  ",
    isCompleted: false,
  },
  {
    id: 3,
    content:
      "lorem ipsum dolor sit amet  consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum  ",
    isCompleted: false,
  },
  {
    id: 4,
    content:
      "lorem ipsum dolor sit amet  consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum  ",
    isCompleted: false,
  },
  {
    id: 5,
    content: "Estudar TypeScript",
    isCompleted: false,
  },
]

function App() {

  // const [tasks, setTasks] = useState<TaskType[]>(todoList)

  // function deleteTask() {
  //   const TasksWithOutDeletedOne = todoList.filter((task) => task.id !== 1)

  //   setTasks(TasksWithOutDeletedOne)
  // }

  return (
    <div className={styles.wrapper}>
      <header>
        <img src={rocket} />
        <h1>
          to<span>do</span>
        </h1>
      </header>

      <main>
        <form className={styles.todoInput}>
          <Input placeholder="Adicione uma nova tarefa" />

          <button>
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
            {todoList.map((task) => (
              <Task
                key={task.id}
                task={task}
                isCompleted={task.isCompleted}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
