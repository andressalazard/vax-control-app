import { useEffect } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./TeamBoard.module.css";

const TeamBoard = ({ members }) => {
  useEffect(() => {
    console.log("miembros: ", members);
  });

  return (
    <div className={styles.container}>
      {members.map((employee, index) => {
        return <EmployeeCard employee={employee} key={index} />;
      })}
    </div>
  );
};

export default TeamBoard;
