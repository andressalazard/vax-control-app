import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./TeamBoard.module.css";

const TeamBoard = ({ members }) => {
  return (
    <div className={styles.container}>
      {members.map((employee, index) => {
        return <EmployeeCard employee={employee} key={index} />;
      })}
    </div>
  );
};

export default TeamBoard;
