import { useEffect, useRef, useState } from "react";
import styles from "./Field.module.css";

const Field = (props) => {
  const [error, SetError] = useState(false);
  const [userInput, SetUserInput] = useState("");
  const ref = useRef();

  useEffect(() => {
    props.updateEmployee(props.config.id, userInput);
  }, [userInput]);

  const handleChange = (e) => {
    const newValueIsValid = !e.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        SetError(false);
      }
    }

    SetUserInput(e.target.value);
  };

  const clearField = () => {
    SetUserInput("");
    SetError(false);
  };

  const handleBlur = (e) => {
    if (e.target.validity.patternMismatch) {
      ref.current.focus();
      SetError(true);
    }
  };

  return (
    <div className={styles.container}>
      <label for={props.config.id}>{props.config.label}</label>
      <div className={styles.field}>
        <input
          type={props.config.type}
          placeholder={props.config.placeholder}
          id={props.config.id}
          value={userInput}
          pattern={props.config.rule}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={ref}
          required
          maxLength={props.config.maxLength}
        />
        {userInput !== "" && (
          <div className={styles.delete_button} onClick={clearField}>
            <span class="material-icons">delete</span>
          </div>
        )}
      </div>
      {error && <p className={styles.error}>{props.config.errorMessage}</p>}
    </div>
  );
};

export default Field;
