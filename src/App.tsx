import styles from "./App.module.css"
import rocket from "./assets/rocket.svg"
import { Input } from "./Components/Input"

import { PlusCircle } from "phosphor-react"

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

        <div className={styles.info}>
          <div className={styles.totalCreated}>
            <p>Tarefas criadas</p>
            <p>5</p>
          </div>
          <div className={styles.amountCompleted}>
            <p>Concluídas</p>
            <p>2 de 5</p>
          </div>
        </div>

        <div className="todoList">
          <div className="todo">
            <input type="checkbox" />
            <p>Estudar React</p>
            <button type="button">Remover</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
