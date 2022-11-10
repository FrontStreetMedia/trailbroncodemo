import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getAllPosts } from '../lib/api';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trail Bronco Demo</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <body>
          <div></div>
        </body>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Front Street Media
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {
  const latestPosts = await getAllPosts();
  return {
    props: {latestPosts},
  };
};


