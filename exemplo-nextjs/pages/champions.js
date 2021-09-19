import Link from 'next/link'

function ChampionsPage({ champions }) {
    console.log(Object.keys(champions));
    let championsList = [];
    Object.keys(champions).forEach((champ) => {
        championsList.push(champions[champ]);
    });
    return (
        <ul>
            {championsList.map((champ) => {
                return (
                    <li key={champ["id"]}>
                        <Link href={`/champions/${champ["id"]}`}>
                            <a>{champ["name"]}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion.json');
    const championsList = await res.json();
    const champions = championsList.data;
    return {
        props: {
            champions,
        },
    }
}

export default ChampionsPage;