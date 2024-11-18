import styles from "./TodoList.module.css";
import { useState } from "react";

export default function TodoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (index) => {
        setCheckedItems(
            checkedItems.map((isChecked, i) =>
                i === index ? !isChecked : isChecked
            )
        );
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() === "") return ;
        setItems([...items, inputValue]);
        setCheckedItems([...checkedItems, false]);
        setInputValue("");
    };

    const handleRemoveItem = (indextoRemove) => {
        setItems(items.filter((_, index) => index !== indextoRemove));
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Note.
            </div>
            <div className={styles.listCreatBox}>
                <input type="text" className={styles.listBox} placeholder="오늘은 무엇을 하시나요?"
                value={inputValue} onChange={handleChange} />
                <button onClick={handleAddItem} className={styles.addButton}>↓</button>
            </div>
            <div>
                <ul className={styles.none}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.textContainer}>
                            <label className={styles.list}>
                                <input type="checkbox" className={styles.checkbox} onChange={() => handleCheckboxChange(index)}
                                    checked={checkedItems[index]}/>
                                <span className={
                                    checkedItems[index] ? styles.checked_list_item : ""}>{item}</span>
                            </label>
                        <button className={styles.list_botton}
                                onClick={() => handleRemoveItem(index)}>X</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>   
    )
}