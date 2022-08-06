import SearchBar from "../SearchBar/SearchBar";
import styles from "./ToolBar.module.css";

const ToolBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>NUEVO EMPLEADO</div>
      <div className={styles.display_mode}>
        <div className={styles.filter}>FILTER</div>
        <SearchBar
          placeholder="Search an employee"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default ToolBar;
