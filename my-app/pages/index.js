import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../component/Featured";
import Product from "../component/Product";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Product />
    </div>
  );
}
