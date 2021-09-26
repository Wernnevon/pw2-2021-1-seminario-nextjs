import Head from "next/head";
import styles from "../styles/Home.module.css";

function RouteOne() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Primeiros Exemplo Rotas</title>
      <meta name="description" content="Primeira rota" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Roteamento em Next.js!</h1>

    </main>
  </div>
  );
}

export default RouteOne;