import styles from "./TodoList.module.css";
import { useState } from "react";

export default function TodoList() {
    const [init, setInit] = useState("");
    const [list,setList] = useState([]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Note.
            </div>
            <div className={styles.listCreatBox}>
                <input type="text" className={styles.listBox} placeholder="오늘은 무엇을 하시나요?" />
            </div>
            <div>
                <ul className={styles.none}>
                    <li className={styles.textContainer}>
                        <label className={styles.list}>
                            <input type="checkbox" />
                            <span>Sample List item</span>
                        </label>
                        <button className={styles.list_botton}>X</button>
                    </li>
                </ul>
            </div>
        </div>   
    )
}