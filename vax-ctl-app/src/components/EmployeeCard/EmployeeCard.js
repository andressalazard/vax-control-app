import Link from "next/link";
import { useEffect, useState } from "react";
import { titles } from "../../mocks/config";
import styles from "./EmployeeCard.module.css";
const EmployeeCard = (props) => {
  console.log(props.employee);

  const setSelectedEmployee = () => {
    localStorage.setItem("selectedEmployee", JSON.stringify(props.employee));
  };

  const eraseCard = () => {
    props.deleteCard(props.employee.ID);
  };

  return (
    <div className={styles.card}>
      <div className={styles.options}>
        <span className="material-icons">update</span>
        <span className="material-icons" onClick={eraseCard}>
          delete
        </span>
      </div>

      <div className={styles.container} onClick={setSelectedEmployee}>
        <div className={styles.header}>{titles.EMPLOYEE}</div>
        <div className={styles.presentation}>
          <div className={styles.pic}>
            <img src={props.employee.picture} alt="profile pic"></img>
          </div>
          <h1>{props.employee.shortName}</h1>
          <span>{props.employee.email}</span>
        </div>
        <div className={styles.status}>
          {props.employee.isVaccinated ? (
            <span className={styles.isVaccinated}>
              {titles.STATUS_VACCINATED}
            </span>
          ) : (
            <span>{titles.STATUS_PENDING}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
