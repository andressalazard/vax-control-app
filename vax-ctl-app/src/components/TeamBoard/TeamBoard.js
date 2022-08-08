import { useEffect } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./TeamBoard.module.css";

const TeamBoard = ({ members, deleteCard }) => {
  useEffect(() => {
    console.log("miembros: ", members);
  });

  return (
    <div className={styles.container}>
      {members.map((employee, index) => {
        return (
          <EmployeeCard
            employee={employee}
            deleteCard={deleteCard}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TeamBoard;
