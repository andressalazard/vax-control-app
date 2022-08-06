import { useState } from "react";
import styles from "./EmployeeCard.module.css";
const EmployeeCard = (props) => {
    console.log(props.employee);

    return(
    <div className={styles.container}>
        <div className={styles.header}>EMPLEADO</div>
        <div className={styles.presentation}>
            <div className={styles.pic}>
                <img src={props.employee.picture} alt="profile pic"></img>
            </div>
            <h1>{props.employee.shortName}</h1>
            <span>{props.employee.email}</span>
        </div>
        <div className={styles.status}>
            {props.employee.isVaccinated ? <span className={styles.isVaccinated}>VACUNADO</span>:<span>PENDIENTE</span>}
        </div>
    </div>)


}

export default EmployeeCard;