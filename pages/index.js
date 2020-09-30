import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hey..</h1>
      <Link href="/posts/first-post"><a>First Post.</a></Link>
    </div>
);

export default Home;