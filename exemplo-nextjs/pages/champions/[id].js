function Champion({ champion }) {
    return (
        <div>
            <p>{champion["name"]}</p>
            <p>{champion["title"]}</p>
        </div>
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

    return {paths, fallback:false};
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion/${params.id}.json`);
    const json = await res.json();
    const champion = json.data[params.id];
    console.log(champion);

    return { props: { champion } };
}

export default Champion;