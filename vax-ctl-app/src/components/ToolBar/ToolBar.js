import SearchBar from "../SearchBar/SearchBar";
import styles from "./ToolBar.module.css";
import Link from "next/link";

const ToolBar = (props) => {
  return (
    <div className={styles.container}>
      <Link href={"/registration/newEmployee"}>
        <div className={styles.button}>NUEVO EMPLEADO</div>
      </Link>
      <div className={styles.display_mode}>
        <SearchBar
          placeholder="Search an employee"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default ToolBar;
