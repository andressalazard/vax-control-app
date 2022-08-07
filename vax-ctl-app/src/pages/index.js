import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import TeamBoard from "../components/TeamBoard/TeamBoard";
import ToolBar from "../components/ToolBar/ToolBar";
import { employeesList } from "../mocks/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  let [employees, setEmployees] = useState(employeesList);
  const [keyword, setKeyword] = useState("");

  const updateEmployees = (employee) => {
    let aux = employees;
    aux.push(employee);
    localStorage.removeItem("newEmployee");
    setEmployees(aux);
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("newEmployee")) {
      let newEmployee = JSON.parse(localStorage.getItem("newEmployee"));
      updateEmployees(newEmployee);
    }

    localStorage.setItem("team", JSON.stringify(employees));
  });

  const handleChange = (e) => {
    e.preventDefault;
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      I've got {employees.length} employees!
      <ToolBar handleChange={handleChange}></ToolBar>
      <TeamBoard members={employees}></TeamBoard>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://randomuser.me/api/?results=10");
  let people = JSON.stringify(res);

  return {
    props: {
      people,
    },
  };
};
