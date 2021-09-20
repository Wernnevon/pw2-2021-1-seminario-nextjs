import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/ListPages.module.css'

function ChampionsPage({ champions }) {
    console.log(Object.keys(champions));
    let championsList = [];
    Object.keys(champions).forEach((champ) => {
        championsList.push(champions[champ]);
    });
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Todos os Campeões</h1>
            <h3 className={Styles.description}>Escolha sabiamente...</h3>
            <ul className={Styles.result}>
                {championsList.map((champ) => {
                    return (
                        <Link href={`/champions/${champ["id"]}`}>
                            <a className={Styles.card}>
                                <li key={champ["id"]}>
                                    <Image
                                        src={`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/${champ["image"]["full"]}`}
                                        alt="Picture of the champion"
                                        width={100}
                                        height={100}
                                        blurDataURL="data:..."
                                        placeholder="blur"
                                    />
                                    <p>{champ["name"]}, {champ["title"]}</p>
                                </li>
                            </a>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion.json');
    const championsList = await res.json();
    const champions = championsList.data;

    if (!championsList) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            champions,
        },
    }
}

export default ChampionsPage;