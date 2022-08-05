import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        HOME PAGE
      </main>

      <footer className={styles.footer}>
        FOOTER
      </footer>

    </div>
  )
}