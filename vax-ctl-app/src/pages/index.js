import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import TeamBoard from "../components/TeamBoard/TeamBoard";
import ToolBar from "../components/ToolBar/ToolBar";
import { employeesList } from "../mocks/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  let [employees, setEmployees] = useState(employeesList);
  const [keyword, setKeyword] = useState("");
  const [statsFilter, setStatsFilter] = useState("");
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.names.toLowerCase().includes(keyword) ||
      employee.lastnames.toLowerCase().includes(keyword) ||
      employee.shortName.toLowerCase().includes(keyword)
  );

  const vaccinatedEmployees = employees.filter((employee) => employee.isN);

  const updateEmployees = (employee) => {
    let aux = employees;
    aux.push(employee);
    localStorage.removeItem("newEmployee");
    setEmployees(aux);
  };

  const updateStatsFilter = (value) => {
    setStatsFilter(value);
  };

  const filterByStatus = () => {};

  const removeeEmployee = (ID) => {
    setEmployees(employees.filter((e) => e.ID !== ID));
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("newEmployee")) {
      let newEmployee = JSON.parse(localStorage.getItem("newEmployee"));
      updateEmployees(newEmployee);
    }
  });

  const handleChange = (e) => {
    e.preventDefault;
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      I've got {employees.length} employees!
      <ToolBar handleChange={handleChange}></ToolBar>
      <TeamBoard
        members={filteredEmployees}
        deleteCard={removeeEmployee}
      ></TeamBoard>
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
