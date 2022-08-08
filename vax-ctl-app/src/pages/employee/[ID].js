import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { titles } from "../../mocks/config";
import styles from "./employee.module.css";

const Employee = () => {
  const localEmployee = JSON.parse(
    localStorage.getItem("selectedEmployee") || {}
  );
  const [selectedEmployee, setSelectedEmployee] = useState(localEmployee);

  const setEmployeeData = () => {
    if (localStorage.hasOwnProperty("selectedEmployee")) {
      return JSON.parse(localStorage.getItem("selectedEmployee"));
    } else {
      return {};
    }
  };

  useEffect(() => {
    console.log(selectedEmployee);
  });

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <ReturnButton />
          <h1>{titles.EMPLOYEE_DETAILS_INFORMATION}</h1>
        </div>

        <div className={styles.content}>
          <img src={selectedEmployee.picture} alt="profile photo"></img>
          {selectedEmployee.shortName}
        </div>

        <div className={styles.footer}>FOOTER</div>
      </div>
    </Layout>
  );
};

export default Employee;
