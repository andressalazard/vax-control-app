import styles from "./newEmployee.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Field from "../../components/Field/Field";
import { fieldsSetup, titles } from "../../mocks/config";
import { useEffect, useState } from "react";

const newEmployee = () => {
  const [employee, SetEmployee] = useState({
    first_name: "",
    last_name: "",
    ID: "",
    email: "",
  });

  const changeData = (key, value) => {
    SetEmployee((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/">
            <div className={styles.home_button}>
              <span class="material-icons">arrow_back_ios</span>
              {titles.RETURN_TO_HOMEPAGE}
            </div>
          </Link>
          <h1 className={styles.title}>{titles.USER_REGISTRATION}</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.form_header}>
            <img src="/svg-profile-logo.svg" alt="employee logo"></img>
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
            <Link
              href={{
                pathname: "/",
                query: employee,
              }}
            >
              <div className={styles.submit_button}>
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
