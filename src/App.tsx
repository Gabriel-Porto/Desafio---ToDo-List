import styles from "./App.module.css"
import rocket from "./assets/rocket.svg"
import { Input } from "./Components/Input"
import { Task } from "./Components/Task"

import { PlusCircle } from "phosphor-react"

const todoList = [
  {
    id: 1,
    task: "Estudar React",
    isCompleted: false,
  },
  {
    id: 2,
    task: "lorem ipsum dolor sit amet  consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum  ",
    isCompleted: false,
  },
  {
    id: 3,
    task: "lorem ipsum dolor sit amet  consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum  ",
    isCompleted: false,
  },
  {
    id: 4,
    task: "lorem ipsum dolor sit amet  consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum  ",
    isCompleted: false,
  },
  {
    id: 5,
    task: "Estudar TypeScript",
    isCompleted: false,
  },
]

function App() {
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
                task={task.task}
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
