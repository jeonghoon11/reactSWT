import Todo from "./TodoList";
import Calculator from "./Calculator";
import styles from "./Tool.module.css"

export default function Tool () {
    return (
        <div className={styles.container}>
            <Calculator />
            <Todo />
        </div>
    )
}