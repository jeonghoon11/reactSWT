import React, { useState } from "react";
import styles from "./Calculator.module.css"; // CSS Module import

export default function Calculator() {
  const [result, setResult] = useState("0");

  const init = () => {
    setResult("0");
  };

  const inp = (value) => {
    setResult((prev) => (prev === "0" ? value : prev + value));
  };

  const resul = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult("Error");
    }
  };

  const back = () => {
    setResult((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  return (
    <div className={styles.container}>
      <h1>계산기 만들기</h1>
      <hr />
      <input
        type="text"
        className={styles.result}
        value={result}
        readOnly
        style={{ width: "290px" }}
      />
      <table>
        <tbody>
          <tr>
            <td>
              <button className={styles.button} onClick={back}>
                BACK
              </button>
            </td>
            <td>
              <button className={styles.button} onClick={init}>
                CE
              </button>
            </td>
            <td>
              <button className={styles.button} onClick={init}>
                C
              </button>
            </td>
            <td>
              <button className={styles.button} onClick={resul}>
                =
              </button>
            </td>
          </tr>
          {[
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["0", "+", "NONE", "NONE"],
          ].map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <button
                    className={styles.button}
                    onClick={() => value !== "NONE" && inp(value)}
                  >
                    {value}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}