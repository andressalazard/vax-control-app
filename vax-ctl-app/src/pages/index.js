import Head from 'next/head'
import Image from 'next/image'
import EmployeeCard from '../components/EmployeeCard/EmployeeCard'
import Layout from '../components/Layout/Layout'
import { employeesList } from '../mocks/data'
import styles from '../styles/Home.module.css'

export default function Home({employees = employeesList}) {
  return(
    <Layout>
      I've got {employees.length} employees!

      <div className={styles.organization}>
        {
          employees.map((employee, index) => {return <EmployeeCard employee={employee} key={index}/>})
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://randomuser.me/api/?results=10")
  let people = JSON.stringify(res);

  return {
    props:{
  people
    }

  }
}
