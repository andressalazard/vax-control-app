import styles from "./newEmployee.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Field from "../../components/Field/Field";
import { fieldsSetup, titles } from "../../mocks/config";
import { useEffect, useState } from "react";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const newEmployee = () => {
  const [register, SetRegister] = useState({
    first_name: "",
    last_name: "",
    ID: "",
    email: "",
  });

  const changeData = (key, value) => {
    SetRegister((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const generateEmployee = () => {
    let employee = {
      names: register.first_name,
      lastnames: register.last_name,
      shortName: register.first_name + " " + register.last_name,
      ID: register.ID,
      email: register.email,
      picture: titles.EMPLOYEE_LOGO,
      isVaccinated: false,
    };
    localStorage.setItem("newEmployee", JSON.stringify(employee));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <ReturnButton></ReturnButton>
          <h1 className={styles.title}>{titles.USER_REGISTRATION}</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.form_header}>
            <img src={titles.EMPLOYEE_LOGO} alt="employee logo"></img>
          </div>
          <section>
            <div className={styles.section_header}>
              {titles.EMPLOYEE_PROFILE}
            </div>
            <div className={styles.section_fields}>
              {fieldsSetup.map((setup, index) => {
                return (
                  <Field
                    config={setup}
                    key={index}
                    updateEmployee={changeData}
                  ></Field>
                );
              })}
            </div>
          </section>
          <div className={styles.footer}>
            <Link href="/">
              <div className={styles.submit_button} onClick={generateEmployee}>
                {titles.ADD_NEW_EMPLOYEE}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default newEmployee;
