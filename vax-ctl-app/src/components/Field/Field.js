import styles from "./Field.module.css";

const Field = (props) => {
  return (
    <div className={styles.container}>
      <label for={props.config.id}>{props.config.label}</label>
      <input
        type={props.config.type}
        placeholder={props.config.placeholder}
        id={props.config.id}
      />
    </div>
  );
};

export default Field;
