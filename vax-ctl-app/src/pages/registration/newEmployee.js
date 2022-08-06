import styles from "./newEmployee.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Field from "../../components/Field/Field";
import { fieldsSetup } from "../../mocks/config";

const newEmployee = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={"/"}>
            <div className={styles.button}>RETURN TO HOMEPAGE</div>
          </Link>
          <h1 className={styles.title}>EMPLOYEE BOOKING</h1>
          <div className={styles.button}>Clear fields</div>
        </div>
        <div className={styles.form}>
          {fieldsSetup.map((setup, index) => {
            return <Field config={setup} key={index}></Field>;
          })}
        </div>

        <div className={styles.footer}>
          <div className={styles.button}>SUBMIT</div>
        </div>
      </div>
    </Layout>
  );
};

export default newEmployee;
