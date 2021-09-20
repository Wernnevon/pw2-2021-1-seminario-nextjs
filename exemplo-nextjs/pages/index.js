import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App de Exemplo NextJS</title>
        <meta name="description" content="Código exemplo sobre NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Daqui você pode ir a muitos lugares:
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentação &rarr;</h2>
            <p>Encontre informações mais aprofundadas sobre os recursos do Next.js e da API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Aprenda &rarr;</h2>
            <p>Aprenda sobre Next.js em um curso interativo com vários quizes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Exemplos &rarr;</h2>
            <p>Descubra e implemente projetos padrão do Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Implemente &rarr;</h2>
            <p>
              Instantaneamente implemente seu site em Next.js para uma URL pública com Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
