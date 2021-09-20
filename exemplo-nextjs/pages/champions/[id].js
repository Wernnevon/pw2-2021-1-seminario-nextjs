import Link from 'next/link'
import Image from 'next/image'
import Styles from '../../styles/ListPages.module.css'

function Champion({ champion }) {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>{champion["name"]}</h1>
            <h3 className={Styles.description}>{champion["title"]}</h3>
            <Image
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion["id"]}_0.jpg`}
                alt="Picture of the champion"
                width={800}
                height={400}
                blurDataURL="data:..."
                placeholder="blur"
            />
            <p>{champion["lore"]}</p>
            <Link href="/champions">
                <a class="btn btn-danger" style={{
                    marginTop: 10,
                    marginBottom: 20
                }}>Voltar</a>
            </Link>
        </div >
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion.json');
    const championsList = await res.json();
    const champions = championsList.data;

    let Lista = [];
    Object.keys(champions).forEach((champ) => {
        Lista.push(champions[champ]);
    });
    const paths = Lista.map((path) => ({
        params: { id: path["id"] },
    }))

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion/${params.id}.json`);
    const json = await res.json();
    const champion = json.data[params.id];
    console.log(champion);

    return { props: { champion } };
}

export default Champion;