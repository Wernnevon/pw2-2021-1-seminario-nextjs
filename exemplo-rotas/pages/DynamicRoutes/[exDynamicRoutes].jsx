import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function DynamicRoute() {
  const router = useRouter()
  const {
    query: { exDynamicRoutes },
  } = router
  return (
    <div className={styles.container}>
    <Head>
      <title>Rotas com parametro</title>
      <meta name="description" content="Rotas que contem parametros" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>Roteamento em Next.js!</h1>
      <h3 className={styles.title}>Rotas Dinamicas</h3>
      <p>Bem vindo, vc acessou como: {exDynamicRoutes}</p>
    </main>
  </div>
  );
}