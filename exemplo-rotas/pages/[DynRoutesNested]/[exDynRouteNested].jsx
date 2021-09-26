import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function DynRouteNested() {
  const router = useRouter()
  const {
    query: { DynRoutesNested, exDynRouteNested },
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
      <h3 className={styles.title}>Rotas Dinamicas aninhadas</h3>
      <p>Bem vindo, vc acessou como: {DynRoutesNested} - {exDynRouteNested}</p>
    </main>
  </div>
  );
}